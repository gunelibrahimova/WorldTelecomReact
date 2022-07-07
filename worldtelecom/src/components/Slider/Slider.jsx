import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../api/config';
import { Swiper, SwiperSlide } from "swiper/react";
import '../Slider/slider.scss'
import 'swiper/css'
import Category from '../Category/Category';
import SwiperCore, {Autoplay} from 'swiper';



const Slider = () => {

    const [photo, setPhoto] = useState([]);

    const getCAtegories = async () => {
        await fetch(BASE_URL + 'SliderPhoto/getall')
            .then(a => a.json())
            .then(data => setPhoto(data))
    }


    useEffect(() => {
        getCAtegories()
    }, [])


    SwiperCore.use([Autoplay])
    return (
        <div id='slider'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-1">
                        <div className="left-box">
                            <Category/>
                        </div>

                        
                    </div>
                    <div className="col-lg-11">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            modules={[Autoplay]}
                            autoplay={{delay: 3000}}
                            
                        >
                            {photo &&
                                photo.map((cat) => (
                                    <div className="row">
                                        <div className="col-lg-3">
                                            <SwiperSlide key={cat.id}>
                                                <img src={cat.photoURL} alt="" />
                                            </SwiperSlide>
                                        </div>
                                    </div>
                                ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider