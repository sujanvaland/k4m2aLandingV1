import React, { useEffect, useState } from "react";
import ProfileHeader from "../profile/ProfileHeader";
import ProfilePersonalData from "../profile/ProfilePersonalData";
import Loader from "../ui/Loader";
import { getProfile, getDataByType } from "../../services/profile.service";
import {
  PROFILE_DATA_TYPES,
  PROFILE_STATE_KEYS,
} from "../../constants/profileConstants";
import ProfileExperiences from "./ProfileExperiences";
import ProfileInterests from "./ProfileInterests";
import ProfileBooks from "./ProfileBooks";
import ProfilePractices from "./ProfilePractices";
import { useParams } from "react-router-dom";
import { decodeBase64 } from "../../utils/jsonUtils";

function Profile() {
  const { encodedUserName } = useParams();
  if (!encodedUserName) throw new Error('Encoded username is missing from the URL');
  
  const userName = decodeBase64(encodedUserName);
  if (!userName) throw new Error('Invalid encoded username');

  const [profile, setProfile] = useState({
    [PROFILE_STATE_KEYS.PERSONAL]: null,
    [PROFILE_STATE_KEYS.EXPERIENCE]: null,
    [PROFILE_STATE_KEYS.INTEREST]: null,
    [PROFILE_STATE_KEYS.BOOK]: null,
    [PROFILE_STATE_KEYS.PRACTICE]: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        setLoading(true);
        const personalRes = await getProfile(userName);
        
        if (!personalRes || !personalRes.data || !personalRes.data.result) {
          throw new Error('PROFILE_NOT_FOUND');
        }
        
        const personalData = personalRes.data.result;
        setProfile((prev) => ({
          ...prev,
          [PROFILE_STATE_KEYS.PERSONAL]: personalData,
        }));
        
        const [experienceRes, interestRes, bookRes, practiceRes] =
          await Promise.all([
            getDataByType(personalData?.id, PROFILE_DATA_TYPES.EXPERIENCE),
            getDataByType(personalData?.id, PROFILE_DATA_TYPES.INTEREST),
            getDataByType(personalData?.id, PROFILE_DATA_TYPES.BOOK),
            getDataByType(personalData?.id, PROFILE_DATA_TYPES.PRACTICE),
          ]);
          
        setProfile((prev) => ({
          ...prev,
          [PROFILE_STATE_KEYS.EXPERIENCE]: experienceRes?.data?.result || [],
          [PROFILE_STATE_KEYS.INTEREST]: interestRes?.data?.result || [],
          [PROFILE_STATE_KEYS.BOOK]: bookRes?.data?.result || [],
          [PROFILE_STATE_KEYS.PRACTICE]: practiceRes?.data?.result || [],
        }));
      } catch (err) {
        if (err?.message === 'PROFILE_NOT_FOUND') {
          setError(err);
        } else {
          setError(new Error('Something went wrong while fetching profile data'));
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProfileData();
  }, [userName]);

  if (error) {
    if (error.message === 'PROFILE_NOT_FOUND') {
      throw new Error('404_NOT_FOUND');
    }
    throw error;
  }

  if (loading) {
    return (
      <main className="main cc-home">
        <Loader size="large" text="Loading profile..." />
      </main>
    );
  }
  return (
    <main className="main cc-home">
      {profile[PROFILE_STATE_KEYS.PERSONAL] && (
        <div className="main-profilecontainer">
          <ProfileHeader profile={profile[PROFILE_STATE_KEYS.PERSONAL]} />
        </div>
      )}
      <section className="deviceProfile mb50">
        <div className="page-padding">
          <div className="main-profilecontainer container">
            <div className="profileflexBox">
              <div className="left-profile">
                <div className="mainprofile-box">
                  {profile[PROFILE_STATE_KEYS.PERSONAL]?.backgroundImg && (
                    <div className="profile-cover">
                      <img
                        src={
                          profile[PROFILE_STATE_KEYS.PERSONAL]?.backgroundImg
                        }
                        alt="Profile Cover"
                      />
                    </div>
                  )}
                  {profile[PROFILE_STATE_KEYS.PERSONAL] && (
                    <ProfilePersonalData
                      profile={profile[PROFILE_STATE_KEYS.PERSONAL]}
                    />
                  )}
                </div>
                {profile?.[PROFILE_STATE_KEYS.EXPERIENCE]?.length > 0 && (
                  <ProfileExperiences
                    items={profile[PROFILE_STATE_KEYS.EXPERIENCE]}
                  />
                )}
                {profile?.[PROFILE_STATE_KEYS.INTEREST]?.length > 0 && (
                  <ProfileInterests
                    items={profile[PROFILE_STATE_KEYS.INTEREST]}
                  />
                )}
                {profile?.[PROFILE_STATE_KEYS.BOOK]?.length > 0 && (
                  <ProfileBooks items={profile[PROFILE_STATE_KEYS.BOOK]} />
                )}
                {profile?.[PROFILE_STATE_KEYS.PRACTICE]?.length > 0 && (
                  <ProfilePractices
                    items={profile[PROFILE_STATE_KEYS.PRACTICE]}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default Profile;
