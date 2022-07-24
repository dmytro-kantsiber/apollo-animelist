import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import { Switch } from "react-router-dom";
import AnimePage from "./pages/AnimePage/AnimePage";

import { AppProvider } from "./context/AppContext";
import ListPage from "./pages/ListPage/ListPage";

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={RedirectPage} path="/redirect" />
          <Route component={ListPage} path="/myanimelist" exact />
          <Route component={AnimePage} path="/anime/:id/" exact />
          <Route component={ErrorPage} path="*" />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
