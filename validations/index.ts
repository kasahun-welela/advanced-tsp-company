import { z } from "zod";

export const scheduleFormSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  companyName: z.string().min(1, { message: "Company name is required" }),
  companySize: z.string().min(1, { message: "Company size is required" }),
  industry: z.string().min(1, { message: "Industry is required" }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  hasITProvider: z.enum(["yes", "no", "unsure"], {
    message: "Please select an option.",
  }),
  servicesInterested: z.array(z.string()).min(1, {
    message: "Please select at least one service.",
  }),
});