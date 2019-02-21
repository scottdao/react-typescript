import {action} from 'mobx';
//定义对数据的操作
class Actions{
  public store:any;
  constructor({store}) {
		this.store = store;
  }
  // ② 使用 action decorator 
  @action
  incA = () => {
    this.store.a++;
  }
  @action
  decA = () => {
    this.store.a--;
  }
  //弹窗
  @action
  clickFrame = () => {
    this.store.frameFlag = false;
  }
  @action
  firstFrame = () => {
    this.store.frameFlag = true;
  }
  //点击下一步；
   @action
  clickNext = () => {
    this.store.helpWordFlag = false;
  }
  noClickNext = ()=>{
	   this.store.helpWordFlag = true;
  }
}
export{
	Actions
}