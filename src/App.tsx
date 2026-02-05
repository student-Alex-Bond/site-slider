import { useMediaQuery } from "react-responsive";
import "./App.css";
import { MobileApp } from "./components/mobile-app/mobile-app";
import { DesktopApp } from "./components/desktop-app/desktop-app";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 476px)" });
  return (
    <>
      {isMobile && <MobileApp />}
      {!isMobile && <DesktopApp />}
    </>
  );
}

export default App;
