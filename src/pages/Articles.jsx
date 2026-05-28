import React from 'react'
import TopHeading from '../components/TopHeading'
import ArticlesPage from '../sections/Articles/ArticlesPage'

export default function Articles() {
    return (
        <div>
            <TopHeading
                heading='How To Reduce Cart Abandonment on Shopify'
                paragraph='Discover proven strategies Shopify brands use to reduce abandoned carts, improve checkout completion, and increase revenue with a better cart experience.'
            />
            <ArticlesPage />
        </div>
    )
}
