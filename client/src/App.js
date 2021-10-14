import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/Rooms"
import Error from "./pages/Error"
import NavBar from "./components/NavBar"

import {Switch, Route} from "react-router-dom"

function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/rooms">
        <Rooms />
      </Route>
      <Route exact path="/rooms/:slug">
        <SingleRoom />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
    </>
  );
}

export default App;
