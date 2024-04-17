import Header from "./components/ui/Header";
import Navigator from "./navigator";
import "./App.css";

function App() {
      const authUser = true;

  return (
    <div className="">
      {authUser && <Header />}
      <Navigator />
    </div>
  );
}

export default App;
