import { QrCodeIcon } from "lucide-react";
import BackToHomePage from "../back to home/page";

export default function QrCodeComponent() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-100 ">
      <div className="h-fit w-67 rounded-xl bg-white p-3 shadow-2xl">
        <div className="h-50 rounded-xl bg-blue-500">
          <div className="flex items-center justify-center">
            <QrCodeIcon className="m-7 size-35 text-white" />
          </div>
        </div>
        <div className="flex flex-col gap-3 p-3">
          <p className="text-lg font-bold">
            Improve your front-end skills by building projects
          </p>
          <p className="text-sm font-semibold text-gray-600">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <BackToHomePage/>
    </div>
  );
}
