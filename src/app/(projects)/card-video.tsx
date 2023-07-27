"use client";
import React from "react";
// @ts-ignore
import { Custoplayer } from "custoplayer";

export default function CardVideo({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <Custoplayer
      preload="none"
      width={"auto"}
      height={"100%"}
      poster={poster}
      src={src}
      values={{
        previewTooltip: {
          id: "text",
        },
        controlsBar: {
          animate: "movement",
          barColor: "rgba(28, 28, 28, 0.85)",
        },
        item1: {
          id: "progressBar1",
          progressColor: "#72d7fb",
        },
        item2: {
          id: "fullscreenButton1",
          buttonColor: "#ffffff",
        },
      }}
    />
  );
}
