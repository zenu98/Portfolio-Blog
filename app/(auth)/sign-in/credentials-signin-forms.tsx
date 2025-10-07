"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";

const CredentialsSignInForm = () => {
  return (
    <form>
      <div className="space-y-6">
        <div>
          <Label htmlFor="email" className="mb-2">
            이메일
          </Label>
          <Input
            id="email"
            name="이메일"
            type="email"
            required
            autoComplete="email"
            defaultValue={signInDefaultValues.email}
          />
        </div>
        <div>
          <Label htmlFor="password" className="mb-2">
            비밀번호
          </Label>
          <Input
            id="password"
            name="비밀번호"
            type="password"
            required
            autoComplete="password"
            defaultValue={signInDefaultValues.password}
          />
        </div>
        <div>
          <Button className="w-full" variant="default">
            로그인
          </Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          계정이 없으신가요?{" "}
          <Link href="/sign-up" target="_self" className="link">
            회원가입
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
