import React from 'react'
import Blog from '../sections/Blog/Blog'
import TopHeading from '../components/TopHeading'
import FAQ from '../sections/home/FAQ'
import CTA from '../sections/home/CTA'

export default function BlogPage() {
    return (
        <div>
            <TopHeading
                heading='Your Hub for Shopify Growth & Conversion Tips'
                paragraph='Stay ahead with ecommerce insights, CRO strategies, and cart optimization techniques built for Shopify merchants.'
                showGradient
            />
            <Blog />
            <FAQ />
            <CTA />
        </div>
    )
}
