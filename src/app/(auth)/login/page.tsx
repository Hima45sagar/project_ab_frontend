"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import LoginForm from "./LoginForm";
import ForgotForm from "./ForgotForm";
import NewPasswordForm from "./NewPasswordForm";
import { useSearchParams } from "next/navigation";

export default function AuthPage() {
  const searchParams = useSearchParams();
  const viewParam = searchParams.get("view");
  const [view, setView] = useState<"login" | "forgot" | "newpass">("login");

  useEffect(() => {
    if (viewParam === "forgot" || viewParam === "newpass") {
      setView(viewParam);
    }
  }, [viewParam]);

  return (
    <main className="relative min-h-screen w-full bg-[#2b5f5d] text-white">
      <Image
        src="/images/nature.png"
        alt="Nature"
        fill
        className="object-cover object-right"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#2b5f5d] via-[#2b5f5d]/80 to-transparent" />

      <section className="mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 md:px-10">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {view === "login" && (
              <motion.div
                key="login"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <LoginForm onSwitch={setView} />
              </motion.div>
            )}

            {view === "forgot" && (
              <motion.div
                key="forgot"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <ForgotForm onSwitch={setView} />
              </motion.div>
            )}

            {view === "newpass" && (
              <motion.div
                key="newpass"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
              >
                <NewPasswordForm onSwitch={setView} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden flex-1 md:block" />
      </section>
    </main>
  );
}
