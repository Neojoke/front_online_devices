/*
 * @Date: 2023-03-08 16:27:55
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-16 17:57:37
 * @FilePath: /tailwindcss_life/src/main.js
 */
import { createApp, provide, ref } from "vue";
import App from "./App.vue";
import router from "./router";
import { WS_CONNECTIONOR } from "./wb";
import "./assets/main.css";
import _ from "lodash";

const app = createApp(App);

app.use(router);

app.mount("#app");
const devicesInfo = ref({});
app.provide("devicesInfo", devicesInfo);

WS_CONNECTIONOR.init("wss://3jq6k4-6969.csb.app?from=pc");
WS_CONNECTIONOR.subject.subscribe({
  next: (msg) => {
    if (msg.method && msg.method === "appInfo" && _.isArray(msg.params)) {
      let di = _.reduce(
        msg.params,
        (obj, item) => {
          if (_.isObject(item.appInfo) && _.isObject(item.serviceInfo)) {
            item.updateTime = Date.now();
            obj[item.appInfo.deviceId] = item;
          }
          return obj;
        },
        {}
      );
      console.info("123", di);
      devicesInfo.value = di;
    }
  },
  error: (err) => {},
  complete: () => {},
});
