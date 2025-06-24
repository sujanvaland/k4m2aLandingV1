import React from "react";
import ProfileSection from "./ProfileSection";
import ProfileInterestList from "./ProfileInterestList";
import { PROFILE_SECTION_TITLES, PROFILE_DATA_TYPES } from "../../constants/profileConstants";

function ProfileExperiences({ items }) {
    return (
        <ProfileSection title={PROFILE_SECTION_TITLES[PROFILE_DATA_TYPES.EXPERIENCE]}>
            <ProfileInterestList items={items} />
        </ProfileSection>
    );
}

export default ProfileExperiences; 