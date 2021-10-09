import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileLink: FC<ProfileDataProps> = ({ profile }) => {
	return (
		<div className="profileLink">
			<a href="/">{profile.link}</a>
		</div>
	);
};
