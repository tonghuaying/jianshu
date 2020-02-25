import React from "react";
import Header from "./common/header";
import { GlobalStyle } from "./style";
import { IconGlobalStyle } from "./static/icon/iconfont";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/home";
import Detail from "./pages/detail/loadable.js";
import Login from "./pages/login";
import Write from "./pages/write";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <GlobalStyle />
        <IconGlobalStyle />

        <BrowserRouter>
          {/* <Route path="/" exact render={() => <div>home</div>}></Route>
          <Route path="/detail" exact render={() => <div>detail</div>}></Route> */}
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
