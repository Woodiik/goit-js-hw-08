import Player from "@vimeo/player"
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(time => localStorage.setItem("videoplayer-current-time", time.seconds), 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);





