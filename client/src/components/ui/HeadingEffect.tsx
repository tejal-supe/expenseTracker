import React from 'react'
import { TypewriterEffectSmooth } from './TypewriterHeading'

const words = [
    {
      text: "Build",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "awesome",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "apps",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Aceternity.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

const HeadingEffect = () => {
  return (
    <div className="text-center">
        <TypewriterEffectSmooth words={words} />
    </div>
  )
}

export default HeadingEffect