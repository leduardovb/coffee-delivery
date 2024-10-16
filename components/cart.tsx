import { CartIcon } from "./icons/cart.icon";
import { Button } from "./ui/button";

export function Cart() {
  return (
    <Button className="size-[38px] bg-yellow-light hover:bg-yellow-light">
      <CartIcon />
    </Button>
  );
}
