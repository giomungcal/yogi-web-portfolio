"use client";

import { useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

// Loader Screen Context

type LoaderContext = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  navigateTo: (target: string) => void;
};

const LoaderContext = createContext<LoaderContext | null>(null);

type LoaderContextProviderProps = {
  children: ReactNode;
};

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const navigateTo = async (target: string) => {
    document.body.style.overflow = "hidden";
    setIsLoading(true);
    console.log("Page loading..");

    await sleep(800);

    router.push(target);

    await sleep(1000);
    setIsLoading(false);

    console.log("Complete loading..");
    await sleep(1000);
    document.body.style.overflow = "";
  };

  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <LoaderContext.Provider value={{ isLoading, setIsLoading, navigateTo }}>
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderContext() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error(
      "useLoaderContext must be used within a LoaderContextProvider"
    );
  }
  return context;
}

// Nav Context

type NavContext = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const NavContext = createContext<NavContext | null>(null);

import React from "react";

type NavContextProviderProps = {
  children: ReactNode;
};

export function NavContextProvider({ children }: NavContextProviderProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <NavContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNavContext() {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useNavContext must be used within a NavContextProvider");
  }
  return context;
}
