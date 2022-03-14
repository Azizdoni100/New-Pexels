import React from "react";
import "./clan.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Slider from "react-slick";
import { SRLWrapper } from "simple-react-lightbox";
import Footer from "../Footer/Footer";
import {motion} from "framer-motion"

const Clan = () => {
    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      }));
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
      const setting = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 4,
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
    <div className='parent-clan'>
        <div className='bg-clan'>
        <div className='container'>
            <div className='title-parent'>
            <h1 className='title-bg-clan'>Pro Game eTeam <br/> Time to Win</h1>
            </div>
       </div>
        </div>
        <div className='container'>
         <div className="parent-grid-box">
              <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={1}>
                <Grid item lg={6} md={6} sm={12}>
                  <div className="parent-titles">
                    <h1 className="h1-subtitle-of-player-main">
                      Game theme for each direction and more.
                    </h1>
                    <p className="p-subtitle-of-player-main">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                      ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>
                    <button className="learn-more">
                      <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                      </span>
                      <span className="button-text">Read More</span>
                    </button>
                  </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12}>
                  <img className="player-jpg" src="img/player.jpg" alt="" />
                </Grid>
              </Grid>
            </Box>
         </div>
         <h1 className='our-about'>Our Team</h1>
        </div>
        <div className="carousel-viewer">
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
  <div className="container">
      <h1 className='our-about'>Game Screenshots</h1>
  <div class="parent-sectond-clan">
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img17.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img2.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img3.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img4.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img5.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img6.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img7.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img8.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img9.jpg" alt=""/>
        <img className="image-clan" src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img10.jpg" alt=""/>
     </div>
  </div>
  <div className="parent-of-card-carousel-slide">
      <div className="container-plax">
        <h1 className="text-title-plax">
          Share with <span className="span-plax">#PLAXER</span>
        </h1>
        <p className="title-text-plax">
          Follow me <button className="plaxer-btn">@plaxer</button>
        </p>
      </div>

      <div className="carousel-viewer">
      <SRLWrapper className="carousel-viewer">
      <Slider {...setting}>
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img17.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img2.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img3.jpg"
            alt=""
          />

          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img4.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img5.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img6.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img7.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img8.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img9.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img10.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img11.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img12.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img13.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img14.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img15.jpg"
            alt=""
          />
          <img
            className="images-of-carousel-second"
            src="https://promo-theme.com/plaxer/wp-content/uploads/2019/12/img16.jpg"
            alt=""
          />
      </Slider>
    </SRLWrapper>
      </div>
      <div className="sliders-components"></div>
    </div>
      <Footer/>
    </div>
    </motion.div>
  );
};

export default Clan;