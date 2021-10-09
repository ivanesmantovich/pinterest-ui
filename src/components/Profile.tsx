import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';
import { ProfileData } from './ProfileData';
import { ProfilePic } from './ProfilePic';
import { ProfileNav } from './ProfileNav';


export const Profile:FC<ProfileDataProps> = ({profile}) => {
    return (
        <div className="profileContainer">
            <div className="profile">
                <ProfilePic profile={profile}/>
                <ProfileData profile={profile}/>
                <ProfileNav/>
            </div>
        </div>
    )
}
