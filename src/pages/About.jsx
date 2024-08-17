import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,  Autoplay } from 'swiper/modules';
const About = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="grid lg:grid-cols-2 lg:p-28 gap-10 items-center">
                <div>
                    <img src={'https://i.ibb.co/hXqMnmT/Employer-Services-square-scaled.jpg'} alt="" />
                </div>
                <div className="">
                    <div className="space-y-3">
                        <h1 className="text-4xl">About Us</h1>
                        <p className="text-justify">ItemHub is your one-stop destination for finding high-quality products at competitive prices. We strive to offer a wide range of items across multiple categories, ensuring that every customer finds exactly what they're looking for. Whether it's the latest tech gadgets, home essentials, or fashion trends, we have it all. Our easy-to-use platform makes shopping a seamless and enjoyable experience.</p>
                    </div>
                    {/* <div className="space-y-3">
                        <h1 className="text-4xl">Our Mission</h1>
                        <p className="text-justify">Our mission at AssetFlow is to provide businesses with an intuitive, efficient, and secure asset management solution. We aim to simplify the complex tasks associated with asset tracking, enabling HR Managers to focus on strategic initiatives and improve overall resource management.</p>
                    </div> */}



                </div>
            </div>

            <div className='mt-10 lg:mt-2'>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <div className="space-y-3 h-[250px] md:h-[200px] lg:h-[200px] lg:w-1/2">
                                <h1 className="text-4xl">Our Mission</h1>
                                <p className="text-justify">At ItemHub, our mission is to provide customers with a diverse selection of products while maintaining an unwavering commitment to quality and customer satisfaction. We aim to simplify the shopping experience by offering a curated selection of trusted brands and delivering top-notch service from browsing to checkout and beyond.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center'>
                            <div className="space-y-3 h-[250px] md:h-[200px] lg:h-[200px] lg:w-1/2">
                                <h1 className="text-4xl">Our Vision</h1>
                                <p className="text-justify">We envision a world where online shopping is effortless, reliable, and enjoyable. By continually expanding our product range and enhancing our customer service, we aim to become a global leader in e-commerce, known for excellence, trust, and innovation in the retail space.</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div>
    );
};

export default About;