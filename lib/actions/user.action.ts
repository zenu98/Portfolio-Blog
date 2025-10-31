"use server";

import { signInForm } from "../validators";
import { signIn, signOut } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export async function signInWithCredentials(
  prevState: unknown,
  formData: FormData
) {
  console.log("\n========== 로그인 시도 ==========");
  console.log("📧 이메일:", formData.get("email"));
  console.log("🔑 비밀번호:", formData.get("password") ? "있음" : "없음");
  try {
    const user = signInForm.parse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    await signIn("credentials", user);

    return { success: true, message: "로그인 성공" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: "잘못된 이메일 또는 비밀번호 입니다." };
  }
}

export async function signOutUser() {
  await signOut();
}
