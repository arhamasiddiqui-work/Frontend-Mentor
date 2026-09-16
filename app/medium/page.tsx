import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function Medium() {
  return (
    <div className="bg-black p-3 text-white">
      <header>
        <div>
          <Button className="bg-accent-foreground hover:bg-neutral-700">
            <MenuIcon />
          </Button>
        </div>
        <div></div>
        <div></div>
      </header>
    </div>
  );
}
