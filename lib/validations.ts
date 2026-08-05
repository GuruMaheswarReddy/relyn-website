import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be at most 80 characters"),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(120, "Email must be at most 120 characters"),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(20, "Phone must be at most 20 characters")
    .regex(/^[\d+\-\s()]+$/, "Enter a valid phone number"),
  company: z
    .string()
    .trim()
    .max(100, "Company must be at most 100 characters")
    .optional()
    .or(z.literal("")),
  service: z.enum(
    ["website-development", "digital-marketing", "seo", "meta-ads", "other"],
    { error: "Select a service" },
  ),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
