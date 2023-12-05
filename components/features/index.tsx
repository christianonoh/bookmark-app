"use client"

import { cx, features } from "@/utils"
import { useState } from "react"
import Feature from "./Feature"

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(1)

  const handleClick = (feature: number) => {
    setSelectedFeature(feature)
    console.log(selectedFeature);
  }
  return (
    <section className='flex flex-col py-16 items-center'>
      <h2 className="text-3xl capitalized font-bold mb-8">Features</h2>
      <p className="text-lg text-gray-medium leading-relaxed mb-16 max-w-lg text-center px-5">
      Our aim is to make it quick and easy for you to access your favourite websites. 
  Your bookmarks sync between your devices so you can access them on the go.
    </p>
    <div className="flex flex-col md:flex-row px-5 mb-16 w-full">
      <div className="border-b border-gray-light w-full md:hidden" />
      {
        features.map((feature, index) => (
          <div key={index} className={cx('flex-1 text-center px-12  py-4 md:py-6 cursor-pointer whitespace-nowrap hover:text-red transition-all duration-200 ease-in-out', selectedFeature === feature.key ? 'border-b-4 border-red text-dark font-bold' : 'text-gray-medium border-b border-gray-light')} onClick={() => handleClick(feature.key)}>
            {feature.title}
          </div>
        ))
      }
    </div>
    {
        features.map((feature, index) => (
          <div key={index} className={cx('w-full', selectedFeature === feature.key ? 'block' : 'hidden')}>
            <Feature img={feature.img} title={feature.title} content={feature.content} />
          </div>
        ))
      }

    </section>
  )
}

export default FeaturesSection
