/*
 * @Date: 2023-03-14 10:28:47
 * @LastEditors: NeoJoke
 * @LastEditTime: 2023-03-14 20:37:28
 * @FilePath: /tailwindcss_life/src/wb.js
 */
import { webSocket } from 'rxjs/webSocket';
import { tap, retry, delay, map } from 'rxjs/operators';
const WS_CONNECTIONOR = {
  init(url) {
    this.websocket = new webSocket({
        url:url
    });
    this.subject = this.websocket.pipe(
        tap((data)=>console.info(data)),
        map( data =>{
            // let message = JSON.parse(data)
            return data
        })
    )
    this.subject.subscribe()
  }
};
export { WS_CONNECTIONOR };
