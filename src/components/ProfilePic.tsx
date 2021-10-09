import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfilePic:FC<ProfileDataProps> = ({profile}) => {
    return (
        <div className="profilePicContainer">
            <img className='profilePic' src={profile.profilePicLink} alt="profilePic" />
        </div>
    )
}
