import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateUsername(): string {
  const adjectives = ["cool", "awesome", "clever", "bright", "swift", "bold"];
  const nouns = ["user", "person", "friend", "buddy", "pal", "mate"];
  const randomNum = Math.floor(Math.random() * 1000);

  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];

  return `${adjective}${noun}${randomNum}`;
}
