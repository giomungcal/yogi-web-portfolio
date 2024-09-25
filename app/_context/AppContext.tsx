"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

// Loader Screen Context

type LoaderContext = {
  isLoading: boolean;
  setIsLoading?: Dispatch<SetStateAction<boolean>>;
  isFakeLoading: boolean;
  setIsFakeLoading: Dispatch<SetStateAction<boolean>>;
  navigateTo: (target: string) => void;
  pathname: string;
  useSleep: (x: number) => void;
};

const LoaderContext = createContext<LoaderContext | null>(null);

type LoaderContextProviderProps = {
  children: ReactNode;
};

export function LoaderContextProvider({
  children,
}: LoaderContextProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  // Initial Mount Loading Screen

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function setLoading() {
      setTimeout(() => {
        setIsLoading(false);
        console.log("Loading complete..");
      }, 2500);
    }
    setLoading();
  }, []);

  // Fake Loader Setup - triggers everytime you route to another path

  const [isFakeLoading, setIsFakeLoading] = useState(false);

  const navigateTo = async (target: string) => {
    toast.dismiss();

    document.body.style.overflow = "hidden";

    setIsFakeLoading(true);
    console.log("Page loading..");

    await useSleep(700);
    router.push(target);

    await useSleep(700);
    // Loading is set to false on pathname change (see below useEffect)
    document.body.style.overflow = "";
  };

  // Only sets loading to false once pathname is changed.

  useEffect(() => {
    async function setLoadingToFalse() {
      await useSleep(500);
      setIsFakeLoading(false);
    }
    setLoadingToFalse();
  }, [pathname]);

  function useSleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <LoaderContext.Provider
      value={{
        isFakeLoading,
        setIsFakeLoading,
        navigateTo,
        isLoading,
        pathname,
        useSleep,
      }}
    >
      {children}
    </LoaderContext.Provider>
  );
}

export function useLoaderContext() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error(
      "useLoaderContext must be used within a LoaderContextProvider",
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
