import React from "react";

function WhoToFollowList({ items }) {
    return (
        <div className="maininterestbox">
            {items.map((item, idx) => (
                <div className="interestbox" key={idx}>
                    <div className="interestimage">
                        <img src={item?.profileImg ?? item.img ?? "/images/img_sadguru.png"} alt="Interest" />
                    </div>
                    <div className="interesttext">
                        <h4>{item.name ?? item.title}</h4>
                        {item.subtitle && <p>{item.subtitle}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default WhoToFollowList; 