import { observable} from 'mobx';
class Store{
  @observable a:number = 0;
  @observable frameFlag:boolean = true;
  //备份助记词点击一下步
  @observable helpWordFlag:boolean = true;
}

export { Store }