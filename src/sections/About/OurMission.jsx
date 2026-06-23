import React from 'react'
import Container from '../../components/Container'

export default function OurMission({ img, heading, paragraph1, paragraph2, paragraph3, gradientImg }) {
    return (
        <section className="relative" >
            <Container className="py-[40px] max-[540px]:py-[25px] relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-[75px]">

                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 flex-shrink-0">
                        <div>
                            <img
                                src={img}
                                alt="Our Mission"
                                className="w-full h-full"
                            />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full md:w-1/2 ">
                        <h2 className="font-semibold max-[540px]:text-[35px] text-[45px] lg:text-[55px] max-[540px]:leading-[45px] leading-[60px]">
                            {heading}
                        </h2>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[10px]">
                            {paragraph1}
                        </p>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[10px]">
                            {paragraph2}
                        </p>

                        <p className="text-[18px] max-[540px]:text-[16px] py-[15px] max-[540px]:py-[10px]">
                            {paragraph3}
                        </p>
                    </div>
                </div>
            </Container>

        </section>
    )
}