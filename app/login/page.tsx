"use client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function Login() {
  const toastGoogle = () => {
    toast.success("Google login is not available yet!");
  };
  const toastGithub = () => {
    toast.success("Github login is not available yet!");
  };
  return (
    <div className="grid h-screen place-content-center bg-slate-100">
      <div className="flex h-100 w-96 flex-col items-center justify-center rounded-md bg-white shadow-md sm:w-96">
        <Image
          src="/medium-icon.svg"
          alt="Medium Icon"
          width={60}
          height={60}
        />
        <p className="text-lg font-bold">Login into your account</p>

        <div
          className="mt-3 flex cursor-pointer items-center gap-2 rounded-lg border bg-gray-100 p-2 hover:bg-gray-200/30"
          onClick={() => toastGoogle()}
        >
          <Image
            src="/google-logo.png"
            alt="Google Logo"
            width={40}
            height={40}
          />
          <p className="text-lg font-semibold">Sign in with Google</p>
        </div>
        <div
          className="mt-3 flex cursor-pointer items-center gap-2 rounded-lg border bg-gray-100 p-2 hover:bg-gray-200/30"
          onClick={() => toastGithub()}
        >
          <Image
            src="/github-logo.png"
            alt="Github Logo"
            width={40}
            height={40}
          />
          <p className="text-lg font-semibold">Sign in with Github</p>
        </div>
        <Link
          href="/"
          className="text-md mt-2 text-blue-600 underline"
        >
          Go to Home page
        </Link>
      </div>
    </div>
  );
}

// "use client";
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import { FieldGroup } from "@/components/ui/field";
// import { Button, Field } from "@base-ui/react";
// import { toast } from "sonner";

// export default function Login() {
//   const toastGoogle = () => {
//     toast.success("Google login is not available yet!");
//   };
//   const toastGithub = () => {
//     toast.success("Github login is not available yet!");
//   };
//   return (
//     <Dialog>
//       <DialogContent className="sm:max-w-sm">
//         <DialogHeader>
//           <DialogTitle>Login into your account</DialogTitle>
//           <DialogDescription>
//             Enter your credentials to access your account.
//           </DialogDescription>
//         </DialogHeader>
//         <FieldGroup>
//           <Field></Field>
//           <Field></Field>
//         </FieldGroup>
//         <DialogFooter>
//           <DialogClose render={<Button variant="outline">Cancel</Button>} />
//           <Button type="submit">Save changes</Button>
//         </DialogFooter>
//       </DialogContent>
//     </Dialog>
//   );
// }
