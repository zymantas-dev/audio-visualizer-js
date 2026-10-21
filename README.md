# Audio Visualizer

Idea is to learn more about Audio and Audio Context, to create visualizers using react and three

# Huge Thanks
[Vaporwave 3D Scene](https://blog.maximeheckel.com/posts/vaporwave-3d-scene-with-threejs/)

Huge thanks for this article which was an inspiration & excellent learning material

---

Live: https://audio-visualizer.kodeo.lt/

![](https://raw.githubusercontent.com/lazygeekpanda/audio-visualizer-js/master/demo/audio-visualizer-demo-min.png)

## Run it
```bash
npm install
npm run dev
npm run build
```

Audio is only fetched and decoded for the selected track, and playback starts from a click (browser autoplay rules). The 3D scene is a lazy-loaded chunk, so the player UI paints first.

## Music credits
The tracks are NoCopyrightSounds (NCS) releases, credited in the player and used under NCS's attribution terms: Hoober - Higher, Abandoned - Out of the Grave, Egzod/Maestro Chives/Neoni - Royalty, Abstrakt - Nobody Else, QR - XXI. Check [ncs.io](https://ncs.io) terms before reusing the audio files elsewhere.

## References
 - [Building an Audio Visualizer With JavaScript](https://medium.com/swlh/building-a-audio-visualizer-with-javascript-324b8d420e7)
 - [WebCam Audio visualizer](https://tympanus.net/Tutorials/webcam-audio-visualizer/index2.html)
 - [Music Visualiser with THREE.js & Web Audio API](https://www.epicprogrammer.com/2021/11/music-visualiser-with-threejs-web-audio.html)
 - [React + 3D WaveForms Explained](https://www.youtube.com/watch?v=tQL1VLTJTnc&ab_channel=SuboptimalEngineer)

