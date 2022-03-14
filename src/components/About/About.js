import React, { useState } from 'react';
import "./about.scss"
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import data from "../../data";
import $ from "jquery";
import Slider from "react-slick";
import Footer from '../Footer/Footer';
import {motion} from "framer-motion"

const About = () => {
    const [third, setthird] = useState(data);
    var time = 10,
        cc = 1;
    $(window).scroll(function () {
        $("#counter").each(function () {
            var cPos = $(this).offset().top,
                topWindow = $(window).scrollTop();
            if (cPos < topWindow + 1000) {
                if (cc < 2) {
                    $(".number").addClass("viz");
                    $("div").each(function () {
                        var i = 1,
                            num = $(this).data("num"),
                            step = (1000 * time) / num,
                            that = $(this),
                            int = setInterval(function () {
                                if (i <= num) {
                                    that.html(i);
                                } else {
                                    cc = cc + 2;
                                    clearInterval(int);
                                }
                                i++;
                            }, step);
                    });
                }
            }
        });
    });
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
            <div className="color-bg-parent">
                <div className="container-blog">
                    <div className="card-information-side">
                        <h1 className="card-information-text">About Us</h1>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='parent-about'>
                    <div>
                        <img className='img-about' src='https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img10-1024x553.jpg)' alt='' />
                    </div>
                    <div>
                        <TabsUnstyled defaultValue={0}>
                            <TabsListUnstyled>
                                <TabUnstyled className='about-about'>About</TabUnstyled>
                                <span className='span-about'>/</span>
                                <TabUnstyled>Shedule</TabUnstyled>
                                <span className='span-about'>/</span>
                                <TabUnstyled>Location</TabUnstyled>
                                <hr className='hr-about' />
                            </TabsListUnstyled>
                            <TabPanelUnstyled value={0}>
                                <div className='locat-parent'>
                                    <h1 className='title-about-locat'>1.Just design & compose, cooperating with clients who want the best for their business.</h1>
                                    <p className='subtitle-about-locat'>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <button className='btn-about-text slide_diagonal'>Read More</button>
                                </div>
                            </TabPanelUnstyled>
                            <TabPanelUnstyled value={2}>
                                <div className='locat-parent'>
                                    <h1 className='title-about-locat'>2.Just design & compose, cooperating with clients who want the best for their business.</h1>
                                    <p className='subtitle-about-locat'>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <button className='btn-about-text slide_diagonal'>Read More</button>
                                </div>
                            </TabPanelUnstyled>
                            <TabPanelUnstyled value={4}>
                                <div className='locat-parent'>
                                    <h1 className='title-about-locat'>3.Just design & compose, cooperating with clients who want the best for their business.</h1>
                                    <p className='subtitle-about-locat'>We’re a design studio with more than 13 years of experience in branding and digital. Throughout these years, we re-discovered the essence of our clients. We create innovative digital products and future-orientes brands, Our premise is to always drive a positive change in people, companies and organizations.</p>
                                    <button className='btn-about-text slide_diagonal'>Read More</button>
                                </div>
                            </TabPanelUnstyled>
                        </TabsUnstyled>
                    </div>
                </div>
                <div className="containerq">
                    <div className="grid-container-card">
                        <div className="out-parent">
                            <img className="twitch-num-img" src="img/twitch.png" alt="" />
                            <div className="parent-div--card">
                                <div data-num="1300" class="number">
                                    0
                                </div>{" "}
                                <span className="plus">+</span>
                            </div>
                            <h3>TWITCH STREAMS</h3>
                        </div>
                        <div className="out-parent">
                            <img className="twitch-num-img" src="img/youtube.png" alt="" />
                            <div className="parent-div--card">
                                <div data-num="1100" class="number">
                                    0
                                </div>{" "}
                                <span className="plus">+</span>
                            </div>
                            <h3>YOUTUBE STREAMS</h3>
                        </div>
                        <div className="out-parent">
                            <img className="twitch-num-img" src="img/playstation.png" alt="" />
                            <div className="parent-div--card">
                                <div data-num="900" class="number">
                                    0
                                </div>{" "}
                                <span className="plus">+</span>
                            </div>
                            <h3>PAST GAMES</h3>
                        </div>
                        <div className="out-parent">
                            <img className="twitch-num-img" src="img/team.png" alt="" />
                            <div className="parent-div--card">
                                <div data-num="256" class="number">
                                    0
                                </div>{" "}
                                <span className="plus">+</span>
                            </div>
                            <h3>PRO TEAMS</h3>
                        </div>
                    </div>
                    <header>
                        <div class="mid">
                            <h1>Счетчик чисел при перемотке</h1>
                            <h2>&darr;&nbsp;&nbsp; Делайте перемотку вниз &nbsp;&nbsp;&darr;</h2>
                        </div>
                    </header>
                    <article>
                        <div class="mid clearfix">
                            <div id="counter">
                                <div class="bl">
                                    <div class="text">клиентов</div>
                                </div>
                                <div class="bl">
                                    <div class="text">лет гарантии</div>
                                </div>
                                <div class="bl">
                                    <div class="text">успешных проектов</div>
                                </div>
                                <div class="bl">
                                    <div class="text">человек в команде</div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className='m-content'></div>
            <div>
                <div id="carousel" className="carousel-viewer">
                    <Slider {...settings}>
                        <div>
                            <a className="lake" href="#" title="" alt="View Profile">
                                <img
                                    className="images-of-carousel-third"
                                    src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team1.jpg"
                                    alt=""
                                />
                            </a>
                        </div>

                        <a className="lake" href="#" title="" alt="View Profile">
                            <img
                                className="images-of-carousel-third"
                                src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team2.jpg"
                                alt=""
                            />
                        </a>
                        <a className="lake" href="#" title="" alt="View Profile">
                            <img
                                className="images-of-carousel-third"
                                src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team3.jpg"
                                alt=""
                            />
                        </a>

                        <a className="lake" href="#" title="" alt="View Profile">
                            <img
                                className="images-of-carousel-third"
                                src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team4.jpg"
                                alt=""
                            />
                        </a>
                        <a className="lake" href="#" title="" alt="View Profile">
                            <img
                                className="images-of-carousel-third"
                                src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team5.jpg"
                                alt=""
                            />
                        </a>
                        <a className="lake" href="#" title="" alt="View Profile">
                            <img
                                className="images-of-carousel-third"
                                src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/team6.jpg"
                                alt=""
                            />
                        </a>
                    </Slider>
                </div>
            </div>
            <Footer />
        </motion.div>
    )
};

export default About;
