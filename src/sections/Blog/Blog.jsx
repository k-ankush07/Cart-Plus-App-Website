import React from 'react'
import Container from '../../components/Container'

const blogPosts = [
  {
    id: 1,
    date: 'May 25, 2026',
    title: 'Grow Your Shopify Store Smarter',
    desc: 'Actionable conversion strategies...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
  {
    id: 2,
    date: 'May 25, 2026',
    title: 'Shopify Growth Insights That Drive',
    desc: 'Learn proven tactics to increase conversions...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
  {
    id: 3,
    date: 'May 25, 2026',
    title: 'The Shopify Conversion Optimization',
    desc: 'Discover ecommerce strategies, upsell...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
  {
    id: 4,
    date: 'May 25, 2026',
    title: 'Convert More Shopify Visitors',
    desc: 'Explore practical guides, growth strategies...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
  {
    id: 5,
    date: 'May 25, 2026',
    title: 'Ecommerce Growth Insights',
    desc: 'From cart optimization to upselling strategies...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
  {
    id: 6,
    date: 'May 25, 2026',
    title: 'Proven Shopify Growth Strategies',
    desc: 'Get actionable tips and proven techniques to...',
    img: 'https://hubsyntax.com/cart-images/Rectangle 240648321.svg',
  },
]

export default function Blog() {
  
  return (
    <section>
      <Container className="relative z-10 py-[40px] max-[540px]:py-[25px]">
        <h2 className="font-bold text-[30px] leading-[40px] mb-[20px] text-white">
          Blog
        </h2>

        {/* 3-column grid */}
        <div className="grid grid-cols-3 gap-[30px] lg:gap-[50px] max-[640px]:grid-cols-1 max-[1024px]:grid-cols-2">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1D1E20] rounded-xl overflow-hidden flex flex-col border border-[#FFFFFF33]"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-[20px] flex flex-col flex-1">
                <p className="text-[14px] mb-[20px]">{post.date}</p>
                <h4 className="text-white font-semibold text-[20px] leading-[1.4] mb-1">
                  {post.title}
                </h4>
                <p className="text-[16px] leading-[1.5] mb-4 flex-1">
                  {post.desc}
                </p>
                <button className="group flex items-center gap-[10px] text-[18px] font-medium w-fit cursor-pointer">
                  Read more

                  <img
                    src="https://hubsyntax.com/cart-images/Vector (9).svg"
                    alt=""
                    className="w-[10px] h-[10px] transition-transform duration-300 group-hover:rotate-45"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1.5 mt-7">
          {[
            {
              type: "icon",
              src: "https://hubsyntax.com/cart-images/arrowleft.svg",
            },
            { label: "1" },
            { label: "2" },
            { label: "…" },
            { label: "10" },
            {
              type: "icon",
              src: "https://hubsyntax.com/cart-images/arrowright.svg",
            },
          ].map((item, i) => (
            <button
              key={i}
              className={`h-[35px] w-[35px] sm:w-[60px] sm:h-[60px] border-0 cursor-pointer rounded-[8px] sm:rounded-[16px] text-[15px] sm:text-[22px] border flex items-center justify-center transition
        ${item.label === "1"
                  ? "bg-[#512B6C]  text-white"
                  : "bg-white text-black"
                }`}
            >
              {item.type === "icon" ? (
                <img
                  src={item.src}
                  alt=""
                  className="w-[10px] h-[10px] sm:w-[14px] sm:h-[14px]"
                />
              ) : (
                item.label
              )}
            </button>
          ))}
        </div>
      </Container>
    </section>
  )
}