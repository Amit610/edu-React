import React from 'react';
import '../OtherCourse.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import { FaFolder } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NewsBlogs = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    }
                }}
                modules={[FreeMode, Pagination]}
                className="NewsBlogs"
            >
                <SwiperSlide>
                    <div className="card news-blogs-card-shadow">
                        <figure>
                            <img src="https://contentstatic.techgig.com/photo/77313069/top-20-programming-languages-used-for-web-development.jpg?119426" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Web Development</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='text-xl font-bold text-[#47476e] text-left'>Product development is not a course to learn, its an arts. And so...</p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right flex justify-center'>
                                <Link to="/mern">
                                    <button className='text-lg allBtn font-bold px-2 py-2'>Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card news-blogs-card-shadow">
                        <figure>
                            <img src="https://www.freecodecamp.org/news/content/images/2022/08/A6125B75-DB79-4448-94C9-E6ABD3E0E3E9.jpeg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Machine Learning</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='text-xl font-bold text-[#47476e] text-left'>The ERA on Enterpreneurship: How You can be the Next Success...</p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right flex justify-center'>
                                <Link to="/machineLearning">
                                    <button className='text-lg allBtn font-bold px-2 py-2'>Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card news-blogs-card-shadow">
                        <figure>
                            <img src="https://d1y8sb8igg2f8e.cloudfront.net/images/Internship_Inequity.2e16d0ba.fill-1200x630.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Python</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='text-xl font-bold text-[#47476e] text-left'>Having an INTERNSHIP EXPERIENCE before getting info professional
                            </p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right flex justify-center'>
                                <Link to="/python">
                                    <button className='text-lg allBtn font-bold px-2 py-2'>Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card news-blogs-card-shadow">
                        <figure>
                            <img src="https://blog.coursify.me/wp-content/uploads/2014/12/e-learning-platform-coursifyme.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Data structure</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='text-xl font-bold text-[#47476e] text-left'>Having an INTERNSHIP EXPERIENCE before getting info professional
                            </p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right flex justify-center'>
                                <Link to="/dsa">
                                    <button className='text-lg allBtn font-bold px-2 py-2'>Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card news-blogs-card-shadow">
                        <figure>
                            <img src="https://erticonetwork.com/wp-content/uploads/2017/12/Fotolia_113148748_L-1280x640.jpg" />
                        </figure>
                        <div className='relative'>
                            <div className='w-full p-2 rounded-t-[20px] text-white font-bold bg-red-500 absolute bottom-0 flex items-center justify-center gap-x-4'>
                                <FaFolder size={30}></FaFolder>
                                <p>Mern stack</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <p className='text-xl font-bold text-[#47476e] text-left'>Having an INTERNSHIP EXPERIENCE before getting info professional
                            </p>
                            <div className='text-left text-[#47476e] font-semibold'>
                                <div className='flex justify-between'>
                                    <div className='flex flex-col'>
                                        <p>Duration: 3 month</p>
                                        <p>projects: 10</p>
                                    </div>
                                    <div className='flex flex-col'>
                                        <p>1:1 mentorship</p>
                                        <p>Price: 12k</p>
                                    </div>
                                </div>
                            </div>
                            <div className='text-right flex justify-center'>
                                <Link to="/mern">
                                    <button className='text-lg allBtn font-bold px-2 py-2'>Explore More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewsBlogs;