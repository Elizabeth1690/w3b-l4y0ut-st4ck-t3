import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";

import NavBar from "~/components/navbar";

import { ClerkProvider } from "@clerk/nextjs";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="h-screen  bg-custom">
      <ClerkProvider {...pageProps}>
        <NavBar />
        <Component {...pageProps} />
      </ClerkProvider>
    </div>
  );
};

export default api.withTRPC(MyApp);
