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
        item1: {
          id: "progressBar1",
          progressColor: "#caeffc",
        },
        item2: {
          id: "fullscreenButton1",
          buttonColor: "#ffffff",
        },
      }}
    />
  );
}
