import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AppProvider} from "./context/AppContext";
import AnimePage from "./pages/AnimePage/AnimePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";
import React from "react";

function App() {

    return (
        <AppProvider>
            <Router>
                <Switch>
                    <Route component={HomePage} path="/" exact/>
                    <Route component={RedirectPage} path="/redirect"/>
                    <Route component={ListPage} path="/myanimelist" exact/>
                    <Route component={AnimePage} path="/anime/:id/" exact/>
                    <Route component={FavouritesPage} path="/favourites" exact/>
                    <Route component={ErrorPage} path="*"/>
                </Switch>
            </Router>
        </AppProvider>
    );
}

export default App;
