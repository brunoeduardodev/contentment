import type { NextPage } from "next";
import type { PropsWithChildren } from "react";

export type WithLayout<T> = T & {
  Layout: ({ children }: PropsWithChildren) => JSX.Element;
};

export type PageWithLayout = WithLayout<NextPage>;

export function hasLayout<T>(Component: T): Component is WithLayout<T> {
  return "Layout" in Component;
}

export * from "./Authorized";
