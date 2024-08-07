import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col pt-20 items-center space-y-2">
      <h2 className="text-2xl font-bold">Not Found - 404!</h2>
      <p>Could not find requested resource</p>
      <Link href="/" className="mt-10">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
