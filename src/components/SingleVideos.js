import React from "react";
import { useParams } from "react-router-dom";
import { videos } from "../data";
import Videos from "./Videos";
import ReactPlayer from "react-player";
const SingleVideos = () => {
  const { videoId } = useParams();
  const video = videos.find((video) => video._id === videoId);
  return (
    <div style={{ width: "500px" }}>
      <ReactPlayer
        controls
        url={`https://www.youtube.com/watch?v=${video._id}`}
      ></ReactPlayer>
      <h5>{video.title}</h5>
      <p>{video.description}</p>
    </div>
  );
};

export default SingleVideos;
