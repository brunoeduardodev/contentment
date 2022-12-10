import type { PropsWithChildren } from "react";

export type WithLayout<T> = T & {
  layout: ({ children }: PropsWithChildren) => JSX.Element;
};

export function hasLayout<T>(Component: T): Component is WithLayout<T> {
  return "layout" in Component;
}

export * from "./Authorized";
