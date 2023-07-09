"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoReactPlayer = () => {
  const videoSources = ["/videos/vo2vo_EN.mp4", "/videos/vo2vo_ES.mp4"];
  //   const videoSources = [
  //     "https://www.youtube.com/watch?v=jNgP6d9HraI",
  //     "https://www.youtube.com/watch?v=oUFJJNQGwhk",
  //   ];

  const audioSources = [
    {
      src: "audio-url1.mp3",
      type: "audio/mpeg",
    },
    {
      src: "audio-url2.mp3",
      type: "audio/mpeg",
    },
  ];

  return <ReactPlayer url={videoSources} playsinline controls />;
};

// config={{
//     file: {
//       attributes: {
//         controlsList: "nodownload",
//       },
//       tracks: [
//         {
//           kind: "subtitles",
//           src: "subtitles-url.vtt",
//           srcLang: "en",
//           label: "English",
//         },
//       ],
//     },
//     tracks: [
//       {
//         kind: "alternative",
//         src: audioSources[0].src,
//         type: audioSources[0].type,
//         label: "Audio Track 1",
//       },
//       {
//         kind: "alternative",
//         src: audioSources[1].src,
//         type: audioSources[1].type,
//         label: "Audio Track 2",
//       },
//     ],
//   }}
