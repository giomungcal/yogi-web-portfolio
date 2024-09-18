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

interface AppContextType {
  isLoading: boolean;
  setIsLoading: () => {};
  navigateTo: (target: string) => Promise<void>;
}

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

  // const hasMounted = useRef(false);

  const navigateTo = async (target: string) => {
    setIsLoading(true);
    console.log("Page loading..");

    await sleep(800);

    router.push(target);

    await sleep(1000);
    setIsLoading(false);

    console.log("Complete loading..");
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

// Custom hook to use the AppContext
export function useLoaderContext() {
  const context = useContext(LoaderContext);
  if (!context) {
    throw new Error(
      "useLoaderContext must be used within a LoaderContextProvider"
    );
  }
  return context;
}
