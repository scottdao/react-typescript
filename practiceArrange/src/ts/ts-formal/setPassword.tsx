import * as React from "react";
import '@/css/set-password.css';
import {Link } from 'react-router-dom';
class SetPassword extends React.Component<{},{}> {
  public componentDidMount(){
 	document.title = '冷钱包-设置密码';
 }
 public componentWillUnmount(){
 	document.title = '';
 }
  public render(){
		
	 return(
		<div className="set-password">
			<p className="set-head">请您设置密码</p>
			<div className='set-pswd-in'>
				<ul>
				<li>
				<p>密码:</p>
				<p><input type='text' ref = {ref => ref&&ref.focus()} placeholder="请输入密码" maxLength={6}/></p>
				</li>
				<li>
				<p>确认密码:</p>
				<p><input type='text' placeholder="请再次输入密码" /></p>
				</li>
				
				<li>
					<Link to='/backups'>
						<div className="set-confirm">确认</div>
					</Link>
				</li>
				</ul>
			</div>
		</div>
	 )
 }
}


export default SetPassword;