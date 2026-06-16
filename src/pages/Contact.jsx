import React from 'react'
import ContactForm from '../sections/Contact/ContactForm'
import Map from '../sections/Contact/Map'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'
import TopHeading from '../components/TopHeading'
export default function Contact() {

  return (
    <div>
      <TopHeading
        heading="We'd love to hear from you"
        paragraph="Have questions about HubCart or need help improving your Shopify cart and checkout experience? Our team is here to help. Tell us a little about your store and goals, and we'll get back to you as soon as possible."
        showGradient
      />
      <ContactForm />
      <Map />
      <FAQ />
      <CTA />
    </div>
  )
}
