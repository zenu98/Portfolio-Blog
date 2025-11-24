import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert Prisma object into a regular JS object
export function convertPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

// const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
//   currency: 'USD',
//   style: 'currency',
//   minimumFractionDigits: 2,
// });

// export function formatCurrency(amount: number | string | null) {
//   if (typeof amount === 'number') {
//     return CURRENCY_FORMATTER.format(amount);
//   } else if (typeof amount === 'string') {
//     return CURRENCY_FORMATTER.format(Number(amount));
//   } else {
//     return 'NaN';
//   }
// }// Shorten UUID
export function formatId(id: string) {
  return `..${id.substring(id.length - 6)}`;
}
