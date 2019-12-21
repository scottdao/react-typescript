import * as React from "react";
import Router from "./router";
import { HashRouter } from "react-router-dom";
import { actionsRoot } from "./ts/mobx/store";

import { Provider } from "mobx-react";

class App extends React.Component<{}, {}> {
  getHeight = (): void => {
    let ele = document.documentElement || document.body;
    let h = ele.clientHeight;
    let root = document.getElementById("root");
    root.style.height = h + "px";
  };
  public componentDidMount() {
    // document.title = '冷钱包-首页';
    this.getHeight();
  }
  public render() {
    return (
      <Provider {...actionsRoot}>
        <HashRouter>
          <Router />
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
