import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileTag: FC<ProfileDataProps> = ({ profile }) => {
	return <div className="profileTag">{`@${profile.tag}`}</div>;
};
