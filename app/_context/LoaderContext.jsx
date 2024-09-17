"use client";

import { useRouter } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

// Define the type for the context value
// interface AppContextType {
//   isLoading: boolean;
//   navigateTo: (target: string) => Promise<void>;
// }

// Create a context with a default value of undefined
const AppContext = createContext();

// Define the type for the AppProvider props
// interface AppProviderProps {
//   children: ReactNode;
// }

// The AppProvider component
export function AppProvider({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const hasMounted = useRef(false);

  // useEffect(() => {
  //   if (!hasMounted.current) {
  //     hasMounted.current = true;
  //     return;
  //   }
  //   setIsLoading(true);
  //   sleep(500);
  //   setIsLoading(false);
  // }, []);

  const navigateTo = async (target) => {
    setIsLoading(true);
    console.log("Page loading..");

    await sleep(1500);

    router.push(target);

    await sleep(500);
    setIsLoading(false);

    console.log("complete loading..");
  };

  return (
    <AppContext.Provider value={{ isLoading, setIsLoading, navigateTo }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom hook to use the AppContext
export function useLoaderContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

// Helper function to simulate delay
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
