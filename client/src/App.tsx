import Header from "./components/ui/Header";
import Navigator from "./navigator";
import "./App.css";
import { useQuery } from "@apollo/client";
import { getAuthenticatedUser } from "./graphql/queries/userQuery";
import { Toaster } from "react-hot-toast";

function App() {
       const {loading,data,error} = useQuery(getAuthenticatedUser);
       console.log("loading " , loading);
       console.log("Auth user " , data);
       console.log("error" , error);
       
  return (
    <div className="">
      {data?.authUser && <Header />}
      <Navigator />
      <Toaster />
    </div>
  );
}

export default App;
