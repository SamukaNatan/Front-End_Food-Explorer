import { Container, Content } from "./style";
import PropTypes from 'prop-types';

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation } from "swiper";

export function Carousel({children}) {
    Carousel.propTypes = {
        children: PropTypes.string.isRequired
      }

    return (
        <Container>
            <Content>

                <Swiper
                    grabCursor={true}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    breakpoints={{
                        "@0.00": {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        "@0.75": {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        "@1.00": {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        "@1.20": {
                            slidesPerView: 4,
                            spaceBetween: 130,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}  
                    className="mySwiper"
                >
                    <SwiperSlide>{children}</SwiperSlide>

                </Swiper>

            </Content>
        </Container>
    );
}