import React from "react";
import { Link } from "react-router-dom";

const blogData = [
  {
    id: 1,
    title: "Mercari enhances product listings and better supports sellers with GPT-4o mini",
    category: "Dhyan",
    date: "2021-09-01",
    description: "Discover how K4M2A is changing the way we search for information online.",
    image: "/images/blog/1.webp",
    content: "This is a detailed blog post about how AI is changing search...",
    link: "/blog/the-future-of-search",
  },
  {
    id: 2,
    title: "Endex builds the future of financial analysis, powered by OpenAI’s reasoning models",
    category: "Dhyan",
    date: "2021-09-01",
    description: "How artificial intelligence is making daily tasks smarter and more efficient.",
    image: "/images/blog/2.webp",
    content: "AI is being used in voice assistants, recommendation engines, and more...",
    link: "/blog/ai-in-everyday-life",
  },
  {
    id: 3,
    title: "Rogo scales AI-driven financial research with OpenAI o1",
    category: "Dhyan",
    date: "2021-09-01",
    description: "Explore how no-code tools are empowering individuals and businesses.",
    image: "/images/blog/3.webp",
    content: "No-code platforms allow anyone to build software without coding skills...",
    link: "/blog/no-code-platforms",
  },
  {
    id: 4,
    title: "Zalando boosts the customer experience with its Assistant, powered by GPT-4o mini",
    category: "Dhyan",
    date: "2021-09-01",
    description: "Discover how K4M2A is changing the way we search for information online.",
    image: "/images/blog/4.webp",
    content: "This is a detailed blog post about how AI is changing search...",
    link: "/blog/the-future-of-search",
  },
  {
    id: 5,
    title: "Morgan Stanley uses AI evals to shape the future of financial services",
    category: "Dhyan",
    date: "2021-09-01",
    description: "How artificial intelligence is making daily tasks smarter and more efficient.",
    image: "/images/blog/5.webp",
    content: "AI is being used in voice assistants, recommendation engines, and more...",
    link: "/blog/ai-in-everyday-life",
  },
  {
    id: 6,
    title: "Grab builds smarter maps for Southeast Asia with vision fine-tuning",
    category: "Dhyan",
    date: "2021-09-01",
    description: "Explore how no-code tools are empowering individuals and businesses.",
    image: "/images/blog/6.webp",
    content: "No-code platforms allow anyone to build software without coding skills...",
    link: "/blog/no-code-platforms",
  }
];

const truncateText = (text, charLimit) => {
  return text.length > charLimit ? `${text.substring(0, charLimit)}...` : text;
};

function Blog() {
  return (
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
                  <Link to={`/blog/${blog.id}`} key={blog.id} className="blogBox">
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
              <div className="paginationBox">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;
