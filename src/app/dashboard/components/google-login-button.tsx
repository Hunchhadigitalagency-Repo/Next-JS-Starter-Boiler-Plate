"use client";
import { useSearchParams } from "next/navigation";
import { Icons } from "./icons";
import { Button } from "@/components/ui/button";

export default function GoogleSignInButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <Button className="w-full" variant="outline" type="button">
      <Icons.google className="mr-2 h-4 w-4" />
      Continue with Google
    </Button>
  );
}
