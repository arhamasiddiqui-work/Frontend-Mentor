"use client";
import {
  BedDouble,
  Copy,
  Euro,
  House,
  Key,
  Mail,
  MapPin,
  Menu,
  QrCode,
  SunIcon,
  UtensilsCrossed,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import BackToHomePage from "../back to home/page";

export default function Page() {
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText("soleil-2026 ");
    toast.success("Copied to clipboard!");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-amber-50 sm:flex-row">
      <div className="w-full p-5 sm:min-h-screen sm:w-80 sm:border-r">
        <div className="flex items-center justify-between border-b pb-3">
          <div className="flex items-center gap-2">
            <SunIcon
              size="40"
              className="text-amber-600 transition-all hover:animate-spin"
            />
            <p className="flex flex-col font-serif tracking-tight">
              <span className="text-2xl font-semibold text-amber-700 italic">
                Maison
              </span>
              <span className="text-xl font-semibold">Soleil</span>
            </p>
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-xl p-2 hover:bg-amber-600/50 sm:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="hidden flex-col sm:flex">
          <div className="mt-4 flex min-h-185 flex-col justify-between border-b pb-3">
            <div className="cursor-pointer">
              <div className="flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-white">
                <BedDouble />
                <p className="font-semibold">Your stay</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-white">
                <House />
                <p className="font-semibold">The house</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-white">
                <MapPin />
                <p className="font-semibold">Around town</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-white">
                <UtensilsCrossed />
                <p className="font-semibold">Breakfast</p>
              </div>
              <div className="flex items-center gap-2 rounded-xl p-3 transition-colors hover:bg-white">
                <Mail />
                <p className="font-semibold"> Messages</p>
              </div>
            </div>

            <div className="rounded-2xl bg-orange-200 p-4 shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-orange-300">
              <p className="text-[12px] font-semibold text-neutral-500 uppercase">
                Today in Cassis
              </p>
              <p className="playfair text-4xl font-bold tracking-tight">27°</p>
              <p className="text-sm">Sunny • light breeze</p>
            </div>
          </div>
          <div className="mt-4 flex flex-col gap-2 text-sm font-semibold tracking-wide text-neutral-500 uppercase">
            <p>est . 1987</p>
            <p>maison soleil . 12 rue des olivers . cassis</p>
            <p>©2026 maison soleil</p>
          </div>
        </div>

        <div className="sm:hidden">
          {menuOpen && (
            <div className="mt-2 w-full rounded-2xl bg-black/20 p-5">
              <div className="flex cursor-pointer flex-col gap-1">
                <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-neutral-100">
                  <BedDouble />
                  <p className="font-semibold">Your stay</p>
                </div>

                <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-neutral-100">
                  <House />
                  <p className="font-semibold">The house</p>
                </div>

                <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-neutral-100">
                  <MapPin />
                  <p className="font-semibold">Around town</p>
                </div>

                <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-neutral-100">
                  <UtensilsCrossed />
                  <p className="font-semibold">Breakfast</p>
                </div>

                <div className="flex items-center gap-2 rounded-xl p-3 hover:bg-neutral-100">
                  <Mail />
                  <p className="font-semibold">Messages</p>
                </div>
              </div>

              <div className="transition-color mt-3 w-70 rounded-2xl bg-orange-200 p-4 shadow-md duration-500 hover:bg-orange-300">
                <p className="text-[12px] font-semibold text-neutral-500 uppercase">
                  Today in Cassis
                </p>

                <p className="playfair text-4xl font-bold tracking-tight">
                  27°
                </p>

                <p className="text-sm">Sunny • light breeze</p>
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm font-semibold tracking-wide text-neutral-700 uppercase">
                <p>est . 1987</p>
                <p>maison soleil . 12 rue des olivers . cassis</p>
                <p>©2026 maison soleil</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* main 2 cards */}
      <div className="min-w-0 flex-1 flex-col p-5">
        <div>
          <p className="text-[12px] font-semibold tracking-wider text-neutral-600 uppercase">
            Booking • Confirmed
          </p>
          <div className="flex justify-between max-sm:flex-col">
            <p className="font-serif text-4xl tracking-tight">
              <span className="text-4xl">Bienvenue,</span>
              &nbsp;
              <span className="text-amber-700 italic">Lucia.</span>
            </p>
            <div className="flex gap-3 max-sm:mt-4 max-sm:justify-center">
              <button className="shrink-0 rounded-full border border-black p-2 transition-colors duration-300 hover:bg-black/20">
                Print receipt
              </button>
              <button className="shrink-0 rounded-full bg-black p-2 text-white">
                Add to calendar
              </button>
            </div>
          </div>

          <div className="mt-5 w-full">
            <div className="flex w-full flex-col items-center gap-4 py-4 md:flex-row md:items-center md:overflow-auto lg:justify-center">
              <div className="flex h-100 w-80 shrink-0 cursor-pointer flex-col gap-8 overflow-hidden rounded-2xl bg-gradient-to-b from-amber-600 to-amber-700 p-5 text-white shadow-2xl shadow-amber-700 transition-all duration-600 hover:-translate-y-1 hover:bg-gradient-to-b hover:from-amber-700 hover:to-amber-600 lg:order-2">
                <div className="flex justify-between border-t border-dashed border-white/40 pt-4">
                  <p className="text-sm text-white/80 uppercase">
                    ~welcome card~
                  </p>
                  <SunIcon size="30" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-yellow-400/80 italic">
                    A note from your host,
                  </p>
                  <p className="font-serif text-3xl italic">Margaux.</p>
                </div>
                <p className="font-light">
                  We&apos;re so glad you&apos;re coming.The shutters will be
                  open,the lemonade cold,and the cat - Poivre - pretending not
                  to notice you.
                </p>

                <div>
                  <p className="text-sm text-white/80 uppercase">room</p>
                  <p className="font-serif text-xl">La Garrigue</p>
                </div>
              </div>

              <div className="order-1 flex h-100 w-80 shrink-0 cursor-pointer flex-col overflow-hidden rounded-2xl bg-white p-5 shadow-2xl transition-all duration-600 hover:-translate-y-1">
                <div className="border-b border-dashed py-2">
                  <div className="text-muted-foreground flex justify-between text-[13px]">
                    <p className="uppercase">Receipt</p>
                    <p>No MS-2026</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-serif text-xl">Your stay</p>
                    <p className="text-muted-foreground text-[13px]">0421-AH</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-between border-b border-dashed pb-4">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-[13px] uppercase">
                      Check in
                    </p>
                    <p className="font-serif text-3xl font-semibold">25 Apr</p>
                    <p className="text-[13px] text-gray-800">
                      Saturday • 15:00
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-[13px] uppercase">
                      Check out
                    </p>
                    <p className="font-serif text-3xl font-semibold">29 Apr</p>
                    <p className="text-[13px] text-gray-800">
                      Wednesday • 11:00
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-2 border-b border-black pb-3">
                  <div className="flex justify-between text-sm">
                    <p className="tracking-tight">
                      Room • La Garrigue x 4 nights
                    </p>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Euro size="15" />
                      <p>620.00</p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <p className="tracking-tight">Breakfast x 2 guests</p>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Euro size="15" />
                      <p>96.00</p>
                    </div>
                  </div>
                  <div className="text-muted-foreground flex justify-between text-sm">
                    <p className="tracking-tight">Tourist tax</p>
                    <div className="flex items-center gap-1">
                      <Euro size="15" />
                      <p>14.40</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex flex-col justify-end gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600 uppercase">
                      Total paid
                    </p>
                    <div className="flex items-center text-2xl">
                      <Euro size="30" />
                      <p>730.40</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-neutral-600 uppercase">
                      paid • wise • gbp
                    </p>
                    <QrCode size="35" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom 3 cards */}
        <div className="mt-15 mb-15 flex flex-col items-center gap-5 overflow-auto max-sm:mt-10 md:flex-row md:gap-10 lg:justify-center">
          <div className="flex max-w-xs shrink-0 flex-col gap-3 rounded-2xl border bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Key className="size-9 rounded-lg bg-amber-800 p-1 text-white" />
                <p className="text-[15px] font-semibold tracking-widest text-amber-800 uppercase">
                  Arrival
                </p>
              </div>
              <p className="text-xl font-semibold text-amber-800">01</p>
            </div>

            <div>
              <p className="font-serif text-xl">Check-in from 15:00</p>
              <p className="text-muted-foreground text-sm">Sat, 25 April</p>
            </div>
            <p className="tracking-tight text-neutral-700">
              Ring the brass bell by the blue door. If we&apos;re at the market,
              the key is the terracota pot by the olive tree
            </p>
          </div>

          <div className="flex max-w-xs shrink-0 flex-col gap-3 rounded-2xl border bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Wifi className="size-9 rounded-lg bg-blue-700 p-1 text-white" />
                <p className="text-[15px] font-semibold tracking-widest text-blue-700 uppercase">
                  Wifi
                </p>
              </div>
              <p className="text-xl font-semibold text-blue-700">02</p>
            </div>

            <div>
              <p className="font-serif text-xl">Le Soleil • Guest</p>
              <p className="text-muted-foreground text-sm">Password below</p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-between rounded-xl bg-neutral-200 p-2">
                <p className="text-sm tracking-wide text-neutral-500 uppercase">
                  Network
                </p>
                <p>Le Soleil • Guest </p>
              </div>

              <div className="flex w-70 items-center justify-between rounded-xl bg-neutral-200 p-2">
                <p className="text-sm tracking-wide text-neutral-500 uppercase">
                  Password
                </p>
                <div className="flex items-center gap-1">
                  <p>soleil-2026</p>
                  <button
                    className="flex items-center gap-1 rounded-full border border-gray-400 px-2 text-[12px] text-gray-600 uppercase transition-colors duration-300 hover:bg-neutral-300"
                    onClick={copyToClipboard}
                  >
                    copy
                    <Copy size="15" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-xs shrink-0 flex-col gap-3 rounded-2xl border bg-white p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UtensilsCrossed className="size-9 rounded-lg bg-pink-700 p-1 text-white" />
                <p className="text-[15px] font-semibold tracking-widest text-pink-700 uppercase">
                  Breakfast
                </p>
              </div>
              <p className="text-xl font-semibold text-pink-700">01</p>
            </div>

            <div>
              <p className="font-serif text-[22px]">Served 08:00 - 10:30</p>
              <p className="text-muted-foreground text-sm">On the terrace</p>
            </div>
            <p className="tracking-tight text-neutral-700">
              Fresh figs, Marseille honey, pain au levain, and espresso.
              Gluten-free option? Leave a note the night before.
            </p>
          </div>
        </div>
      </div>
  
      <BackToHomePage />
    </div>
  );
}
