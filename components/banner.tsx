import Image from "next/image";
import { Baloo_2 } from "next/font/google";
import { FilledCartIcon } from "./icons/filled-cart.icon";
import { FilledBoxIcon } from "./icons/filled-box.icon";
import { FilledTimerIcon } from "./icons/filled-timer.icon";
import { FilledCoffeeIcon } from "./icons/filled-coffee.icon";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["800"],
  variable: "--Baloo2",
});

export function Banner() {
  return (
    <div className="bg-banner relative flex h-[544px] items-center justify-center gap-x-[56px] bg-center px-[160px] py-[92px]">
      <div className="max-w-[588px]">
        <h2 className={`text-title-xl text-base-title ${baloo2.className}`}>
          Encontre o café perfeito para qualquer hora do dia
        </h2>
        <p className="mt-4 text-text-l text-base-subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-5 text-text-m text-base-text">
          <div className="flex w-[231px] items-center gap-x-3">
            <FilledCartIcon />
            Compra simples e segura
          </div>
          <div className="flex items-center gap-x-3">
            <FilledBoxIcon /> Embalagem mantém o café intacto
          </div>
          <div className="flex w-[231px] items-center gap-x-3">
            <FilledTimerIcon />
            Entrega rápida e rastreada
          </div>
          <div className="flex items-center gap-x-3">
            <FilledCoffeeIcon /> O café chega fresquinho até você
          </div>
        </div>
      </div>
      <Image src="/images/banner-image.svg" alt="" width={476} height={360} />
    </div>
  );
}
