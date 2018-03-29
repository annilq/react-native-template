import { observable, action } from "mobx";
class AppStore {
  @observable loaderVisible = false;
  @observable isLogin = true;
  @action
  login(task) {
    this.isLogin = true;
  }
  @action
  logout() {
    this.isLogin = false;
  }
  @action
  showLoader() {
    this.loaderVisible = true;
  }
  @action
  hideLoader() {
    this.loaderVisible = false;
  }
}
export default new AppStore();
