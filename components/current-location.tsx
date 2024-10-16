"use client";

import { MapPinIcon } from "./icons/map-pin.icon";

export function CurrentLocation() {
  return (
    <div className="flex items-center gap-x-1 rounded-md bg-purple-light p-2">
      <MapPinIcon />
      <span className="text-text-s text-purple-dark">Porto Alegre, RS</span>
    </div>
  );
}
