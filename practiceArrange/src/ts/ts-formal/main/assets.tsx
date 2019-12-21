import * as React from "react";
// import { useEffect } from 'react';

class Main extends React.Component<{}, {}> {
  public state = {
    count: 1
  };
  public componentDidMount() {
    document.title = "资产";
  }
  public componentWillUnmount() {
    document.title = "";
  }

  public render() {
    return (
      <div>
        <header className="assets-all-head">
          <div className="assets-head-qrIcon">
            <span className="iconfont icon-erweima"></span>
          </div>
        </header>
      </div>
    );
  }
}
export default Main;
