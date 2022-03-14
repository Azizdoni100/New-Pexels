import React, { useContext, useState } from "react";
import "./gallery.scss"
import data from "../../data";
import { SRLWrapper } from "simple-react-lightbox";
import { Context } from "../../context"
import Footer from "../Footer/Footer";
import {motion , AnimatePresence} from "framer-motion"

const Gallery = () => {
  const { game, setGame } = useContext(Context)
  const [noOfElements, setnoOfElements] = useState(4)
  const loadMore = () => {
    setnoOfElements(noOfElements + noOfElements)
  }
  const [second, setsecond] = useState(data);
  const slice = second.slice(0, noOfElements)
  function filterElements(category) {
    const mebs = data.filter(function (div) {
      return div.category === category
    })
    setsecond(mebs)
  }
  console.log(loadMore)
  function FfilterElements(category) {
    setsecond(data, category)
  };
  return (
    <div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}>
      <div className="color-bg-parent">
        <div className="container-blog">
          <div className="card-information-side">
            <h1 className="card-information-text">Gallery</h1>
          </div>
        </div>
      </div>
      <div className="container-blog">
        <div className="second-parent-of-match-component">
          <div className="parent-of-buttons">
            <div className="btn-parent">
              <button id="buttons" onClick={() => FfilterElements('ALL')} className="btn-match-component">All</button>
              <span className="span-of-border">/</span>
            </div>
            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements('DOTA')} className="btn-match-component">DOTA 2</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements('FORTNITE')} className="btn-match-component">FORTNITE</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements('CSGO')} className="btn-match-component">CS:GO</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements('PUBG')} className="btn-match-component">PUBG</button>
            </div>

          </div>
        </div>
      </div>
      <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}} className="container-gallery">
        <div className="main-parent-grid-gallery">
          <SRLWrapper className="carousel-viewer">
            <AnimatePresence>
            <div className="grid-gallery">
              {slice.map((elem) => {
                return (
                  <div className="thumbs">
                    <img className="img-gallery-grid" src={elem.img} alt="" />
                    <div className="caption">
                      <spak className="title-gallery">{elem.caption}</spak>
                      <spak className="info-gallery">{elem.captions}</spak>
                    </div>
                  </div>
                )
              })}
            </div>
            </AnimatePresence>
          </SRLWrapper>

        </div>
        <div className="parent-load-more-btn">
          <button onClick={() => loadMore()} className="btn-load-more-blog">Load More</button>
        </div>
      </motion.div>
      <div className="footer-blog">
      <Footer/>
      </div>
    </div>
  )
};

export default Gallery;
