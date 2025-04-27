import React, {useEffect, useState} from "react";
import Product from "../../components/cards/Product.jsx";
import AOS from "aos"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const Home = () => {
    const [products, setProducts] = useState([]);
    const [isOwlReady, setIsOwlReady] = useState(false);
    const slider = () => {
    };
    useEffect(() => {
        if (isOwlReady && products.length > 0) {
            const timeout = setTimeout(() => {
                slider();
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [isOwlReady, products]);
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'slide',
            once: true
        });
        AOS.refresh();
    }, []);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=6')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setIsOwlReady(true);
            })
            .catch(err => console.error('Failed to fetch products:', err));
    }, []);
    return (
        <div>

            <div className="site-blocks-cover" data-aos="fade">
                <div className="container">

                    <div className="row align-items-center">
                        <div className="col-lg-5 text-center">
                            <div className="featured-hero-product w-100">
                                <h1 className="mb-2">Madewell</h1>
                                <h4>Summer Collection</h4>
                                <div className="price mt-3 mb-5"><strong>1,499</strong>
                                    <del>$1,999</del>
                                </div>
                                <p><a href="javascript:void(0)" className="btn btn-outline-primary rounded-0">Shop Now</a> <a href="javascript:void(0)"
                                                                                                             className="btn btn-primary rounded-0">Shop
                                    Now</a></p>
                            </div>
                        </div>
                        <div className="col-lg-7 align-self-end text-center text-lg-right">
                            <img src="/src/assets/images/new/person_transparent.png" alt="Image"
                                 className="img-fluid img-1"/>
                        </div>

                    </div>
                </div>

            </div>

            <div className="products-wrap border-top-0">
                <div className="container-fluid">
                    <div className="row no-gutters products">
                        {products.map(product => (
                            <Product
                                key={product.id}
                                name={product.title}
                                collection={product.title}
                                price={product.price}

                                imgSrc={product.image}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="site-blocks-cover inner-page py-5" data-aos="fade">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 ml-auto order-lg-2 align-self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>Jacket</h1>
                                <p><a href="javascript:void(0)" className="btn btn-black rounded-0">Shop Now</a></p>
                            </div>
                        </div>
                        <div className="col-lg-8 order-1 align-self-end">
                            <img src="/src/assets/images/model_woman_1.png" alt="Image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="title-section text-center col-12">
                            <h2 className="text-uppercase">Collections</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 block-3 products-wrap">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                navigation={{
                                    nextEl: '.icon-arrow_forward',
                                    prevEl: '.icon-arrow_back',
                                }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={20}
                                breakpoints={{
                                    600: {
                                        slidesPerView: 2,
                                    },
                                    1000: {
                                        slidesPerView: 3,
                                    },
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                }}
                            >
                                {products.slice(0, 6).map((product, idx) => (
                                    <SwiperSlide key={product.id}>
                                        <div className="product">
                                            <a href="javascript:void(0)" className="item">
                                                {idx % 2 === 1 && <span className="tag">Sale</span>}
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="img-fluid"
                                                />
                                                <div className="item-info">
                                                    <span className="collection d-block">FakeStore Collection</span>
                                                    <strong className="price">
                                                        ${product.price.toFixed(2)}{" "}
                                                        {idx % 2 === 1 && <del>${(product.price * 2).toFixed(2)}</del>}
                                                    </strong>
                                                </div>
                                            </a>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>


            <div className="site-blocks-cover inner-page py-5" data-aos="fade">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 ml-auto order-lg-2 align-self-start">
                            <div className="site-block-cover-content">
                                <h2 className="sub-title">#New Summer Collection 2019</h2>
                                <h1>New Denim Coat</h1>
                                <p><a href="javascript:void(0)" className="btn btn-black rounded-0">Shop Now</a></p>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 align-self-end">
                            <img src="/src/assets/images/model_5.png" alt="Image" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;