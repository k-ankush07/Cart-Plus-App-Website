import React from 'react'
import CartStudio from '../sections/CaseStudies/CartStudio'
import Blog from '../sections/Blog/Blog';
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function CaseStudies() {
    return (
        <div>
            <CartStudio />
            <Blog />
            <FAQ />
            <CTA />
        </div>
    )
}