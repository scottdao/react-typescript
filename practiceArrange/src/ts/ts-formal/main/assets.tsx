import * as React from "react";
class Main extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		document.title= '资产';
	}
	public componentWillUnmount(){
		document.title = '';
	}
  public render(){
		
	 return(
		<div>
		主页界面
		</div>
	 )
 }
}

export default Main;