import React, { useState } from "react";
import { videos } from "../data";
import { Link } from "react-router-dom";
const Videos = () => {
  const [allVideos, setVideos] = useState(videos);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {allVideos.map((item) => {
        return (
          <div style={{ width: "200px" }}>
            <Link to={`/videos/${item._id}`}>
              {" "}
              <img style={{ width: "100%" }} src={item.thumbnail}></img>
            </Link>

            <h5>{item.title}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Videos;
