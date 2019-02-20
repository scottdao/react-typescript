import * as React from "react";
import '@/css/leadTip.css';
import {Link } from 'react-router-dom';
class LeadTip extends React.Component<{},{}> {
  public componentDidMount(){
 	document.title = '冷钱包-特别提示';
 }
 public componentWillUnmount(){
 	document.title = '';
 }
  public render(){
		
	 return(
		<div>
			<div className='restore-account'>恢复账号</div>
			<div className="tip-remark"><span className="iconfont icon-tishi-shi"></span></div>
			<div className='tip-telling'>
				<div className='telling-warning'>产品是钱包,请一定要抄写12个助记词,您只可以用这些单词恢复您的账户！一旦丢失你的钱币将无法找回！因此请：</div>
				<ul>
					<li>不要卸载</li>
					<li>不要清除应用数据</li>
					<li>抄好12个助记词并秘密保管</li>
				</ul>
			</div>
			
			<Link to='./setPassword'>
				<footer className='tip-confirm'>
					<div>确定</div>
				</footer>
			</Link>
		</div>
	 )
 }
}


export default LeadTip;