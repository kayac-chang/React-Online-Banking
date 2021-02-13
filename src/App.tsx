import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Home from "pages/Home";
import Transfer from "pages/Transfer";
import Friends from "pages/Friends";
import SubMain from "pages/SubMain";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

function System({ children }: PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default function App() {
  return (
    <System>
      <Router>
        <Switch>
          <Route path="/transfer" component={Transfer} />
          <Route path="/friends" component={Friends} />

          <Route
            path="/submain/:transactionID"
            component={SubMain.Transaction}
          />
          <Route path="/submain" component={SubMain.Root} />

          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </System>
  );
}
