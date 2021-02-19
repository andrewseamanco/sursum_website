import React from 'react'
import Footer from './../Components/Footer'
import FoodJusticeWeek from './../Components/EventComponents/foodJusticeWeek'
import Broomball from './../Components/EventComponents/broomball'


export default function Events() {
  return (
    <div>
      <FoodJusticeWeek />
      <Broomball />
      <Footer />
    </div>
  )
}
