<!--
 * @Date: 2023-03-09 14:18:39
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-15 15:03:01
 * @FilePath: /tailwindcss_life/src/views/InfoDetailView.vue
-->
<template>
  <div class="mx-auto flex flex-row space-x-5">
    <div
      class="basis-1/3 overflow-y-auto container mx-auto flex flex-col items-center space-y-2 w-full"
    >
      <div class="stats shadow text-primary-content bg-green-400 w-full">
        <div class="stat">
          <div class="stat-figure">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-10 h-10 stroke-2 text-yellow-50 animate-pulse duration-100"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 19.5v-.75a7.5 7.5 0 00-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
          <div class="stat-title">State</div>
          <div class="stat-value">Online</div>
          <div class="stat-desc">Now</div>
        </div>

        <div class="stat">
          <div class="stat-title">Duration</div>
          <div class="stat-value">
            <div class="grid grid-flow-col gap-3 text-center auto-cols-max text-sm">
              <div class="flex flex-col grid-col w-full">
                <span class="countdown font-mono">
                  <span :style="`--value:  ${online_duration.hours}`"></span>
                </span>
                hours
              </div>
              <div class="flex flex-col flex-1 w-full">
                <span class="countdown font-mono">
                  <span :style="`--value:  ${online_duration.mins}`"></span>
                </span>
                min
              </div>
              <div class="flex flex-col flex-1 w-full">
                <span class="countdown font-mono">
                  <span :style="`--value:  ${online_duration.senconds}`"></span>
                </span>
                sec
              </div>
            </div>
          </div>
          <div class="stat-desc">Today</div>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
      >
        <div class="collapse-title text-xl uppercase font-semibold">App info</div>
        <div class="collapse-content p-0">
          <div class="overflow-hidden">
            <div class="border-t bor border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Device id</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ deviceId }}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Source</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.platform }}
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">IP address</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.ip }}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">App version</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.appInfo?.version }}
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Platfrom</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.appInfo?.platform }}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">System version</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.appInfo?.systemVersion }}
                  </dd>
                </div>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">Model</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.appInfo?.model }}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div
        tabindex="0"
        class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full"
      >
        <div class="collapse-title text-xl font-medium">Service info</div>
        <div class="collapse-content p-0">
          <div class="overflow-hidden">
            <div class="border-t bor border-gray-200">
              <dl>
                <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">User ID</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.serviceInfo?.userId }}
                  </dd>
                </div>
                <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt class="text-sm font-medium text-gray-500">User name</dt>
                  <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    {{ devicesInfo[deviceId]?.serviceInfo?.userName }}
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-l-indigo-400 border-dotted border-t-2"
                >
                  <dt class="text-sm font-medium text-gray-500">Audio service</dt>
                  <dd></dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">enable</dt>
                  <dd>
                    <span
                      v-if="devicesInfo[deviceId]?.serviceInfo?.audioService?.enable"
                      class="relative flex h-3 w-3"
                    >
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
                      ></span>
                      <span class="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span v-else class="relative flex h-3 w-3">
                      <span class="inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    audioState
                  </dt>
                  <dd>
                    <input
                      type="checkbox"
                      class="toggle toggle-sm toggle-success"
                      :checked="
                        devicesInfo[deviceId]?.serviceInfo?.audioService?.audioState ===
                        '1'
                      "
                    />
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    other app is recording
                  </dt>
                  <dd>
                    <input
                      type="checkbox"
                      class="toggle toggle-warning toggle-sm"
                      :checked="
                        devicesInfo[deviceId]?.serviceInfo?.audioService
                          ?.otherAppIsRecording === true
                      "
                    />
                  </dd>
                </div>
                <div
                  class="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-l-indigo-400 border-dotted border-t-2"
                >
                  <dt class="text-sm font-medium text-gray-500">Gps service</dt>
                  <dd></dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">enable</dt>
                  <dd>
                    <span
                      v-if="
                        devicesInfo[deviceId]?.serviceInfo?.gpsService?.enable === true
                      "
                      class="relative flex h-3 w-3"
                    >
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
                      ></span>
                      <span class="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span v-else class="relative flex h-3 w-3">
                      <span class="inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">lat</dt>
                  <dd>
                    {{
                      devicesInfo[deviceId]?.serviceInfo?.gpsService?.latitude?.toFixed(5)
                    }}
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">long</dt>
                  <dd>
                    {{
                      devicesInfo[deviceId]?.serviceInfo?.gpsService?.longitude?.toFixed(
                        5
                      )
                    }}
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                    address
                  </dt>
                  <dd>
                    <p>{{ devicesInfo[deviceId]?.serviceInfo?.gpsService?.address }}</p>
                  </dd>
                </div>
                <div
                  class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-l-indigo-400 border-dotted border-t-2"
                >
                  <dt class="text-sm font-medium text-gray-500">Step service</dt>
                  <dd></dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">enable</dt>
                  <dd>
                    <span
                      v-if="
                        devicesInfo[deviceId]?.serviceInfo?.stepService?.enable === true
                      "
                      class="relative flex h-3 w-3"
                    >
                      <span
                        class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
                      ></span>
                      <span class="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span v-else class="relative flex h-3 w-3">
                      <span class="inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </dd>
                  <dt class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">count</dt>
                  <dd>{{ devicesInfo[deviceId]?.serviceInfo?.stepService?.count }}</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="basis-2/3">
      <div class="tabs tab-lg">
        <a class="tab tab-bordered tab-active">Online time line</a>
        <a class="tab tab-bordered">Data list</a>
        <a class="tab tab-bordered">Commands</a>
      </div>
      <div class="card mt-5">
        <div class="text-lg mb-4 font-mono font-extrabold uppercase align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 inline-block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
            />
          </svg>
          TimeLine
        </div>
        <div id="timeline5"></div>
      </div>
      <div class="card mt-5">
        <div class="flex flex-row items-center justify-between">
          <div class="text-lg mb-4 font-mono font-extrabold uppercase align-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 inline-block"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
              />
            </svg>

            Path replay
            <span class="text-xs badge align-middle">2023.03-16 14:21:23-15:21:23</span>
          </div>
          <div>
            <button class="btn mb-4 btn-circle btn-sm" @click="platOrPause">
              <svg
                v-if="!isPlaying"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3"
                stroke="currentColor"
                class="w-4 h-4 stroke-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div id="map"></div>
        <div class="mt-3">
          <input
            type="range"
            min="0"
            max="100"
            :value="playPercent"
            class="range range-success range-xs"
          />
        </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto"></div>
  <div class="lg:pl-[32.0rem]"></div>
</template>

<script setup>
import { PaperClipIcon } from "@heroicons/vue/20/solid";
import { WS_CONNECTIONOR } from "../wb";
import { ref, onMounted, nextTick, inject, computed } from "vue";
import * as d3 from "d3";
import { timelines } from "d3-timelines";
import { useRoute } from "vue-router";
import { min } from "rxjs/operators";
const isPlaying = ref(false);
const playPercent = ref(0.0);
var carMFunc;
const route = useRoute();
const deviceId = route.params.deviceId;
const devicesInfo = inject("devicesInfo", {});
console.info(devicesInfo);
function getTime(m) {
  return 1678636800000 + m * 60 * 1000;
}
const online_duration = computed(() => {
  let total = (devicesInfo.value[deviceId]?.updateTime - devicesInfo.value[deviceId]?.connetStartTimestamp)
  let hours = Math.floor(total / 1000 / 60 / 60 )
  let mins = Math.floor((total - hours * 60 * 60 * 1000) / 1000 / 60)
  let senconds = Math.floor( (total - hours * 60 * 60 * 1000 - mins * 60 * 1000)/1000)
  console.log(total, hours, mins, senconds)
  return {
    hours,
    mins,
    senconds
  }
})

const dataList = ref([
  {
    name: "event",
    class: "event",
    label: "event",
    times: [
      { starting_time: getTime(2067), display: "circle", label: "qr", color: "green" },
      { starting_time: getTime(2121), display: "circle", label: "fo", color: "red" },
      { starting_time: getTime(2433), display: "circle", label: "ch" },
      { starting_time: getTime(2378), display: "circle", label: "gh", color: "gray" },
    ],
  },
  {
    name: "GPS",
    class: "gps",
    label: "gps",
    times: [
      { starting_time: getTime(2001), ending_time: getTime(2090) },
      { starting_time: getTime(2095), ending_time: getTime(2098) },
      { starting_time: getTime(2112), ending_time: getTime(2307) },
      { starting_time: getTime(2321), ending_time: getTime(2478) },
      { starting_time: getTime(2501), ending_time: getTime(2522) },
    ],
  },
  {
    class: "troll",
    label: "audio",
    name: "record",
    times: [
      { starting_time: getTime(2003), ending_time: getTime(2075) },
      { starting_time: getTime(2095), ending_time: getTime(2098) },
      { starting_time: getTime(2112), ending_time: getTime(2118) },
      { starting_time: getTime(2124), ending_time: getTime(2150) },
      { starting_time: getTime(2156), ending_time: getTime(2300) },
      { starting_time: getTime(2321), ending_time: getTime(2478) },
      { starting_time: getTime(2501), ending_time: getTime(2522) },
    ],
  },
  {
    label: "online",
    name: "online",
    class: "wat",
    times: [
      { starting_time: getTime(2000), ending_time: getTime(2093) },
      { starting_time: getTime(2095), ending_time: getTime(2098) },
      { starting_time: getTime(2112), ending_time: getTime(2307) },
      { starting_time: getTime(2321), ending_time: getTime(2478) },
      { starting_time: getTime(2501), ending_time: getTime(2522) },
    ],
  },
]);
window.d3 = d3;
function initChart(dl) {
  var width = 950;
  const chart = timelines()
    .tickFormat({
      format: (d) => {
        return d3.timeFormat("%H:%M")(d);
      },
      tickTime: d3.timeMinutes,
      tickInterval: 15,
      tickSize: 15,
    })
    .showTimeAxisTick()
    .showTimeAxisTickFormat({
      width: 2,
      marginTop: 10,
      marginBottom: 0,
      color: "red",
    })
    .stack()
    .margin({ left: 70, right: 30, top: 0, bottom: 0 })
    .itemHeight(30);
  // 控制台点击错误未解决
  // zoom.js?2eb4:13 Uncaught TypeError: Cannot read properties of null (reading 'ctrlKey')
  // at SVGSVGElement.defaultFilter (zoom.js?2eb4:13:1)
  // at SVGSVGElement.mousedowned (zoom.js?2eb4:251:1)
  // at SVGSVGElement.eval (on.js?baee:3:1)
  const ins = d3
    .select("#timeline5")
    .append("svg")
    .attr("width", width)
    .attr("height", 200)
    .datum(dl)
    .call(chart)
    .on("click", function (event, data) {
      const r = event.target.__data__;
      if (r.name) {
        console.log(r);
      }
    });
  return ins;
}
onMounted(() => {
  nextTick(() => {
    initChart(dataList.value);
    initMap();
  });
});
function platOrPause() {
  if (isPlaying.value) {
    // isPlaying.value = false
  } else {
    isPlaying.value = true;
    carMFunc();
  }
}
function initMap() {
  var data = [
    { lat: 40.0117548291348, lng: 116.39341473604895, speed: 5.28 },
    { lat: 40.0120620884788, lng: 116.39406863222541, speed: 5.28 },
    { lat: 40.01212559408676, lng: 116.39427616797775, speed: 5.28 },
    { lat: 40.012137893431685, lng: 116.39446969084577, speed: 5.28 },
    { lat: 40.012106646137376, lng: 116.39474474668964, speed: 5.28 },
    { lat: 40.01202592685098, lng: 116.39506777110273, speed: 5.28 },
    { lat: 40.01192843763274, lng: 116.39646802314564, speed: 5.28 },
    { lat: 40.01175175863013, lng: 116.39694906275349, speed: 5.28 },
    { lat: 40.01162585563584, lng: 116.39702437442872, speed: 5.28 },
    { lat: 40.011539601018235, lng: 116.39702835838443, speed: 5.34 },
    { lat: 40.01145575471953, lng: 116.39702557293901, speed: 5.34 },
    { lat: 40.01141101579246, lng: 116.39700850927488, speed: 5.34 },
    { lat: 40.01133453801623, lng: 116.39698351250934, speed: 5.34 },
    { lat: 40.011286490754806, lng: 116.39691796511102, speed: 5.34 },
    { lat: 40.011199911026694, lng: 116.39670779169182, speed: 5.34 },
    { lat: 40.01116040760361, lng: 116.39662308413745, speed: 5.34 },
    { lat: 40.01111343594853, lng: 116.39655983248281, speed: 5.34 },
    { lat: 40.01106369215807, lng: 116.39652156321256, speed: 5.34 },
    { lat: 40.01096864731035, lng: 116.39649466986032, speed: 5.34 },
    { lat: 40.01092348672256, lng: 116.39650331664734, speed: 5.02 },
    { lat: 40.010434871293356, lng: 116.39676022019239, speed: 5.02 },
    { lat: 40.01038908352785, lng: 116.39679342225179, speed: 5.02 },
    { lat: 40.01036050798428, lng: 116.39685010501603, speed: 5.02 },
    { lat: 40.010354722407584, lng: 116.3969287888383, speed: 5.02 },
    { lat: 40.01036816424004, lng: 116.39699229161556, speed: 5.02 },
    { lat: 40.010435045938706, lng: 116.39714521472638, speed: 5.02 },
    { lat: 40.01082517391424, lng: 116.39820460590408, speed: 5.02 },
    { lat: 40.01086926080971, lng: 116.3983804730085, speed: 5.02 },
    { lat: 40.01086921175121, lng: 116.39857583745061, speed: 5.02 },
    { lat: 40.01089058567102, lng: 116.3986993516819, speed: 5.12 },
    { lat: 40.01105873352734, lng: 116.398903336089, speed: 5.12 },
    { lat: 40.0117048310656, lng: 116.39940749128573, speed: 5.12 },
    { lat: 40.011817646401546, lng: 116.3995127287103, speed: 5.12 },
    { lat: 40.01207565254974, lng: 116.39963893563231, speed: 5.12 },
    { lat: 40.012336234138495, lng: 116.39972895650226, speed: 5.12 },
    { lat: 40.012695265449956, lng: 116.39976079596943, speed: 5.12 },
    { lat: 40.012823331404256, lng: 116.39975127138678, speed: 5.12 },
    { lat: 40.014219851848495, lng: 116.39973992489263, speed: 5.12 },
    { lat: 40.014384975221255, lng: 116.3997562349249, speed: 5.12 },
    { lat: 40.01546296892558, lng: 116.39980241795297, speed: 5.13 },
    { lat: 40.01590124041839, lng: 116.39983292570605, speed: 5.13 },
    { lat: 40.01607062255886, lng: 116.3997612995297, speed: 5.13 },
    { lat: 40.016147852062744, lng: 116.39970370301944, speed: 5.13 },
    { lat: 40.01651717450411, lng: 116.39926590503478, speed: 5.13 },
    { lat: 40.01670726449425, lng: 116.39907723100691, speed: 5.13 },
    { lat: 40.016810623357536, lng: 116.3989944065313, speed: 5.13 },
    { lat: 40.01704968252044, lng: 116.3988465704333, speed: 5.13 },
    { lat: 40.017220854415385, lng: 116.39879338176638, speed: 5.13 },
    { lat: 40.01739781473131, lng: 116.39878869263384, speed: 5.13 },
    { lat: 40.01753062487387, lng: 116.3988243257802, speed: 4.51 },
    { lat: 40.01778123359699, lng: 116.39897309990852, speed: 4.51 },
    { lat: 40.01788853744789, lng: 116.39909820616651, speed: 4.51 },
    { lat: 40.01813193134938, lng: 116.39946535178092, speed: 4.51 },
    { lat: 40.018315327063775, lng: 116.39978948986754, speed: 4.51 },
    { lat: 40.0185210788888, lng: 116.40004083949202, speed: 4.51 },
    { lat: 40.01862482261567, lng: 116.40011729510957, speed: 4.51 },
    { lat: 40.01884130824557, lng: 116.40023225482969, speed: 4.51 },
    { lat: 40.01900223089695, lng: 116.4002560453863, speed: 4.51 },
    { lat: 40.019168496443335, lng: 116.40024253122397, speed: 4.51 },
    { lat: 40.01941823727352, lng: 116.40014813882294, speed: 5.46 },
    { lat: 40.01955582879214, lng: 116.40006597232173, speed: 5.46 },
    { lat: 40.019625794613496, lng: 116.40003277322512, speed: 5.46 },
    { lat: 40.01973494711923, lng: 116.39992947439282, speed: 5.46 },
    { lat: 40.02003457258235, lng: 116.3995840650133, speed: 5.46 },
    { lat: 40.02012681092414, lng: 116.39951377284751, speed: 5.46 },
    { lat: 40.020240189422374, lng: 116.3994725197183, speed: 5.46 },
    { lat: 40.0207023603236, lng: 116.39944385731519, speed: 5.46 },
    { lat: 40.02075971709272, lng: 116.3990343313751, speed: 5.46 },
    { lat: 40.0210070942486, lng: 116.39833903113333, speed: 5.46 },
    { lat: 40.02107222194391, lng: 116.3980912827493, speed: 5.09 },
    { lat: 40.021459215267924, lng: 116.39703698653, speed: 5.09 },
    { lat: 40.02171541981845, lng: 116.39629073287347, speed: 5.09 },
    { lat: 40.02176033952772, lng: 116.39612248144692, speed: 5.09 },
    { lat: 40.02177240422605, lng: 116.39600839278842, speed: 5.09 },
    { lat: 40.02176568294195, lng: 116.39583289602706, speed: 5.09 },
    { lat: 40.02169624845353, lng: 116.3955147900383, speed: 5.09 },
    { lat: 40.021679187121094, lng: 116.39528962771942, speed: 5.09 },
    { lat: 40.02173659840765, lng: 116.39464098614542, speed: 5.09 },
    { lat: 40.02173608705779, lng: 116.39436350966696, speed: 5.09 },
    { lat: 40.02171667908074, lng: 116.3941582437958, speed: 5.05 },
    { lat: 40.02167744751307, lng: 116.39389140478511, speed: 5.05 },
    { lat: 40.021399744559034, lng: 116.39274655124427, speed: 5.05 },
    { lat: 40.021404538563104, lng: 116.39255736643156, speed: 5.05 },
    { lat: 40.02137436892016, lng: 116.39193287395665, speed: 5.05 },
    { lat: 40.02137898050156, lng: 116.39151162261976, speed: 5.05 },
    { lat: 40.02135519400907, lng: 116.39116088703008, speed: 5.05 },
    { lat: 40.02137912746466, lng: 116.39077853832805, speed: 5.05 },
    { lat: 40.02149345166241, lng: 116.38987130562305, speed: 5.05 },
    { lat: 40.02166277008334, lng: 116.3891133772753, speed: 5.05 },
    { lat: 40.0216995668407, lng: 116.38882302992442, speed: 5.15 },
    { lat: 40.021681727047586, lng: 116.38861179148807, speed: 5.15 },
    { lat: 40.02152248615635, lng: 116.38774109212864, speed: 5.15 },
    { lat: 40.0213921439682, lng: 116.38745117664939, speed: 5.15 },
    { lat: 40.02123145185149, lng: 116.38716827874737, speed: 5.15 },
    { lat: 40.02092044344663, lng: 116.38679497138503, speed: 5.15 },
    { lat: 40.020891135369794, lng: 116.38677277623628, speed: 5.15 },
    { lat: 40.02028603423594, lng: 116.38606765345298, speed: 5.15 },
    { lat: 40.0198617793528, lng: 116.38508154730812, speed: 5.15 },
    { lat: 40.019680540067355, lng: 116.38388233477303, speed: 5.15 },
    { lat: 40.01952046118871, lng: 116.3832977387624, speed: 5.05 },
    { lat: 40.01924186224846, lng: 116.38263027970129, speed: 5.05 },
    { lat: 40.01914726464586, lng: 116.38245812882292, speed: 5.05 },
    { lat: 40.01894223267785, lng: 116.38218707704368, speed: 5.05 },
    { lat: 40.01879139918298, lng: 116.38203694175695, speed: 5.05 },
    { lat: 40.018651920883435, lng: 116.38181075359091, speed: 5.05 },
    { lat: 40.01847319163035, lng: 116.38142942845275, speed: 5.05 },
    { lat: 40.01828931219562, lng: 116.38118829755808, speed: 5.05 },
    { lat: 40.0180601171968, lng: 116.38100125118933, speed: 5.05 },
    { lat: 40.01794585528901, lng: 116.38093509419627, speed: 5.05 },
    { lat: 40.0176609625524, lng: 116.38085471399313, speed: 5.46 },
    { lat: 40.01736337023258, lng: 116.38082206686022, speed: 5.46 },
    { lat: 40.017204497705734, lng: 116.38082447131978, speed: 5.46 },
    { lat: 40.0169331320741, lng: 116.38089064701808, speed: 5.46 },
    { lat: 40.01678218238459, lng: 116.38095016240231, speed: 5.46 },
    { lat: 40.01658695386989, lng: 116.3810908837936, speed: 5.46 },
    { lat: 40.01629254190362, lng: 116.38137514729988, speed: 5.46 },
    { lat: 40.01585210668406, lng: 116.38202332996468, speed: 5.46 },
    { lat: 40.01536057607682, lng: 116.38317040921515, speed: 5.46 },
    { lat: 40.015275722290205, lng: 116.3833619571393, speed: 5.46 },
    { lat: 40.01511484109611, lng: 116.3835313861075, speed: 5.58 },
    { lat: 40.01479727241819, lng: 116.38398719175825, speed: 5.58 },
    { lat: 40.01467861304151, lng: 116.38454193643474, speed: 5.58 },
    { lat: 40.014540225997486, lng: 116.38506669712035, speed: 5.58 },
    { lat: 40.01438381183924, lng: 116.38548144796403, speed: 5.58 },
    { lat: 40.01413835513588, lng: 116.38591755111986, speed: 5.58 },
    { lat: 40.01386179660761, lng: 116.38621318238154, speed: 5.58 },
    { lat: 40.0134417096248, lng: 116.38646622345004, speed: 5.58 },
    { lat: 40.01319395279727, lng: 116.38654692320529, speed: 5.58 },
    { lat: 40.013025729810465, lng: 116.38661485306432, speed: 5.58 },
    { lat: 40.01286384177789, lng: 116.38670219042137, speed: 5.45 },
    { lat: 40.01273794884273, lng: 116.38680940020959, speed: 5.45 },
    { lat: 40.01205241630339, lng: 116.38764054405476, speed: 5.45 },
    { lat: 40.012012708517204, lng: 116.38799562902909, speed: 5.45 },
    { lat: 40.01200740698218, lng: 116.3884668726007, speed: 5.45 },
    { lat: 40.01205081487235, lng: 116.3891357542683, speed: 5.45 },
    { lat: 40.01214634484927, lng: 116.38985130991023, speed: 5.45 },
    { lat: 40.012129040905016, lng: 116.39039545576566, speed: 5.45 },
    { lat: 40.01198955926475, lng: 116.39095842130325, speed: 5.45 },
    { lat: 40.01187029705991, lng: 116.3912239257852, speed: 5.45 },
    { lat: 40.01178717766782, lng: 116.3914374715223, speed: 5.15 },
  ];

  const center = new TMap.LatLng(40.01441917053406, 116.39308580988711);
  // 初始化地图
  const map = new TMap.Map("map", {
    zoom: 17,
    pitch: 50,
    mapStyleId: "style7",
    baseMap: {
      type: "vector",
      features: ["base", "building3d", "label", "point"],
    },
    center,
  });

  const isMoving = false;
  let roation;
  let position;
  const markerData = []; //marker数据
  const trailData = []; // trail数据
  const path = [];
  const colorOffset = [];
  data.forEach((i) => {
    markerData.push(new TMap.LatLng(i.lat, i.lng));
    path.push([i.lat, i.lng]);
    // 不同速度区间对应颜色
    if (i.speed >= 5.05 && i.speed <= 5.13) {
      colorOffset.push(0.99);
    } else if (i.speed <= 5.58 && i.speed >= 5.34) {
      colorOffset.push(0.01);
    } else {
      colorOffset.push(0.5);
    }
  });

  trailData.push({ path, colorOffset });

  //初始化marker并添加至map图层
  const marker = new TMap.MultiMarker({
    id: "whiteDot",
    map,
    styles: {
      whiteDot: new TMap.MarkerStyle({
        width: 25,
        height: 25,
        anchor: {
          x: 14.5,
          y: 14.5,
        },
        faceTo: "map",
        rotate: 180,
        src: "https://mapapi.qq.com/web/lbs/visualizationApi/demo/img/white.png",
      }),
      start: new TMap.MarkerStyle({
        width: 22,
        height: 32,
        anchor: {
          x: 10,
          y: 27,
        },
        src: "https://mapapi.qq.com/web/miniprogram/demoCenter/images/marker-start.png",
      }),
      end: new TMap.MarkerStyle({
        width: 22,
        height: 32,
        anchor: {
          x: 2,
          y: 27,
        },
        src: "https://mapapi.qq.com/web/miniprogram/demoCenter/images/marker-end.png",
      }),
    },
    geometries: [
      {
        id: "whiteDot",
        styleId: "whiteDot",
        position: new TMap.LatLng(40.0117548291348, 116.39341473604895),
      },
      {
        id: "start",
        styleId: "start",
        position: new TMap.LatLng(40.0117548291348, 116.39341473604895),
      },
    ],
  });

  //初始化轨迹图并添加至map图层
  const trail = new TMap.visualization.Trail({
    pickStyle: function (item) {
      //轨迹图样式映射函数
      return {
        width: 6,
        color: new TMap.GradientColor({
          stops: {
            0.01: "#f45e0c",
            0.5: "#f6cd0e",
            0.99: "#2ad61d",
          },
        }),
      };
    },
    showDuration: Infinity, //动画中轨迹点高亮的持续时间
    playTimes: 1,
    playRate: 90, //动画播放倍速，默认为1m/s
    enableColorOffset: true,
  }).addTo(map);

  function carMove() {
    isPlaying.value = true;
    marker.moveAlong(
      {
        whiteDot: {
          path: markerData,
          speed: 324, // 速度 单位：千米/小时
        },
      },
      {
        autoRotation: true,
      }
    );
    trail.setData(trailData); //设置数据
    isMoving = true;
  }
  carMFunc = carMove;
  marker.on("moving", function (e) {
    if (e.whiteDot) {
      roation = TMap.geometry.computeHeading(
        e.whiteDot.passedLatLngs[e.whiteDot.passedLatLngs.length - 2],
        e.whiteDot.passedLatLngs[e.whiteDot.passedLatLngs.length - 1]
      );
      position = TMap.geometry.computeDestination(
        marker.getGeometryById("whiteDot").position,
        roation,
        60
      );
      playPercent.value = (e.whiteDot.passedLatLngs.length / data.length) * 100;
      console.info(playPercent);
    }

    map.easeTo(
      {
        center: position,
        rotation: e.whiteDot.angle,
        zoom: 17,
        pitch: 50,
      },
      {
        duration: 500,
      }
    );
  });

  //   function btn(){
  //     if (isMoving) return;
  // }

  marker.on("move_ended", function () {
    isMoving = false;
    isPlaying.value = false;
    playPercent.value = 0.0;
    marker.updateGeometries([
      {
        id: "end",
        styleId: "end",
        position: new TMap.LatLng(40.01178717766782, 116.3914374715223),
      },
    ]);
    map.easeTo(
      {
        zoom: 16.5,
        pitch: 45,
        rotation: 355.5,
        center,
      },
      {
        duration: 100,
      }
    );
    marker.remove("whiteDot");
  });
}
</script>
