import React from "react";
import ProfileSection from "./ProfileSection";
import ProfileInterestList from "./ProfileInterestList";
import {
  PROFILE_SECTION_TITLES,
  PROFILE_DATA_TYPES,
} from "../../constants/profileConstants";

function ProfilePractices({ items }) {
  return (
    <ProfileSection title={PROFILE_SECTION_TITLES[PROFILE_DATA_TYPES.PRACTICE]}>
      <ProfileInterestList items={items} />
    </ProfileSection>
  );
}

export default ProfilePractices;
