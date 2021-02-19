import React from 'react'
import Footer from './../Components/Footer'
import JoinInformation from './../Components/JoinInformation'
import RecruitmentVideos from './../Components/RecruitmentVideos'
import RecruitmentSteps from './../Components/RecruitmentSteps'


import './Join.css'


export default function Join() {
  return (
    <div>
      <JoinInformation />
      <RecruitmentVideos />
      <RecruitmentSteps />
      <Footer />
    </div>
  )
}
