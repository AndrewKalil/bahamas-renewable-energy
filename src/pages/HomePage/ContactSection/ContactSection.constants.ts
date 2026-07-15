import { object, string } from "yup";

import type { ContactFormValues } from "./ContactSection.types";

export const CONTACT_INITIAL_VALUES: ContactFormValues = {
  fullName: "",
  phone: "",
  email: "",
  island: "",
  package: "",
  message: "",
  company: "", // honeypot — must remain empty
};

export const CONTACT_SCHEMA = object({
  fullName: string()
    .trim()
    .required("Full name is required")
    .max(100, "Full name must be 100 characters or fewer"),
  phone: string()
    .trim()
    .required("Phone number is required")
    .max(30, "Phone number must be 30 characters or fewer"),
  email: string()
    .trim()
    .email("Enter a valid email")
    .required("Email is required")
    .max(200, "Email must be 200 characters or fewer"),
  island: string()
    .trim()
    .required("Island / area is required")
    .max(100, "Island / area must be 100 characters or fewer"),
  package: string().max(200, "Package selection is too long"),
  message: string().max(5000, "Message must be 5,000 characters or fewer"),
  company: string(), // honeypot — no validation, intentionally left open
});
