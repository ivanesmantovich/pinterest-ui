import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileInfo: FC<ProfileDataProps> = ({ profile }) => {
	return <div className="profileInfo">{profile.info}</div>;
};
