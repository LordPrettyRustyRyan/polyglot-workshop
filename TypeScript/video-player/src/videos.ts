export type VideoItem = {
  title: string;
  file: string;
  runtime: string;
  thumb?: string;
};

export const videos: VideoItem[] = [
  {
    title: "with golden brown",
    file: "/videos/with golden brown.mp4",
    runtime: "08:12",
    thumb: "/videos/with golden brown.png",
  },
  {
    title: "yes, arthur morgan",
    file: "/videos/yes, arthur morgan.mp4",
    runtime: "01:55",
    thumb: "/videos/yes, arthur morgan.png",
  },
];