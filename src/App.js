import { Route, Routes } from "react-router-dom";
import "./App.css"
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import HomePage from "./components/homePage/HomePage";
import paths from "./constants/paths";




function App() {
  const {HOME_PAGE,SIGN_IN,SIGN_UP} = paths;
  return (
    <div className="App">
      <Routes>
       <Route path={HOME_PAGE} element={<HomePage />}></Route>
       <Route path={SIGN_IN} element={<SignIn />}></Route>
       <Route path={SIGN_UP} element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
