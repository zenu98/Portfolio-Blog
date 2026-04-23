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
        <button className="flex w-20 py-4 px-2 h-4 text-white font-semibold items-center justify-center">
          <Link href="/admin/projects">Admin</Link>
        </button>

        <form action={signOutUser} className="flex-1">
          <button className="flex w-20 py-4 px-2 h-4 text-white font-semibold items-center justify-center">
            Logout
          </button>
        </form>
      </div>
    );
  }
  return (
    <button className="flex w-20 py-4 px-2 h-4 text-white font-semibold items-center justify-center">
      <Link href="/sign-in">Login</Link>
    </button>
  );
};

export default UserButton;
