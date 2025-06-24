import React, { useEffect, useState } from "react";
import ProfileHeader from "../profile/ProfileHeader";
import ProfilePersonalData from "../profile/ProfilePersonalData";
import WhoToFollow from "../profile/WhoToFollow";
import Loader from "../ui/Loader";
import { getProfile, getDataByType } from "../../services/profile.service";
import { 
    PROFILE_DATA_TYPES, 
    PROFILE_STATE_KEYS 
} from "../../constants/profileConstants";
import ProfileExperiences from "./ProfileExperiences";
import ProfileInterests from "./ProfileInterests";
import ProfileBooks from "./ProfileBooks";
import ProfilePractices from "./ProfilePractices";
import { useParams } from "react-router-dom";

function Profile() {

    const { userName } = useParams();

    const [profile, setProfile] = useState({
        [PROFILE_STATE_KEYS.PERSONAL]: null,
        [PROFILE_STATE_KEYS.EXPERIENCE]: null,
        [PROFILE_STATE_KEYS.INTEREST]: null,
        [PROFILE_STATE_KEYS.BOOK]: null,
        [PROFILE_STATE_KEYS.PRACTICE]: null
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchProfileData = async () => {
            try {
                setLoading(true);
                const personalRes = await getProfile(userName ?? "subhash.trivedi");
                const personalData = personalRes.data.result;
                setProfile(prev => ({ ...prev, [PROFILE_STATE_KEYS.PERSONAL]: personalData }));
                const [experienceRes, interestRes, bookRes, practiceRes] = await Promise.all([
                    getDataByType(personalData?.id, PROFILE_DATA_TYPES.EXPERIENCE),
                    getDataByType(personalData?.id, PROFILE_DATA_TYPES.INTEREST),
                    getDataByType(personalData?.id, PROFILE_DATA_TYPES.BOOK),
                    getDataByType(personalData?.id, PROFILE_DATA_TYPES.PRACTICE)
                ]);
                setProfile(prev => ({
                    ...prev,
                    [PROFILE_STATE_KEYS.EXPERIENCE]: experienceRes.data.result,
                    [PROFILE_STATE_KEYS.INTEREST]: interestRes.data.result,
                    [PROFILE_STATE_KEYS.BOOK]: bookRes.data.result,
                    [PROFILE_STATE_KEYS.PRACTICE]: practiceRes.data.result
                }));
            } catch (error) {
                console.error('Error fetching profile data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProfileData();
    }, []);
    if (loading) {
        return (
            <main className="main cc-home">
                <Loader size="large" text="Loading profile..." />
            </main>
        );
    }
    return (
        <main className="main cc-home">
            <div className="main-profilecontainer">
                <ProfileHeader profile={profile[PROFILE_STATE_KEYS.PERSONAL]} />
            </div>
            <section className="deviceProfile mb50">
                <div className="page-padding">
                    <div className="main-profilecontainer container">
                        <div className="profileflexBox">
                            <div className="left-profile">
                                <div className="mainprofile-box">
                                    <div className="profile-cover">
                                        <img src={profile[PROFILE_STATE_KEYS.PERSONAL]?.backgroundImg} alt="Profile Cover" />
                                    </div>
                                    {profile[PROFILE_STATE_KEYS.PERSONAL] && <ProfilePersonalData profile={profile[PROFILE_STATE_KEYS.PERSONAL]} />}
                                </div>
                                {profile?.[PROFILE_STATE_KEYS.EXPERIENCE]?.length > 0 && (
                                    <ProfileExperiences items={profile[PROFILE_STATE_KEYS.EXPERIENCE]} />
                                )}
                                {profile?.[PROFILE_STATE_KEYS.INTEREST]?.length > 0 && (
                                    <ProfileInterests items={profile[PROFILE_STATE_KEYS.INTEREST]} />
                                )}
                                {profile?.[PROFILE_STATE_KEYS.BOOK]?.length > 0 && (
                                    <ProfileBooks items={profile[PROFILE_STATE_KEYS.BOOK]} />
                                )}
                                {profile?.[PROFILE_STATE_KEYS.PRACTICE]?.length > 0 && (
                                    <ProfilePractices items={profile[PROFILE_STATE_KEYS.PRACTICE]} />
                                )}
                            </div>
                            <div className="right-profile">
                                <WhoToFollow />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
export default Profile;