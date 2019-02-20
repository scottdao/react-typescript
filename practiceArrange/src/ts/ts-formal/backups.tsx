import * as React from "react";
import '@/css/backups.css';
import {observer, inject} from 'mobx-react';
interface IProps {
 match?:any,
 location?:object,
 history?:any,
 store?:any,
 actions?:any
}
@inject('store', 'actions')
@observer
class Backups extends React.Component<IProps,{}> {
  public componentDidMount(){
 	document.title = '冷钱包-备份助记词';
 }
 public componentWillUnmount(){
 	document.title = '';
 }
  public render(){
		console.log(this.props);
		const {actions:{
			clickFrame:clickFrame
		},
		store:{
			frameFlag:frameFlag
		}
		} = this.props;
	 return(
		<div className="backups-total">
			<div className='restore-account'>恢复账号</div>
			<div className="help-reword">
				<header className='reword-head'>请抄写你的助记词</header>
				<section className='reword-warning'>助记词用于恢复钱包或重置钱包密码，将她准确的抄写在纸上，并存放在只有你知道的安全的地方.</section>
				<div className='reword-words'>
					
				</div>
				<div className='reword-btn'>下一步</div>
			</div>
			{
				frameFlag?(<div className="modal-content" >
								<section className='modal-frame'>
									<div className='modal-head-img'></div>
									<p className="modal-no-screenshot">请勿截图</p>
									<p className="modal-no-tip">如果有人获取你的助记词直接获取你的资产！请抄写下助记词并存放在安全的地方</p>
									<div className="modal-btn" onClick={clickFrame}>知道了</div>
								</section>
							</div>):""
			}
			
		</div>
	 )
 }
}


export default Backups;