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
import ProjectFilters from "./project-filters";
import { Projects } from "@/lib/types/types";

export function FilterSide({ projects }: { projects: Projects }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"secondary"} size={"icon"} className="md:hidden">
          <SlidersHorizontal className="opacity-60" size={18} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="h-full p-5 overflow-y-auto">
          <ProjectFilters projects={projects} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
