import { ReactNode } from "react";

// routesGenerator
export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};

// sidebarItemsGenerator
export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};
