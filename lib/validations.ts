import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  type: z.enum(["general", "partnership", "support", "other"]),
  message: z.string().min(10, "Message must be at least 10 characters"),
  privacyConsent: z.boolean(),
  // Honeypot field (should be empty)
  website: z.string().max(0).optional(),
}).refine((data) => data.privacyConsent === true, {
  message: "You must agree to the privacy policy",
  path: ["privacyConsent"],
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
