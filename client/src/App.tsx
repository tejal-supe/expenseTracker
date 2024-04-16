import "./App.css";
import { IoMoon, IoSunny } from "react-icons/io5";

import Header from "./components/ui/Header";
import { useState } from "react";
import Navigator from "./navigator";

function App() {
      // const [dark, setDark] = useState<boolean>(true);
      const authUser = true;

  //   const handleTheme = () => {
  //   setDark(!dark);
  //   document.body.classList.toggle("dark");
  // };
  return (
    <div className="">
      {authUser && <Header />}
      {/* <div className="flex justify-end mr-3">
        <button onClick={handleTheme}>
          {!dark ? (
            <>
              <IoSunny color="yellow" />
            </>
          ) : (
            <>
              <IoMoon color="red"/>
            </>
          )}
        </button>
      </div> */}
      <Navigator />
    </div>
  );
}

export default App;
