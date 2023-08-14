import { useEffect, useState } from "react";
import Main from "./Main";
import Mobile from "./Mobile";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const isMobile = width <= 1190;

  return isMobile ? <Mobile /> : <Main />;
}
export default App;
