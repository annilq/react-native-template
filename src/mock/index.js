import axios from "axios";
import { Api } from "../util";
import MockAdapter from "axios-mock-adapter";

var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet(Api.notify).reply(200, {
  data: [
    { title: "Devin", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "daivd", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "annilq", detail: "DevinDevinDevinDevinDevinDevin" },
    { title: "leters", detail: "DevinDevinDevinDevinDevinDevin" }
  ],
  code: 0
});

// 未匹配的api由后台处理
mock.onAny().passThrough();
