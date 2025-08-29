import { z } from "zod";

export const registerSchema = z.object({
    industry: z.string().trim().min(2, "Industry is required"),
    organization: z.string().trim().min(2, "Organization is required"),
    email: z.string().trim().email("Invalid email address"),
    contact: z.string().trim().regex(/^\d{10}$/, "Contact must be 10 digits"),
    gst: z
        .string()
        .trim()
        .min(1, "GST is required")
        .refine((v) => !v || /^[A-Za-z0-9]{15}$/.test(v), {
            message: "GST must be 15 alphanumeric characters",
        }),
});

export const loginSchema = z.object({
    email: z.string().trim().email("Invalid email address"),
    password: z.string().trim().min(6, "Password must be at least 6 characters"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
export type LoginFormValues = z.infer<typeof loginSchema>;

export const RegisterFormFields = [
    { name: "industry", placeholder: "Industry", type: "text" },
    { name: "organization", placeholder: "Organization", type: "text" },
    { name: "email", placeholder: "Email ID", type: "email" },
    { name: "contact", placeholder: "Contact", type: "tel" },
    { name: "gst", placeholder: "GST", type: "text" },
] as const;

export const LoginFormFields = [
    { name: "email", placeholder: "Email ID", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
] as const;

/* ---------- Forgot Password ---------- */
export const ForgotFormFields = [
    { name: "email", placeholder: "Registered Email ID", type: "email" },
] as const;

export const forgotPasswordSchema = z.object({
    email: z.string().trim().email("Enter a valid registered email"),
});
export type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

/* ---------- New Password ---------- */
export const NewPasswordFormFields = [
    { name: "password", placeholder: "Create new password", type: "password" },
    { name: "confirmPassword", placeholder: "Confirm new password", type: "password" },
] as const;

export const newPasswordSchema = z
    .object({
        password: z.string().trim().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().trim(),
    })
    .refine((v) => v.password === v.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type NewPasswordValues = z.infer<typeof newPasswordSchema>;