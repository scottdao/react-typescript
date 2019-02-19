import * as React from "react";
class SetPassword extends React.Component<{},{}> {
  public componentDidMount(){
 	document.title = '冷钱包-设置密码';
 }
 public componentWillUnmount(){
 	document.title = '';
 }
  public render(){
		
	 return(
		<div>
			<p>请您设置密码</p>
			<div>
				<input type='text' />
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	 )
 }
}


export default SetPassword;