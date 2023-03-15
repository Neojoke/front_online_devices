<!--
 * @Date: 2023-03-08 16:27:55
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-14 21:47:29
 * @FilePath: /tailwindcss_life/src/views/HomeView.vue
-->
<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import {inject} from 'vue'
import _ from 'lodash'
const devicesInfo = inject('devicesInfo', {})

</script>

<template>
  <div class="container mx-auto flex flex-row space-x-10">
    <div
      class="card flex flex-row w-64 h-32 hover:scale-110 transition duration-200 ease-in-out"
    >
      <div class="basis-1/2 flex flex-col justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-6 h-6"
            class="w-10 h-10 opacity-70"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
            />
          </svg>
        </div>
        <div>
          <div class="text-3xl">200</div>
          Total
        </div>
      </div>
      <div class="basis-1/2 flex flex-col justify-start">
        <div class="flex flex-row items-center space-x-1">
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
            ></span>
            <span class="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <div class="flex flex-row items-center">
            <div class=" subpixel-antialiasedf text-black">Online:{{ _.values(devicesInfo).length }}</div>
          </div>
        </div>
        <div class="flex flex-row items-center  space-x-1">
          <span class="relative flex h-3 w-3">
            <span class="inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <div class="flex flex-row items-center">
            <div class=" subpixel-antialiasedf text-black">Offline:{{ 200-_.values(devicesInfo).length }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card flex flex-row w-64 h-32 hover:scale-110 transition duration-200 ease-in-out"
    >
      <div class="basis-1/2 flex flex-col justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 stroke-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
        <div>
          <div class="text-3xl">200</div>
          Total
        </div>
      </div>
      <div class="basis-1/2 flex flex-col justify-start">
        <div class="flex flex-row items-center space-x-1">
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"
            ></span>
            <span class="inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <div class="flex flex-row items-center">
            <div class=" subpixel-antialiasedf text-black">Online:{{ _.values(devicesInfo).length }}</div>
          </div>
        </div>
        <div class="flex flex-row items-center space-x-1">
          <span class="relative flex h-3 w-3">
            <span class="inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <div class="flex flex-row items-center">
            <div class=" subpixel-antialiasedf text-black">Offline: {{ 200-_.values(devicesInfo).length }}</div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="card flex flex-row w-64 h-32 hover:scale-110 transition duration-200 ease-in-out"
    >
      <div class="basis-3/4 flex flex-col justify-between">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10 stroke-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
            />
          </svg>
        </div>
        <div>
          <div class="text-3xl">200</div>
          Group
        </div>
      </div>
      <div class="basis-1/4 flex flex-col justify-start text-xs text-slate-500">
        <div class="flex flex-row items-center ">
          <div>Markting center:150</div>
        </div>
        <div class="flex flex-row items-center">
          <div>Markting zone:50</div>
        </div>
      </div>
    </div>
  </div>
</template>
