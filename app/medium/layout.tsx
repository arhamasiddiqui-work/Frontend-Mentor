import MediumHeader from "@/components/web/medium/header/component";
import { ReactNode } from "react";

export default function Page({ children }: { children: ReactNode }) {
  return (
    <>
      <MediumHeader />
      <main>{children}</main>
    </>
  );
}
