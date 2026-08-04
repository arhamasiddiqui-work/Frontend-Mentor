import MediumFooter from "@/components/web/medium/main footer/component";
import MediumHeader from "@/components/web/medium/header/component";
import MediumMain from "@/components/web/medium/main/component";

export default function Home() {
  return (
    <div className="bg-[#F7F4ED] ">
      <MediumHeader/>
      <MediumMain/>
      <MediumFooter/>
    </div>
  );
}
