import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";
import { ReadonlyURLSearchParams } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const createQueryString = (
  searchParams: ReadonlyURLSearchParams,
  paramsObject: { [key: string]: string }
) => {
  const params = new URLSearchParams(searchParams.toString());

  Object.keys(paramsObject).forEach((key) => {
    params.set(key, paramsObject[key]);
  });

  return params.toString();
};
