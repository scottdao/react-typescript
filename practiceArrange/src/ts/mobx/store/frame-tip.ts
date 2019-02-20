import { observable, action } from 'mobx';
class Frame{
	@observable frameFlag:boolean = true;
} 
class FrameActions{
	public store:any;
	constructor({frame}) {
	  this.store = frame;
	}
	// ② 使用 action decorator 
	@action
	clickFrame = () => {
	  this.store.frameFlag = false;
	}
	
}
class Flag{
	@observable flag:number = 10;
} 


export {
	Frame,
	FrameActions,
	Flag
}