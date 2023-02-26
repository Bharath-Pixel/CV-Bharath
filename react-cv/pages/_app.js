// import "@/styles/globals.css";
// import Navbar from "./navbar";
// import Home from ".";
// import { useState } from "react";
// import { ContextProvider } from "@/Context";

// export default function App({ Component, pageProps }) {
//   return (
//     // <Component {...pageProps} />
//     <ContextProvider>
//       <Home />
//     </ContextProvider>
//   );
// }
import "@/styles/globals.css";
import Navbar from "./navbar";
import Home from ".";
import { useState } from "react";
import { ContextProvider } from "@/Context";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Home darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
