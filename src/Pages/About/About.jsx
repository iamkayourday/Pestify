import React from 'react'
import AboutHero from './AboutHero'
import WhoAreWe from './WhoAreWe'

const About = () => {
  return (
    <div>
      <AboutHero />
      <WhoAreWe />
      <div className="border  md:m-20 m-8 border-gray-300"></div>
    </div>
  )
}

export default About