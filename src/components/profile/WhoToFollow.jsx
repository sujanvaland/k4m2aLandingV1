import React from "react";
import ProfileSection from "./ProfileSection";
import WhoToFollowList from "./WhoToFollowList";

const whoToFollowItems = [
    { img: "/images/img_sadguru.png", title: "Sadguru", subtitle: "@spiritual Leader" },
    { img: "/images/img_sadguru.png", title: "Sadguru", subtitle: "@spiritual Leader" },
    { img: "/images/img_sadguru.png", title: "Sadguru", subtitle: "@spiritual Leader" },
];

function WhoToFollow() {
    return (
        <ProfileSection title="Who to Follow">
            <WhoToFollowList items={whoToFollowItems} />
        </ProfileSection>
    );
}

export default WhoToFollow; 