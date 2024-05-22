"use client";
import store from "@/store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export function Providers({ children }: any) {
  return <Provider store={store}>
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{
        top:"70px"
      }}
      toastOptions={{
        // Define default options
        className: '',
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
      }}
    />
    {children}
  </Provider>;
}
