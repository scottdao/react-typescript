import * as React from "react";

class Quotation extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		document.title= '行情';
	}
	public componentWillUnmount(){
		document.title = '';
	}
  public render(){
		
	 return(
		<div>
			行情界面
		</div>
	 )
 }
}

export default Quotation;