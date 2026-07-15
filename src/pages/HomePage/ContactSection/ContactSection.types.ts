export interface ContactFormValues {
  fullName: string;
  phone: string;
  email: string;
  island: string;
  package: string;
  message: string;
  /** Honeypot — hidden from users; must remain empty for real submissions. */
  company: string;
}

export type SubmitStatus = "idle" | "loading" | "success" | "error";
