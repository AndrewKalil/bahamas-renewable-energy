export interface ContactPayload {
  fullName: string;
  phone: string;
  email: string;
  island: string;
  package: string;
  message: string;
  /** Honeypot - hidden from users; should always be empty for real submissions. */
  company: string;
  /** Milliseconds elapsed since the form was rendered; used for bot-timing detection. */
  elapsedMs: number;
}
