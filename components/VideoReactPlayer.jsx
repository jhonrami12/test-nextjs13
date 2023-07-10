"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoReactPlayer = () => {
  const videoSrc = "/videos/vo2vo_EN.mp4";
  const audioSrc = "/audios/vo2vo_audio_ES.mp3";
  const divStyle = {
    position: 'relative',
  };

  return (
    <div className="relative audio-container bg-slate-600">
       <style>
        {`
          audio::-webkit-media-controls-panel {
            background-color: transparent;
          }

          audio {
            background-color: blue;
          }

          audio::-webkit-media-controls-panel {
            background-color: transparent;
          }
          
          audio::-webkit-media-controls-play-button {
            color: red; /* Change to your desired color */
          }
          
          audio::-webkit-media-controls-volume-slider {
            background-color: transparent;
          }
          
          /* For Firefox */
          audio::-moz-range-thumb {
            background-color: transparent;
          }
          
          audio::-moz-range-track {
            background-color: transparent;
          }
          
          /* For IE and Edge */
          audio::-ms-track {
            background-color: transparent;
          }
          
          audio::-ms-fill-lower {
            background-color: transparent;
          }
          
          audio::-ms-fill-upper {
            background-color: transparent;
          }

        `}
      </style>
      <ReactPlayer url={videoSrc} controls />
      <ReactPlayer url={audioSrc} style={divStyle} controls />     
    </div>
  );
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
