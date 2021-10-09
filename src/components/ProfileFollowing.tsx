import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileFollowing: FC<ProfileDataProps> = ({ profile }) => {
	let formatter = Intl.NumberFormat('en', { notation: 'compact' });
	return (
		<div className="profileFollowing">
			{`${formatter.format(profile.followers)} following`}
		</div>
	);
};
