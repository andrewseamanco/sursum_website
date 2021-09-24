import React from "react";
import "./RecruitmentVideo.css";

export default function RecruitmentVideos() {
  return (
    <div className="placementInformation">
      <p className="title-1">
        If you are not convinced already, check out some past recruitment
        videos!
      </p>
      <hr />
      <div>
        <div className="video">
          <p className="title-1">2020 RECRUITMENT VIDEO</p>
          <hr />
          <iframe
            title="recruitment_2020"
            width="674"
            height="379"
            src="https://www.youtube.com/embed/m7d2Ua7lejw"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video">
          <p className="title-1">2019 RECRUITMENT VIDEO</p>
          <hr />
          <iframe
            title="recruitment_2019"
            width="674"
            height="379"
            src="https://www.youtube.com/embed/uY6MNLhSEvo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video">
          <p className="title-1">2014 RECRUITMENT VIDEO</p>
          <hr />
          <iframe
            title="recruitment_2014"
            width="674"
            height="379"
            src="https://www.youtube.com/embed/Rhl_fiQjUW4"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="video">
          <p className="title-1">2012 RECRUITMENT VIDEO</p>
          <hr />
          <iframe
            title="recruitment_2012"
            width="674"
            height="379"
            src="https://www.youtube.com/embed/AzGg1dJIXcA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
