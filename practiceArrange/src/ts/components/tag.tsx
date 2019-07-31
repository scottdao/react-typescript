  import * as React from "react";
interface IProps {
 match?:any,
 location?:object,
 history?:any,
 className?:any,
 children?:any,
 Color:string
}
class Tag extends React.Component<IProps,{}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		
	}
	public componentWillUnmount(){
		
	}
  public render(){
	const {className, children, Color} =  this.props
	// console.log(this.props);
	 return(
		<div className={`confirm-tag ${className}`} style={{backgroundColor:Color}}>
			{children}
		</div>
	 )
 }
}

export default Tag;