import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { blogData } from "../data/blogData";
import SEO from "./SEO";
import { getBlogPostMeta } from "../data/metaData";

function BlogDetails() {
  const navigate = useNavigate();
  const { slug } = useParams(); // Get the blog slug from the URL
  const blog = blogData.find((item) => item.link === `/blog/${slug}`); // Find blog by matching the slug in link

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  const metaData = getBlogPostMeta(blog);

  console.log('Blog data:', blog);
  console.log('Meta title:', blog.metatitle);
  console.log('Meta description:', blog.metadescription);
  console.log('Meta data:', metaData);

  // Ensure meta tags are set immediately
  React.useEffect(() => {
    if (blog.metatitle) {
      document.title = `${blog.metatitle} | K4M2A`;
    }
  }, [blog.metatitle]);

  return (
    <>
      <SEO 
        title={blog.metatitle}
        description={blog.metadescription}
        keywords={metaData.keywords}
        url={metaData.url}
        image={metaData.image}
        type={metaData.type}
      />
      <main className="main cc-home blogdetails">
      <section className="hero">
        <div className="page-padding">
          <div className="frontcontainer frontcontainer--small ">
            <div className="section-header cc-legal ">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>{blog.category}</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf" />
              </div>
              <h1 className="section-heading cc-large">{blog.title}</h1>
            </div>
          </div>
          <div className="frontcontainer ">
            <div className="legal-rt w-richtext">
              <div className="blogdetailimg">
                <img src={blog.imgdetais} alt={blog.title} loading="lazy" />
              </div>
            </div>
            <div className="frontcontainer frontcontainer--small securitypage">
              <div className="legal-rt w-richtext" dangerouslySetInnerHTML={{ __html: blog.content }} />
              {/* <p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
            <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
            <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
            <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
            <img src='/images/blog/blog1details.webp' alt={blog.title} />
           
            <p>This feature initially relied on a hybrid model approach using the OpenAI models:</p>
            <ul>
              <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings in each category to identify key attributes.</li>
              <li><strong>Online suggestions: </strong>GPT‑3.5 Turbo evaluated active listings of users and provided real-time improvement tips.</li>
            </ul>
            <p>The result? Mercari observed a statistically significant increase in average sales per user, demonstrating the feature’s effectiveness in improving listing quality. </p>
            <p>“Today, these features are seamlessly integrated into the listing experience, allowing users to benefit from AI without even being aware of it,” says Yasuo Hishii, Supply Team Director at Mercari. This approach ensures the technology works behind the scenes, enhancing the process without adding complexity.</p> */}
              <div className="btnbox btnmargintop50">
                <button
                  type="button"
                  onClick={() => navigate("/blog")}
                  className="linkbtn btnblack"
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}

export default BlogDetails;
