import { Switch, Route } from "react-router-dom";
import Register from "../pages/Register";
import List from "../pages/List";
import Login from "../pages/Login";
import NewCase from "../pages/NewCase";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/list" component={List} />
      <Route path="/newcase" component={NewCase} />
    </Switch>
  );
};

export default Routes;
