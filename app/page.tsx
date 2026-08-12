import MainMediumFooter from "@/components/web/medium/main footer/component";
import MainMediumHeader from "@/components/web/medium/main header/component";
import MediumMain from "@/components/web/medium/main/component";

export default function Home() {
  return (
    <div className="bg-[#F7F4ED]">
      <MainMediumHeader />
      <MediumMain />
      <MainMediumFooter />
    </div>
  );
}
