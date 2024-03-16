import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Top10User.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';


const Top10User = () => {
    const [data2, setData2] = useState([]);
    useEffect(() => {
        fetch('https://matchow-001-site1.ltempurl.com/api/Season/top10User')
            .then(res => res.json())
            .then(data => {
                setData2(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    return (
        <div className='mt-10'>
            <h2 className='text-white text-5xl font-semibold'>Top 10 User</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper2 mb-8"
                initialSlide={1}
            >
                {data2.length > 0 && (
                    <>
                        <SwiperSlide className='top10UserTop3'>
                            <h2 className='text-[#FFFFF7] font-medium text-3xl absolute'>#2</h2>
                            <img src={data2[1]?.profilePhotoUrl} alt="User 2" />
                            <p className='text-white font-medium text-xl'>{data2[1]?.name}</p>
                        </SwiperSlide>
                        <SwiperSlide className='top10UserTop3'>
                            <h2 className='text-[#FFFFF7] font-medium text-3xl absolute'>#1</h2>
                            <img src={data2[0]?.profilePhotoUrl} alt="User 1" />
                            <p className='text-white font-medium text-xl'>{data2[0]?.name}</p>
                        </SwiperSlide>
                        <SwiperSlide className='top10UserTop3'>
                            <h2 className='text-[#FFFFF7] font-medium text-3xl absolute'>#3</h2>
                            <img src={data2[2]?.profilePhotoUrl} alt="User 3" />
                            <p className='text-white font-medium text-xl'>{data2[2]?.name}</p>
                        </SwiperSlide>
                    </>
                )}
            </Swiper>

            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper3"
                >
                    {data2.slice(3).map((row, index) => (
                        <SwiperSlide className='top10User rounded-2xl'>
                            <h2 className='absolute text-[#FFFFF7] font-medium text-3xl'>#{index+4}</h2>
                            <img src={row.profilePhotoUrl} />
                            <p className='text-white font-medium text-xl absolute'>{row.name}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Top10User