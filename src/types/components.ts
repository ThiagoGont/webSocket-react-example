import clsx from "clsx";
import type React from "react";
import { twMerge } from "tailwind-merge";

export type HTMLInputType = {
  icon?: React.ComponentType<{ className?: string }>;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type HTMLButtonType = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function cn(...component) {
  return twMerge(clsx(component));
}
