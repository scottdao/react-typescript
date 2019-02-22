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
interface IState {
	hlepList:object,
	playList:object,
	activeIndexArr:object
}
@inject('store', 'actions')
@observer
class Backups extends React.Component<IProps,IState> {
	public state={
		hlepList:[],
		playList:['eggA', 'eggB', 'eggC', 'eggD','eggE', 'eggF', 'eggG', 'eggH','eggJ', 'eggK', 'eggL', 'eggM'],
		activeIndexArr:{}
	}
  public componentDidMount(){
 	document.title = '冷钱包-备份助记词';
	this.props.actions.firstFrame();
	this.props.actions.noClickNext();
	//权限控制，登录确认账号，无法后退；
 }
 public componentWillUnmount(){
 	document.title = '';
 }
  public render(){
		const {actions:{
			clickFrame:clickFrame,
			clickNext:clickNext
		},
		store:{
			frameFlag:frameFlag,
			helpWordFlag:helpWordFlag
		}
		} = this.props;
		let {hlepList, playList, activeIndexArr} = this.state
	 return(
		<div className="backups-total">
			<div className='restore-account'>恢复账号</div>
			<div className="help-reword">
				<header className='reword-head'>请抄写你的助记词</header>
				<section className='reword-warning'>助记词用于恢复钱包或重置钱包密码，将她准确的抄写在纸上，并存放在只有你知道的安全的地方.</section>
				<div className='reword-words'>
					<ul className='words-sort'>
					
						{
							playList && playList.map((res, index)=>{
								return(<li key={index}>{res}</li>)
							})
						}
					</ul>
				</div>
				{!helpWordFlag?(<div className='chance-words-list'>
					<ul className='words-sort'>
						{
							hlepList && hlepList.map((res,index)=>{
								return(<li key={index} onClick={(e)=>{
										if(activeIndexArr[index]===index){delete activeIndexArr[index];}
										else activeIndexArr[index]=index
										hlepList.filter((r, i)=>{
											if(playList.length<12){
												   activeIndexArr[index] === i?playList.push(r):"";
											}
										})
										//按index无法有效删除，操作的顺序会变化，需通过值来删除。
										playList.map((e,n)=>{
											if(activeIndexArr[index]===undefined)if(res===e)playList.splice(n,1);
										});
									this.setState({
										activeIndexArr,
										playList
									})
								}} className={activeIndexArr[index]===index?"listActive":""}>{res}</li>)
							})
						}
					</ul>
				</div>):""}
				
				<div className={helpWordFlag?"reword-btn ":'reword-btn confirm-btn'} onClick={()=>{
					if(helpWordFlag){
						this.setState({
						hlepList:['eggA', 'eggB', 'eggC', 'eggD','eggE', 'eggF', 'eggG', 'eggH','eggJ', 'eggK', 'eggL', 'eggM'],
						playList:[]
					})
					clickNext();
					
					}else{//进入一下页
						playList.length===12?this.props.history.push('/main'):'';
					}
				}} style={{backgroundColor:playList.length===12?"rgba(18,169,237,1)":""}}>{helpWordFlag?"下一步":"确认"}</div>
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