"use client";
import { cn } from "@/lib/utils";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import { Sparkle } from "lucide-react";
import { useState } from "react";
import BackToHomePage from "../back to home/page";

export default function Page() {
  const [days, setDays] = useState("");
  const [months, setMonths] = useState("");
  const [years, setYears] = useState("");

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  const [age, setAge] = useState({
    years: 0,
    months: 0,
    days: 0,
  });

  const submitDay = (days: any) => {
    setDayError("");
    if (days == "" || days < 1 || days > 31) {
      setDayError("Must be a valid day");
      return false;
    }
    return true;
  };

  const submitMonth = (months: any) => {
    setMonthError("");
    if (months === "" || months < 1 || months > 12) {
      setMonthError("Must be a valid month");
      return false;
    }
    return true;
  };

  const submitYear = (years: any) => {
    setYearError("");
    if (years == "" || years > new Date().getFullYear()) {
      setYearError("Must be in the past");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    // Save the entered day, month, and year
    submitDay(days);
    submitMonth(months);
    submitYear(years);

    //  Create the birth date
    const birthDate = new Date
    // JavaScript counts months starting from 0, so we need to subtract 1 from the month
    (Number(years), Number(months) - 1, Number(days));

    // Get today's date
    const today = new Date();

    // calculates the number of complete years between two dates
    const ageYears = differenceInYears(today, birthDate);

    // Create the date after adding those years
    // eg: birthDate = May, 15, 2005 &  ageYears = 21
    const afterYears = new Date(
      birthDate.getFullYear() + ageYears,   //2005+21= 2026
      birthDate.getMonth()  ,                 //4
      birthDate.getDate(),                  //15
    );

    // Calculate the remaining months  
    //   May 15 → September 15     // 4 months
    const ageMonths = differenceInMonths(today, afterYears);


    // Create a date after adding those months
    // e.g: afterYears = May 15, 2026 & ageMonths = 4, 
    const afterMonths = new Date(
      afterYears.getFullYear(),     //2026
      afterYears.getMonth() + ageMonths,  //4 (May), 4 + 4 = 8(sep)
      afterYears.getDate(),         //15
    );


    // Calculate the remaining days
    const ageDays = differenceInDays(today, afterMonths);

    // e.g: Today:September 22 & afterMonths:September 15
    // 22 - 15 = 7 days
    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });

  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-200">
      <div className="flex max-w-xl flex-1 flex-col gap-5 bg-white  p-9 rounded-xl rounded-br-[100px] ">
        <div className="flex flex-1 gap-5">
          <div className="flex flex-col gap-1">
            <p
              className={cn(
                "text-sm font-semibold tracking-wide text-black/60 uppercase",
                {
                  "text-red-500": dayError != "",
                },
              )}
            >
              Day
            </p>
            <input
              type="number"
              placeholder="DD"
              className={cn(
                "w-30 rounded-lg border px-3 py-2 text-lg font-bold outline-0",
                {
                  "border-red-500": dayError != "",
                },
              )}
              onChange={(e) => setDays(e.target.value)}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <p className="text-sm text-red-500">{dayError}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p
              className={cn(
                "text-sm font-semibold tracking-wide text-black/60 uppercase",
                {
                  "text-red-500": monthError != "",
                },
              )}
            >
              Month
            </p>
            <input
              type="number"
              placeholder="MM"
              className={cn(
                "w-30 rounded-lg border px-3 py-2 text-lg font-bold outline-0",
                {
                  "border-red-500": monthError != "",
                },
              )}
              onChange={(e) => setMonths(e.target.value)}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <p className="text-sm text-red-500">{monthError}</p>
          </div>
          <div className="flex flex-col gap-1">
            <p
              className={cn(
                "text-sm font-semibold tracking-wide text-black/60 uppercase",
                {
                  "text-red-500": yearError != "",
                },
              )}
            >
              Year
            </p>

            <input
              type="number"
              placeholder="YYYY"
              className={cn(
                "w-30 rounded-lg border px-3 py-2 text-lg font-bold outline-0",
                {
                  "border-red-500": yearError != "",
                },
              )}
              onChange={(e) => {
                setYears(e.target.value);
              }}
              onKeyUp={(e) => {
                if (e.code === "Enter") {
                  handleSubmit();
                }
              }}
            />
            <p className="text-sm text-red-500">{yearError}</p>
          </div>
        </div>

        <div className="flex flex-1 items-center">
          <div className="flex-1 border border-black/10"></div>
          <button
            className="cursor-pointer rounded-full bg-violet-500 p-3"
            onClick={handleSubmit}
          >
            <Sparkle
              size={35}
              className="rounded-full text-white"
            />
          </button>
        </div>

        <div className="flex flex-1 gap-5">
          <div className="text-5xl text-violet-500">{age.years} </div>
          <p className="text-6xl font-extrabold italic">years</p>
        </div>
        <div className="flex flex-1 gap-5">
          <div className="text-5xl text-violet-500">{age.months}</div>
          <p className="text-6xl font-extrabold italic">months</p>
        </div>
        <div className="flex flex-1 gap-5">
          <div className="text-5xl text-violet-500">{age.days}</div>
          <p className="text-6xl font-extrabold italic">days</p>
        </div>
      </div>
      <BackToHomePage />
    </div>
  );
}
