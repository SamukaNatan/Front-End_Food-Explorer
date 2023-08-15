// Styling Imports
import { Container, Content, Banner } from "./style";

// Theme Swap Imports
import { ThemeProvider } from 'styled-components';
import { ThemeSlider} from "../../components/ThemeSlider";
import { useDarkMode } from '../../styles/useDarkMode';
import GlobalStyles from '../../styles/global'
import lightTheme from '../../styles/lightTheme';
import darkTheme from '../../styles/theme';

// Components Imports
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

// Strategic Imports (API and others)
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useFavorites } from '../../hooks/favorites';

// Image Imports
import background from "../../assets/Mask group.png"

// Swiper Import
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Required Module
import { Navigation } from "swiper";

// Swiper style Import
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export function Home() {
    const [ theme, toggleTheme ] = useDarkMode();
    const themeMode = theme === 'lightTheme' ? lightTheme : darkTheme;
 
    const [dishes, setDishes] = useState([]);
    const [search, setSearch] = useState("");

    const { favorites } = useFavorites();

    // Favorites Function
    async function handleFavorites(favorite) {
        if (favorite.length === 0) {
        return
        }
        setDishes(favorites);
    }
        
    useEffect(() => { 
        console.log("Entrando no useEffect")
        async function fetchDishes() {
            console.log("Entrando no fetchDishes");

          const response = await api.get(`/dishes?title=${search}`);
          setDishes(response.data);
          console.log(response);
          console.log(" dishes " + dishes );

    }
    fetchDishes();
}, [search]);   

    return(
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
                <Container>
                
                    <Header search={setSearch} favoritesFilter={() => handleFavorites(favorites)}/>
                        <Content>

                            <ThemeSlider theme={theme} toggleTheme={toggleTheme}/>
                        
                            <Banner>
                                
                                <img src={background} alt="Imagem de ingredientes" />
                                
                                <div className="banner">
                                    
                                    <div className="title">
                                        <h1>Sabores inigualáveis</h1>
                                        <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                                    </div>
                                </div>
                            </Banner>

                            <div className="cards">   
                                <p>Pratos principais</p>

                                
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
                                                    spaceBetween: 160,
                                                },
                                            }}
                                            navigation={true}
                                            modules={[Navigation]}
                                            className="mySwiper"
                                        >
                                            {
                                                dishes.filter(dish => dish.category == "dishes").map((item, index) => (
                                                    <SwiperSlide key={String(index)}>
                                                        <Card data={item} />
                                                    </SwiperSlide>
                                                ))
                                                
                                            //    <SwiperSlide>
                                            //     <Card data = {{
                                            //         title: "Filé",
                                            //         description: "Exemplo de prato",
                                            //         category: "Pratos",
                                            //         price: "98,90",
                                            //         ingredients: ["Filé"],
                                            //         image: "https://raw.githubusercontent.com/SamukaNatan/Back-End_Food-Explorer/main/tmp/24f6e73b0ce87f1a7399-salada%20de%20bacon.png"
                                            //     }
                                            //     } />
                                            //    </SwiperSlide>

                                            }
                                        </Swiper>
                                

                                <p>Sobremesas</p>

                               
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
                                                    spaceBetween: 160,
                                                },
                                            }}
                                            navigation={{clickable: true}}
                                            modules={[Navigation]}
                                            className="mySwiper"
                                        >
                                            {
                                                dishes.filter(dish => dish.category == "dessert").map(dish => (
                                                    <SwiperSlide
                                                        key={String(dish.id)}
                                                    >
                                                        <Card 
                                                            data={dish}
                                                        />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                

                                <p>Bebidas</p>

                                
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
                                                    spaceBetween: 160,
                                                },
                                            }}
                                            navigation={{clickable: true}}
                                            modules={[Navigation]}
                                            className="mySwiper"
                                        >
                                    
                                            {
                                                dishes.filter(dish => dish.category == "drinks").map(dish => (
                                                    <SwiperSlide
                                                        key={String(dish.id)}
                                                    >
                                                        <Card
                                                            data={dish}
                                                        />
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                
                            </div>
                        </Content>
                    <Footer />
                </Container>
        </ThemeProvider>
    );
                            }