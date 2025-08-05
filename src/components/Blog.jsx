import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../data/blogData";
import SEO from "./SEO";
import { pageMetaData } from "../data/metaData";
 

const truncateText = (text, charLimit) => {
  return text.length > charLimit ? `${text.substring(0, charLimit)}...` : text;
};

function Blog() {
  return (
    <>
      <SEO 
        title={pageMetaData.blog.title}
        description={pageMetaData.blog.description}
        keywords={pageMetaData.blog.keywords}
        url={pageMetaData.blog.url}
      />
      <main className="main cc-home">
      <section className="hero">
        <div className="page-padding">
          <div className="frontcontainer">
            <div className="section-header cc-legal">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>Blog</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h1 className="section-heading cc-large">Blog</h1>
            </div>
            <div className="legal-rt w-richtext">
              <div className="bloglistBox">

                {blogData.map((blog) => (
                  <Link to={blog.link} key={blog.id} className="blogBox">
                    <div className="blogImage">
                      <img src={blog.image} alt={blog.title} loading="lazy" />
                    </div>
                    <div className="blogContent">
                      <h2 className="section-heading">{truncateText(blog.title, 100)}</h2>
                      <div className="bloglistBottom">
                        <div className="category">{blog.category}</div>
                        <div className="date">{blog.date}</div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {/* <div className="paginationBox">
                <div className="pagination">
                  <a href="#" className="prev">&laquo;</a>
                  <a href="#" className="active">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">4</a>
                  <a href="#">5</a>
                  <a href="#">6</a>
                  <a href="#" className="next">&raquo;</a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default Blog;
