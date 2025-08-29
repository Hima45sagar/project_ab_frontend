"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { LoginFormValues, loginSchema, LoginFormFields } from "../formSchema";

export default function LoginForm({
  onSwitch,
}: {
  onSwitch: (v: "login" | "forgot" | "newpass") => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    shouldFocusError: false,
    criteriaMode: "firstError",
  });

  const onSubmit = (values: LoginFormValues) => {
    toast.success("Welcome back!", { description: values.email });
  };

  const onError = (errs: Record<string, any>) => {
    const first = Object.values(errs)[0];
    toast.error(first?.message as string);
  };

  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-xl backdrop-blur-lg md:p-8">
      <div className="mb-1 flex items-center justify-center gap-2">
        <Image
          src="/logos/main.png"
          alt="CarbonScan.ai"
          width={35}
          height={35}
        />
        <span className="font-montserrat text-xl font-semibold tracking-wide">
          CarbonScan.ai
        </span>
      </div>
      <p className="mb-8 text-center text-sm text-[#f3f4f6]">
        Track emissions. Gain insights. Drive change.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="space-y-5"
        noValidate
      >
        {LoginFormFields.map((field) => (
          <div key={field.name} className="space-y-2">
            <Label htmlFor={field.name} className="text-[#f3f4f6]">
              {field.placeholder}
            </Label>
            <Input
              id={field.name}
              type={field.type}
              placeholder={field.placeholder}
              {...register(field.name)}
              className="border-[#e5e7eb] bg-white/10 text-white placeholder-[#c7cbd1] backdrop-blur-md focus-visible:border-[#51b575] focus-visible:ring-[#2b5f5d]"
            />
          </div>
        ))}

        <div className="flex items-center justify-between">
          <label className="inline-flex items-center gap-2 text-sm text-[#f3f4f6]">
            <Checkbox className="data-[state=checked]:bg-[#51b575] data-[state=checked]:border-[#51b575]" />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => onSwitch("forgot")}
            className="text-sm text-[#b6e0d0] underline-offset-4 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full rounded-xl bg-[#51b575] text-white shadow-lg shadow-black/10 hover:opacity-95 focus-visible:ring-[#2b5f5d] disabled:opacity-70"
        >
          {isSubmitting ? "Please wait..." : "Login"}
        </Button>
      </form>

      <div className="mt-4 text-center text-xs text-[#414751]">
        By logging in you agree to our Terms and Privacy Policy.
      </div>
    </div>
  );
}
