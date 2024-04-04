import { useState } from "react";
import "./App.css";
import { IoMoon, IoSunny } from "react-icons/io5";

function App() {
  const [dark, setDark] = useState<boolean>(true);

  const handleTheme = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-900 ">
      <div className="flex justify-end mr-3">
        <button onClick={handleTheme}>
          {!dark ? (
            <>
              <IoSunny color="white" />
            </>
          ) : (
            <>
              <IoMoon />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default App;
