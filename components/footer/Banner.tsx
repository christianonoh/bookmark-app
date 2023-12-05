import React from 'react'
import NewsletterForm from './Form'

const BannerSection = () => {
  return (
    <section className='bg-accent'>
      <div className='max-w-lg mx-auto text-white py-16'>
      <p className='text-center mb-8'>35,000+ already joined</p>
      <p className="text-3xl md:text-4xl text-center font-semibold">Stay up-to-date with what we’re doing</p>
      <NewsletterForm />
      </div>
    </section>
  )
}

export default BannerSection
