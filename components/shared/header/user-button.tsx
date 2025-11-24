import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { signOutUser } from "@/lib/actions/user.action";
import { UserIcon } from "lucide-react";
import Link from "next/link";

const UserButton = async () => {
  const session = await auth();
  if (session) {
    return (
      <div className="flex w-full items-center gap-2">
        <Button asChild className="w-20 py-4 px-2 h-4">
          <Link href="/admin/projects">관리자</Link>
        </Button>

        <form action={signOutUser} className="flex-1">
          <Button className="w-20 py-4 px-2 h-4">로그아웃</Button>
        </form>
      </div>
    );
  }
  return (
    <Button asChild>
      <Link href="/sign-in">
        <UserIcon /> 로그인
      </Link>
    </Button>
  );
};

export default UserButton;
