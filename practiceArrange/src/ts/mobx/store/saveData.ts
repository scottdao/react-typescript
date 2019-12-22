import { action, observable } from "mobx";
import { mnemonic } from "../../../utils/createAddressMethod";

class SaveDataStore {
  @observable saveBtcData = [];
}
class SaveDataActions {
  public store: any;
  constructor({ store }) {
    this.store = store;
  }

  @action
  saveBtcDataFn = () => {
    this.store.saveBtcData = mnemonic.split(" ");
  };
}
const saveDataStore = new SaveDataStore();
const saveDataActions = new SaveDataActions({ store: saveDataStore });
export { saveDataStore, saveDataActions };
