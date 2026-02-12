"use client";

import { toggleOngoing } from "@/lib/actions/product.actions";
import { useOptimistic, useTransition } from "react";

interface OngoingToggleProps {
  id: string;
  isOngoing: boolean;
}

const OngoingToggle = ({ id, isOngoing }: OngoingToggleProps) => {
  const [optimisticIsOngoing, setOptimisticIsOngoing] =
    useOptimistic(isOngoing);
  const [isPending, startTransition] = useTransition();

  const handleToggle = () => {
    startTransition(async () => {
      setOptimisticIsOngoing(!optimisticIsOngoing);
      await toggleOngoing(id);
    });
  };
  return (
    <button
      onClick={handleToggle}
      disabled={isPending}
      className={`
    px-3 py-1 rounded-sm border ml-2
    ${optimisticIsOngoing ? "border-blue-500 text-blue-500 hover:bg-blue-50" : "border-gray-100 text-gray-300 hover:bg-gray-100"}
    
    `}
    >
      {optimisticIsOngoing ? "진행중" : "종료"}
    </button>
  );
};

export default OngoingToggle;
