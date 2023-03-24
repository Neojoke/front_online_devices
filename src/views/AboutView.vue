<!--
 * @Date: 2023-03-08 16:27:55
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-22 20:41:44
 * @FilePath: /tailwindcss_life/src/views/AboutView.vue
-->
<template>
  <div class=" p-10 bg-cyan-100 rounded-md mt-2">
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4"
    >
      <div class="shrink-0 bg-green-200 rounded-full">
        <img src="../assets/logo.svg" alt="VueVue Logo" class="h-12 w-12" />
      </div>
      <div class="text-xl font-medi
       text-black">ChitChat</div>
       <p class=" text-slate-500">You have a message</p>
    </div>
    <iframe
    :src="iframeUrl"
    frameborder="0"
    width="800"
    height="600"
    allowtransparency
></iframe>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import * as jose from 'jose'
console.log(jose);

var METABASE_SITE_URL = "http://localhost:10002";
var METABASE_SECRET_KEY = "0cc532cdb12685785c455be486d8e72004f57603b8efa057913ca41cebb254b9";

var payload = {
  resource: { question: 2 },
  params: {},
  exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
};

const iframeUrl = ref("")
async function generate(){
  const secret = new TextEncoder().encode(
  METABASE_SECRET_KEY,
)
  const alg = 'HS256'
  var token =await new jose.SignJWT(payload)
  .setProtectedHeader({ alg })
  .sign(secret)

var link = METABASE_SITE_URL + "/embed/question/" + token + "#bordered=true&titled=true";
  iframeUrl.value = link
}
generate()

</script>
