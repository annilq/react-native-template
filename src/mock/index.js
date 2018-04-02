import axios from "axios";
import { Api } from "../util";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);
// arguments for reply are (status, data, headers)
//
mock.onGet(Api.login).reply(200, {
  data: { result: "login success" },
  code: 0
});
// 模块列表
mock.onGet(Api.notify).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});
// 模块列表
mock.onGet(Api.orders).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});
// 模块列表
mock.onGet(Api.projectFolders).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});
// 模块列表
mock.onGet(Api.projects).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});
// 模块列表
mock.onGet(Api.tasks).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});
// 未匹配的api由后台处理
mock.onAny().passThrough();
