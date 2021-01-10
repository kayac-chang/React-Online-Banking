import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "pages/Home";
import Transfer from "pages/Transfer";
import Friends from "pages/Friends";
import SubMain from "pages/SubMain";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/transfer" component={Transfer} />
        <Route path="/friends" component={Friends} />

        <Route path="/submain/:transactionID" component={SubMain.Transaction} />
        <Route path="/submain" component={SubMain.Root} />

        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
