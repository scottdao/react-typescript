import * as React from "react";
class RecoveryAccount extends React.Component<{}, {}> {
  public componentDidMount() {
    document.title = "冷钱包-恢复账号";
  }
  public componentWillUnmount() {
    document.title = "";
  }
  public render() {
    return <div>恢复账号</div>;
  }
}

export default RecoveryAccount;
