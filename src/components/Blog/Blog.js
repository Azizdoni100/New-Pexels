import React, { useState , useContext} from "react";
import "./blog.scss";
import Footer from "../Footer/Footer";
import { Link } from 'react-router-dom'
import { Context } from "../../context";
import {motion , AnimatePresence} from "framer-motion"

const Blog = () => {
  const {blog} = useContext(Context)
  const [noOfElements, setnoOfElements] = useState(6)
  const loadMore = () => {
    setnoOfElements(noOfElements + noOfElements)
  }

  const [second, setSecond] = useState(blog);
  const slice = second.slice(0, noOfElements)

  function filterElements(category) {
    const mebs = blog.filter(function (div) {
      return div.category === category
    })
    setSecond(mebs)
  }

  function FfilterElements(category) {
    setSecond(blog, category)
  };


  return (
    <div>
      <div className="color-bg-parent">
        <div className="container-blog">
          <div className="card-information-side">
            <h1 className="card-information-text">Blog</h1>
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
              <button id="buttons" onClick={() => filterElements(3)} className="btn-match-component">DOTA 2</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements(4)} className="btn-match-component">FORTNITE</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements(2)} className="btn-match-component">CS:GO</button>
              <span className="span-of-border">/</span>
            </div>

            <div className="btn-parent">
              <button id="buttons" onClick={() => filterElements(6)} className="btn-match-component">PUBG</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-map">
        <div className="parent-div-content-blog">
          <motion.div className="grid-of-blog-section">
            <AnimatePresence>
              {slice.map(el => {
                return (
                  <motion.div layout animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className="parent-map-blog">
                    <Link to={`/blog/${el.id}`}><img className="img-blog" src={el.image} alt="" /></Link>
                    <h3 className='data-blog'>{el.data}</h3>
                    <h1 className="title-of-blog"><Link className="a-blog" to={`/blog/${el.id}`}>{el.name}</Link></h1>
                    <Link to={`/blog/${el.id}`}> <button className="btn-link-blog">
                      <button  className="btn-about-title slide_diagonal">Read More</button>
                    </button>
                    </Link>
                  </motion.div>
                )
              })}
            </AnimatePresence>

          </motion.div>
        </div>
        <div className="parent-load-more-btn">
           <button onClick={() => loadMore()} className="btn-load-more-blog">Load More</button>
          
        </div>
      </div>
      <div className="footer-blog">
      <Footer/>
      </div>
    </div>
  );
};

export default Blog;
