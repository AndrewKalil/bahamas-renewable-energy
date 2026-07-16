import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

import { handleContactRequest } from "./api/_lib/handleContactRequest.js";

function contactDevPlugin(env: Record<string, string>) {
  return {
    name: "contact-api",
    configureServer(server: {
      middlewares: {
        // eslint-disable-next-line max-params
        use: (fn: (req: IncomingMessage, res: ServerResponse, next: () => void) => void) => void;
      };
    }) {
      // eslint-disable-next-line max-params
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== "/api/contact" || req.method !== "POST") return next();

        // Read and parse raw body
        const chunks: Buffer[] = [];
        req.on("data", (chunk: Buffer) => chunks.push(chunk));
        await new Promise<void>((resolve) => req.on("end", resolve));

        let body: unknown;
        try {
          body = JSON.parse(Buffer.concat(chunks).toString("utf-8")) as unknown;
        } catch {
          res.statusCode = 400;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Invalid JSON" }));
          return;
        }

        // Derive caller IP
        const forwarded = req.headers["x-forwarded-for"];
        const ip =
          (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(",")[0]?.trim() ??
          req.socket?.remoteAddress ??
          "::1";

        const result = await handleContactRequest({
          body,
          ip,
          env: {
            RESEND_API_KEY: env.RESEND_API_KEY,
            RESEND_TO_EMAIL: env.RESEND_TO_EMAIL,
            RESEND_FROM_EMAIL: env.RESEND_FROM_EMAIL,
          },
        });

        res.setHeader("Content-Type", "application/json");
        if (result.retryAfterSeconds !== undefined) {
          res.setHeader("Retry-After", String(result.retryAfterSeconds));
        }
        res.statusCode = result.status;
        res.end(JSON.stringify(result.json));
      });
    },
  };
}

// eslint-disable-next-line import/no-default-export
export default defineConfig((configEnv) => {
  const { mode } = configEnv;
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), contactDevPlugin(env)],
    server: { port: 3000 },
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "src"),
        "~components": path.resolve(__dirname, "src/components"),
        "~hooks": path.resolve(__dirname, "src/hooks"),
        "~utils": path.resolve(__dirname, "src/utils"),
        "~constants": path.resolve(__dirname, "src/constants"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~providers": path.resolve(__dirname, "src/providers"),
        "~integrations": path.resolve(__dirname, "src/integrations"),
        "~services": path.resolve(__dirname, "src/services"),
        "~types": path.resolve(__dirname, "src/types"),
      },
    },
    css: {
      preprocessorOptions: { scss: { api: "modern-compiler" } },
    },
  };
});
