// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState } from 'react';
import Modal from './Modal';

export default function Carousel({ data }) {
    // STATES
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})

    // FUNCTIONS
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false
                }}
                style={{
                    "--swiper-pagination-color": "#2A92A9",
                    "--swiper-navigation-color": "#2A92A9",
                }}
                className='py-20'
            >
                {
                    data.map((item, i) => {
                        return (
                            <SwiperSlide key={`swiper-slide-${i + 1}`} className='sm:w-1/2 lg:w-1/3 group'>
                                <div className='rounded-full overflow-hidden sm:mx-4 md:mx-8 relative'>
                                    <img className='w-full' src={item.pathImage} alt='app store image' />
                                    <button onClick={() => {
                                        setSelectedItem(item)
                                        openModal()
                                    }} className='absolute top-0 left-0 w-full h-full bg-white bg-opacity-0 group-hover:bg-opacity-60 z-10 duration-300 grid place-items-center'>
                                        <div className='invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-300'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2A92A9" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <Modal isOpen={isOpen} closeModal={closeModal} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </>
    )
}