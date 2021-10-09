import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';

export const ProfileFollowers: FC<ProfileDataProps> = ({ profile }) => {
    let formatter = Intl.NumberFormat('en', { notation: 'compact' });
	return <div className="profileFollowers">{`${formatter.format(profile.followers)} followers`}</div>;
};
