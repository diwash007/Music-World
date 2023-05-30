"use client"
import React from "react";
import { Provider } from "react-redux";
import Providers from "./providers";
import { store } from "./store";
import Navbar from "@/components/shared/Navbar";

function App({ children }) {
  return (
    <Provider store={store}>
      <Providers>
        <Navbar />
        <div className="px-5 sm:px-10 py-5">{children}</div>
      </Providers>
    </Provider>
  );
}

export default App;
