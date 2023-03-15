<!--
 * @Date: 2023-03-09 14:18:09
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-13 14:58:21
 * @FilePath: /tailwindcss_life/src/views/MapView.vue
-->
<script setup>
import { nextTick, onMounted, ref } from "vue";
import { locationData, initMap } from "./map";
const mapV = ref(null);
onMounted(() => {
  nextTick(() => {
    let { radiationCircle, dot } = initMap(mapV.value);
    radiationCircle.setData(locationData);
    dot.setData(locationData);
    dot.on("click", (e) => {
      if (e.detail.dot) {
        handleDotClick(e);
      }
    });
  });
});
</script>
<template>
  <div>
    <h1 class="text-xl font-extrabold">Map onlie</h1>
    <div class="flex flex-row">
      <div class="basis-3/4 h-full w-full" ref="mapV"></div>
      <div class="basis-1/4 h-screen w-full pl-5">
        <div
          class="grid grid-rows-3 grid-flow-col gap-4 font-mono text-white text-xs text-center font-bold leading-0 bg-stripes-fuchsia rounded-lg"
        >
          <div
            class="p-4 rounded-lg shadow-lg bg-neutral grid place-content-center row-span-3"
          >
            <div class="flex flex-col p-2 text-neutral-content">
              <span class="font-mono text-5xl countdown"
                ><span style="--value: 48"></span
              ></span>
              Online
            </div>
          </div>
          <input
            type="text"
            placeholder="Search city/province"
            class="input w-full text-xs max-w-xs p-4 rounded-lg place-content-center col-span-2"
          />

          <div class="p-4 rounded-lg shadow-lg bg-slate-200 row-span-2 col-span-2">
            <div class="flex flex-col">
              <div class="form-control w-52">
                <label class="cursor-pointer label"
                  ><span class="label-text text-xs">show sale border</span>
                  <input type="checkbox" class="toggle toggle-primary"
                /></label>
              </div>
              <div class="form-control w-52">
                <label class="cursor-pointer label"
                  ><span class="label-text text-xs">auto refresh</span>
                  <input type="checkbox" class="toggle toggle-secondary " checked
                /></label>
              </div>
              <div class="form-control w-52">
                <label class="cursor-pointer label"
                  ><span class="label-text text-xs">hot index</span>
                  <input type="checkbox" class="toggle toggle-accent " checked
                /></label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
