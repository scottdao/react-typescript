import * as React from "react";
// import {
//   NavLink 
// } from 'react-router-dom';
class Mine extends React.Component<{},{}> {
    
  public state = {
		count:1
	};
	public componentDidMount(){
		document.title= '我的';
	}
	public componentWillUnmount(){
		document.title = '';
	}
  public render(){
		
	 return(
		<div className="mine-contain">
			<header className="mine-head-content">
				<p className="mine-head-setting">
					<span className="iconfont icon-shezhi"></span>
				</p>
				<p className="mine-head-avater">
					<img src="https://raw.githubusercontent.com/scottdao/code-artist/dev/code-artist-web-portal/app/pc/image/login/u20.png" />	
				</p>
				<p className="mine-nickname">
					昵称
				</p>
				<p className="mine-coin">
					1比特币=¥51520.87
				</p>
			</header>
			<section className="mine-sec-contain">
				<div className="mine-sec-order">
					<p className="sec-order-head">我的订单</p>
					<p className="sec-order-inline"></p>
					<div className="mine-sec-record">
						
					</div>
				</div>
				<div className="mine-sec-accout">
				
				</div>
			</section>
		</div>
	 )
 }
}

export default Mine;