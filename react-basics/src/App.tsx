import React from "react";
import Todos from "./components/Todos";
import "./styles/App.scss";
import UseStateDemo from "./components/hooks/UseStateDemo";
import UseEffectDemo from "./components/hooks/UseEffectDemo";
import { UseCallbackDemo } from "./components/hooks/UseCallbackDemo/UseCallbackDemo";
import UseReducerDemo from "./components/hooks/UseReducerHook/UseReducerHook";
import { UserProvider } from "./components/context/UserContext";
import UseContextDemo from "./components/hooks/UseContextDemo";
import { ThemeProvider } from "./components/context/ThemeContext";
import Header from "./components/Header";
import UseRefHook from "./components/hooks/UseReducerHook/UseRefHook";

const App: React.FC = () => {
  const name = "Prorigo";

  return (
    <div className="app-container">
      {/* <Todos name={name} /> */}

      {/* <UseStateDemo /> */}

      {/* <UseEffectDemo /> */}

      {/* <UseCallbackDemo /> */}

      {/* <UseReducerDemo /> */}

      
        <ThemeProvider>
        <Header />
      </ThemeProvider>

      {/* <UserProvider>
        <UseContextDemo />
      </UserProvider> */}

      {/* <UseRefHook /> */}
    </div>
  );
};

export default App;
