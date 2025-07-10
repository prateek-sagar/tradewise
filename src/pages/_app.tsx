import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (
      typeof CSS !== "undefined" &&
      "paintWorklet" in CSS &&
      typeof (CSS as any).paintWorklet.addModule === "function"
    ) {
      (CSS as any).paintWorklet
        .addModule("https://www.unpkg.com/smooth-corners")
        .then(() => console.log("Worklet loaded"))
        .catch((err: any) => {
          console.error("Failed to load paint worklet:", err);
        });
    }
  }, []);
  return <Component {...pageProps} />;
}
