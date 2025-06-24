import React from "react";

function ProfileInterestList({ items }) {
    return (
        <div className="maininterestbox">
            {items.map((item, idx) => (
                <div className="interestbox" key={idx}>
                    <div className="interestimage">
                        <img src={item.profileImg ?? "/images/img_sadguru.png"} alt="Interest" />
                    </div>
                    <div className="interesttext">
                        <h4>{item.name}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProfileInterestList; 