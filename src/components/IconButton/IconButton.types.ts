import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export type IconButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  size?: "small" | "medium";
  color?: "light" | "transparent";
};
