import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, X } from "lucide-react";
import BookmarkFilters from "./bookmark-filters";
import { Bookmarks } from "@/lib/types";

export function BookmarkSide({ bookmarks }: { bookmarks: Bookmarks }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} size={"icon"} className="md:hidden">
          <SlidersHorizontal className="opacity-60" size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="h-full p-5 overflow-y-auto">
          <BookmarkFilters bookmarks={bookmarks} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
