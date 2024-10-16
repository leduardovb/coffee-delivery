import Image from "next/image";
import { CurrentLocation } from "./current-location";
import { Cart } from "./cart";

export function Header() {
  return (
    <header>
      <div className="flex h-[104px] items-center justify-between px-[160px]">
        <Image src="/images/logo.svg" alt="" width={85} height={40} />
        <div className="flex gap-x-3">
          <CurrentLocation />
          <Cart />
        </div>
      </div>
    </header>
  );
}
