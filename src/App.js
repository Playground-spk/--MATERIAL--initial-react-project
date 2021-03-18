import "./App.css";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./views/components/main/Header";
import allowPages from "./config/role.config";
import { Suspense } from "react";
import Fallback from "./assets/components/Fallback";

function App() {
  const myUrl = window.location.href;
  const mainUrl = myUrl.includes("app.dev.farmbook.co") ? "/alifarmapp" : "";

  const role = useSelector((state) => state.user.role);

  return (
    <BrowserRouter basename={mainUrl}>
      <div>
      {/* {role === "user" ? <Sidebar /> : null} */}
        <div>
        {role === "user" ? <Header /> : null}
          <Suspense fallback={<Fallback/>}>
            
          <Switch>
            {allowPages[role].routes.map((page, idx) => {
              return (
                <Route
                exact
                key={page.path}
                path={page.path}
                render={(props) => <page.component {...props} />}
                />
                );
              })}
            <Redirect to={allowPages[role].redirect} />
          </Switch>
              </Suspense >
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
