import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Transfer from "pages/Transfer";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/transfer" component={Transfer} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
