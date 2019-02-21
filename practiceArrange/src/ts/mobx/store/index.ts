
import {Store} from './store'
import {Actions} from './actions'

// ③实例化单一数据源
const store = new Store();
// ④实例化 actions，并且和 store 进行关联
const actions = new Actions({store});

 
export {actions, store} 