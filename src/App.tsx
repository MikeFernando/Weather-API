import { BrowserRouter, Route } from "react-router-dom";

import { Dashboard } from "./components/Dashboard";
import { SignIn } from "./components/SignIn";
import { AuthContextProvider } from "./contexts/AuthContext";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" exact component={SignIn}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </AuthContextProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
