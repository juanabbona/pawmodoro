import { CSSProperties } from "react";

export type Theme = {
  primary: CSSProperties["color"];
  background: CSSProperties["background"];
};

export type ThemeName = "amber" | "purple" | "teal";
