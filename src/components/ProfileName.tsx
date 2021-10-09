import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileName: FC<ProfileDataProps> = ({ profile }) => {
	return <div className="profileName">{profile.name}</div>;
};
