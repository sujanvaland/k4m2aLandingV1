import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ posts }) => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = (direction) => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const scrollAmount = container.offsetWidth;

        let newScrollLeft =
            direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        newScrollLeft = Math.max(0, Math.min(newScrollLeft, maxScrollLeft));

        container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    };

    const scrollToIndex = (index) => {
        if (!containerRef.current) return;
        const container = containerRef.current;

        const item = container.children[index];
        if (!item) return;

        const offsetLeft = item.offsetLeft;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const scrollLeft = Math.min(offsetLeft, maxScrollLeft);

        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onScroll = () => {
            const scrollLeft = container.scrollLeft;
            const itemWidth = container.clientWidth;
            const newIndex = Math.round(scrollLeft / itemWidth);
            setActiveIndex(newIndex);
        };

        container.addEventListener('scroll', onScroll);
        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="carousel-wrapper">
            <button onClick={() => handleScroll('left')} className='btnarrow btnNext'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="rtl-flip" id="chevron-right-small" aria-hidden="true" role="none" data-supported-dps="16x16" fill="#ffffff">
                    <path d="M5 15l4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
                </svg>
            </button>

            <div className="carousel" ref={containerRef}>
                {posts.map((post, index) => (
                    <div key={post.id} className="mypostBox">
                        <div className="mypostBoxheader">
                            <span className="userimgBox">
                                <img src={post.userImg || '/images/imguser.jpg'} alt="User" />
                            </span>
                            <span className="nameBox">{post.userName} reposted again</span>
                        </div>
                        <div className="mypostBoxcontentHeader">
                            <div className="mypostuserImage">
                                <img src={post.userImg || '/images/imguser.jpg'} alt="User" />
                            </div>
                            <div className="mypostHeadercontent">
                                <h5>{post.authorName}</h5>
                                <span className="tagllinedesc">{post.title}</span>
                            </div>
                        </div>
                        <div className="mypostcontent">
                            <div className='postcnt'>
                                <p>{post.content}</p>
                            </div>
                            <div className="postimg">
                                <img src={post.postImg || '/images/imgpost.jpg'} alt="Post" />
                            </div>
                            <div className="mainlikebox">
                                <span>
                                    <img src="/images/like.svg" alt="Likes" />
                                    {post.likes}
                                </span>
                                <span>{post.comments} comments</span>
                                <span>{post.reposts} reposts</span>
                            </div>
                        </div>
                        <div className="mypostBoxfooter">
                            <Link to="/" className="btn btn-secondary">
                                <img src="/images/like.svg" alt="Like" />
                            </Link>
                            <Link to="/" className="btn btn-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    aria-hidden="true"
                                    role="none"
                                    fill="currentColor"
                                >
                                    <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="btn btn-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    id="repost-small"
                                    aria-hidden="true"
                                    role="none"
                                    fill="currentColor"
                                >
                                    <path d="M4 10H2V5c0-1.66 1.34-3 3-3h3.85L7.42 0h2.44L12 3 9.86 6H7.42l1.43-2H5c-.55 0-1 .45-1 1v5zm8-4v5c0 .55-.45 1-1 1H7.15l1.43-2H6.14L4 13l2.14 3h2.44l-1.43-2H11c1.66 0 3-1.34 3-3V6h-2z"></path>
                                </svg>
                            </Link>
                            <Link to="/" className="btn btn-secondary">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    className="rtl-flip"
                                    aria-hidden="true"
                                    role="none"
                                    fill="currentColor"
                                >
                                    <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => handleScroll('right')} className='btnarrow btnPrevious'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="rtl-flip" id="chevron-right-small" aria-hidden="true" role="none" data-supported-dps="16x16" fill="#ffffff">
                <path d="M5 15l4.61-7L5 1h2.39L12 8l-4.61 7z"></path>
            </svg></button>

            <div className="dots">
                {posts.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === activeIndex ? 'active' : ''}`}
                        onClick={() => {
                            setActiveIndex(index);
                            scrollToIndex(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
