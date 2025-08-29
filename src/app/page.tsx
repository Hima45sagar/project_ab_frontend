// import { COOKIE_USER_INFO } from "@/lib/constants";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootRedirect() {
  // temporarily disabled auth check
  // const cookieStore = await cookies();
  // const hasLoggedIn = cookieStore.get(COOKIE_USER_INFO);

  // redirect(hasLoggedIn ? "/login" : "/register");
  redirect("/login");
}
