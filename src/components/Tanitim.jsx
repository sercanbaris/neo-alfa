import "../css/tanitim.css";
import tanitimVideo from "../media/video/alfa-almanca.mp4";

import { useEffect, useRef } from "react";

function Tanitim() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 } // Video'nun %50'si görünür olduğunda çalışır
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="tanitim">
      <video
        className="videosu"
        ref={videoRef}
        controls
        src={tanitimVideo}
        muted
      ></video>
    </div>
  );
}

export default Tanitim;
