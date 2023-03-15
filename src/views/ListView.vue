<!--
 * @Date: 2023-03-09 14:18:25
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-14 20:46:30
 * @FilePath: /tailwindcss_life/src/views/ListView.vue
-->
<template>
  <div class="">
    <div class="card mb-4">
      <div class="flex flex-row justify-between">
        <div class="form-control w-full max-w-xs grow">
          <label class="label">
            <span class="label-text">Input tag to search</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div class="grow-0">
          <span class="relative inline-flex">
            <div class="flex flex-col p-2 bg-neutral rounded-md text-neutral-content">
              <span class="countdown font-mono text-xl">
                <span :style="`--value:${_.values(devicesInfo).length};`"></span>
              </span>
              Total
            </div>
            <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
              ></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          </span>
        </div>
      </div>
    </div>

    <div class="shadow-lg">
      <table class="table w-full">
        <!-- head -->
        <thead>
          <tr>
            <th>
              <label> Num </label>
            </th>
            <th>IP/DeviceID</th>
            <th>Source</th>
            <th>network</th>
            <th>UpdateTime</th>
            <th>OnlineTime-Today</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <!-- row 1 -->
          <tr v-for="(item, idx) in _.values(devicesInfo)" :key="idx">
            <th>
              <label>
                {{ idx + 1 }}
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="mask mask-squircle w-10 h-10">
                    <img
                      :src="`https://api.dicebear.com/5.x/bottts/svg?seed=${item.appInfo.deviceId}`"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">{{ item.ip }}</div>
                  <div class="text-sm opacity-50">{{ item.appInfo.deviceId }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ item.platform }}
              <br />
              <span class="badge badge-ghost badge-sm">{{ item.appInfo.platform }}</span>
            </td>
            <td>{{ item.serviceInfo.network }}</td>
            <td>{{ Date(item.connetStartTimestamp) }}</td>
            <td>123</td>
            <th>
              <button class="btn btn-xs" @click="goDetail(idx, item)">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, inject } from "vue";
import { useRouter, useRoute } from 'vue-router'
import _ from 'lodash'

const router = useRouter()
const devicesInfo = inject('devicesInfo', {})
console.info("1",devicesInfo)
onMounted(() => {
  console.info("ListView mounted");
});
onUnmounted(() => {
  console.info("ListView unmounted");
});
function goDetail(idx, item){
  router.push({
    name:"info",
    params: {
      deviceId:item.appInfo.deviceId
    }
  })
}
</script>
