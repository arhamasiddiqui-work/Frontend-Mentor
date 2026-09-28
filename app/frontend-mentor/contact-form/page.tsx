"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [queryType, setQueryType] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [queryTypeError, setQueryTypeError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [consentError, setConsentError] = useState("");

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const queryRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const Submit = () => {
    setFirstName("");
    if (firstName === "") {
      setFirstNameError("Please enter your first name");
      return;
    }
    if (firstName.length < 3 != false) {
      setFirstNameError("Please enter atleast 3 characters");
      return;
    }
    setFirstNameError("");
    setFirstName(firstName);

    setLastName("");
    if (lastName === "") {
      setLastNameError("Please enter your last name");
      return;
    }
    if (lastName.length < 3 != false) {
      setLastNameError("Please enter atleast 3 characters");
      return;
    }
    setLastNameError("");
    setLastName(lastName);

    setEmail("");
    if (email === "") {
      setEmailError("Please enter a valid email address");
      return;
    }
    if (email.endsWith("@gmail.com") === false) {
      setEmailError("Please enter valid email address, @gmail.com is missing");
      return;
    }
    setEmailError("");
    setEmail(email);

    setQueryType("");
    if (queryType === "") {
      setQueryTypeError("Please select a query type");
      return;
    }
    setQueryType(queryType);
    setQueryTypeError("");

    setMessage("");
    if (message === "") {
      setMessageError("Please enter a message");
      return;
    }

    if (message.length < 10) {
      setMessageError("Please enter atleast 10 characters");
      return;
    }
    setMessage(message);
    setMessageError("");

    setConsent(false);
    if (consent === false) {
      setConsentError("Please agree to terms and conditions");
      return;
    }
    setConsentError("");
    setConsent(consent);

    if (firstNameRef.current) {
      firstNameRef.current.value = "";
    }
    if (lastNameRef.current) {
      lastNameRef.current.value = "";
    }
    if (emailRef.current) {
      emailRef.current.value = "";
    }

    if (messageRef.current) {
      messageRef.current.value = "";
    }
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
    setQueryTypeError("");
    setMessageError("");
    setConsentError("");

    toast.success("Form submitted successfully!");
  };
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-green-100">
      <div className="flex max-w-113 flex-col gap-5 rounded-xl bg-white px-6 py-7">
        <p className="text-3xl font-semibold">Contact Us</p>

        <div className="flex flex-1 flex-col flex-wrap gap-3 md:flex-row md:gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-black/70">First Name</p>
            <p className="flex-wrap text-xs leading-none text-red-500">
              {firstNameError}
            </p>

            <Input
              className={cn("flex-1 p-3", {
                "border-red-500 bg-red-100 focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                  firstNameError !== "",
              })}
              placeholder="John"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  Submit();
                }
              }}
              ref={firstNameRef}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-black/70">Last Name</p>
            <p className="flex-wrap text-xs leading-none text-red-500">
              {lastNameError}
            </p>
            <Input
              className={cn("flex-1 p-3", {
                "border-red-500 bg-red-100 focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                  lastNameError != "",
              })}
              placeholder="Doe"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  Submit();
                }
              }}
              ref={lastNameRef}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-black/70">Email Address</p>
          <p className="text-xs leading-none text-red-500">{emailError}</p>
          <Input
            className={cn("p-5", {
              "border-red-500 bg-red-100 focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                emailError != "",
            })}
            placeholder="name@example.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                Submit();
              }
            }}
            ref={emailRef}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-black/70">Query Type</p>
          <p className="text-xs leading-none text-red-500">{queryTypeError}</p>
          <RadioGroup
            className="flex flex-col gap-4 md:flex-row md:gap-10"

            onValueChange={(value) => {
              setQueryType(value);
            }}
            value={queryType}
            onKeyUp={(e) => {
              if (e.code == "Enter") {
                Submit();
              }
            }}
          >
            <div className="flex items-center gap-2 rounded-lg border px-6 py-3">
              <RadioGroupItem value="general" />
              <Label
                htmlFor="general"
                className="text-sm"
              >
                General Inquiry
              </Label>
            </div>

            <div className="flex items-center gap-2 rounded-lg border px-6 py-3">
              <RadioGroupItem value="support" />
              <Label
                htmlFor="support"
                className="text-sm"
              >
                Support Request
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm text-black/70">Message</p>
          <p className="leading-none text-red-500">{messageError}</p>
          <Textarea
            className={cn("p-3", {
              "border-red-500 bg-red-100 focus:border-red-500 focus-visible:border-red-500 focus-visible:ring-0 focus-visible:outline-none":
                messageError != "",
            })}
            placeholder="Your message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                Submit();
              }
            }}
            ref={messageRef}
          />
        </div>

        <p className="text-xs leading-0 text-red-500">{consentError}</p>
        <div className="flex items-center gap-3 md:flex-row">
          <Checkbox
            checked={consent}
            onCheckedChange={(checked) => {
              setConsent(checked);
            }}
            onKeyUp={(e) => {
              if (e.code === "Enter") {
                Submit();
              }
            }}
          />
          <Label
            htmlFor="consent"
            className="text-sm text-black"
          >
            I consent to being contacted by the team
          </Label>
        </div>

        <Button
          className="text-md cursor-pointer rounded-xl bg-emerald-700/92 p-6 font-semibold text-white"
          onClick={Submit}
        >
          Submit
        </Button>
      </div>
      <BackToHomePage />
    </div>
  );
}
