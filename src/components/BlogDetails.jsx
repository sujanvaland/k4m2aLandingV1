import React from "react";
import { useParams,useNavigate } from "react-router-dom"; 

const blogData = [
  {
    id: 1,
    title: "Mercari enhances product listings and better supports sellers with GPT-4o mini",
    category: "Dhyan",
    date: "2021-09-01",
    imgdetais: "/images/blog/details_1.webp",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/1.webp",
    content: "This is a detailed blog post about how AI is changing search...",
    link: "/blog/the-future-of-search",
  },
  {
    id: 2,
    title: "Endex builds the future of financial analysis, powered by OpenAI’s reasoning models",
    category: "Dhyan",
    imgdetais: "/images/blog/details_2.webp",
    date: "2021-09-01",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/2.webp",
    content: "AI is being used in voice assistants, recommendation engines, and more...",
    link: "/blog/ai-in-everyday-life",
  },
  {
    id: 3,
    title: "Rogo scales AI-driven financial research with OpenAI o1",
    category: "Dhyan",
    date: "2021-09-01",
    imgdetais: "/images/blog/details_3.webp",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/3.webp",
    content: "No-code platforms allow anyone to build software without coding skills...",
    link: "/blog/no-code-platforms",
  },
  {
    id: 4,
    title: "Zalando boosts the customer experience with its Assistant, powered by GPT-4o mini",
    category: "Dhyan",
    date: "2021-09-01",
    imgdetais: "/images/blog/details_4.webp",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/4.webp",
    content: "This is a detailed blog post about how AI is changing search...",
    link: "/blog/the-future-of-search",
  },
  {
    id: 5,
    title: "Morgan Stanley uses AI evals to shape the future of financial services",
    category: "Dhyan",
    date: "2021-09-01",
    imgdetais: "/images/blog/details_5.webp",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/5.webp",
    content: "AI is being used in voice assistants, recommendation engines, and more...",
    link: "/blog/ai-in-everyday-life",
  },
  {
    id: 6,
    title: "Grab builds smarter maps for Southeast Asia with vision fine-tuning",
    category: "Dhyan",
    date: "2021-09-01",
    imgdetais: "/images/blog/details_6.webp",
    description: `<p>Mercari, one of Japan’s leading online marketplaces, saw downloads soar after expanding into the U.S. in 2014. By integrating GPT‑4o mini and other models, Mercari is redefining how users buy and sell secondhand goods, making the process more seamless and accessible worldwide.</p>
    <p>To simplify listings and boost sales, Mercari incorporated OpenAI’s API into two key features. These enhancements reduce friction, helping users create high-quality product pages that drive more successful transactions.</p>
    <h4>Optimizing product listings to drive sales with the Mercari AI Assistant</h4>
    <p>Launched in October 2023, the Mercari AI Assistant helps users optimize their listings. If an item remains unsold for a certain period, the AI evaluates the listing against best practices and provides tailored suggestions.</p>
    <img src='/images/blog/blog1details.webp' alt='Mercari AI Assistant' />
    <ul>
      <li><strong>Offline analysis:</strong> GPT‑4 analyzed top listings.</li>
      <li><strong>Online suggestions:</strong> GPT‑3.5 Turbo provided real-time improvement tips.</li>
    </ul>
    <p>“Today, these features are seamlessly integrated into the listing experience,” says Yasuo Hishii.</p>`,
    image: "/images/blog/6.webp",
    content: "No-code platforms allow anyone to build software without coding skills...",
    link: "/blog/no-code-platforms",
  }
];


function BlogDetails() {
  const navigate = useNavigate();
  const { id } = useParams(); // Get the blog ID from the URL
  const blog = blogData.find((item) => item.id === Number(id)); // Convert id to number and find blog

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  console.log(blog,'blog');

  return (
    <main className="main cc-home blogdetails">
      <section className="hero">
        <div className="page-padding">
          <div className="container container--small">
            <div className="section-header cc-legal">
              <div className="eyebrow-pill">
                <div className="eyebrow-pill-inner">
                  <div>{blog.category}</div>
                </div>
                <div className="eyebrow-pill-bg u-rainbow u-blur-perf"></div>
              </div>
              <h1 className="section-heading cc-large">{blog.title}</h1>
            </div>
          </div>
          <div className="container ">
            <div className="legal-rt w-richtext">
              <div className="blogdetailimg">
            <img src={blog.imgdetais} alt={blog.title} />
            </div>
          </div>
          <div className="container container--small">
            <div className="legal-rt w-richtext" dangerouslySetInnerHTML={{ __html: blog.description }} />
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
          <div className="btnbox">
            <button onClick={() => navigate("/blog")} className="linkbtn btnblack">
              Back
            </button>
            </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogDetails;
