import { FC } from 'react';
import { ProfileDataProps } from '../interfaces/ProfileDataProps';
import { ProfileName } from './ProfileName';
import { ProfileLink } from './ProfileLink';
import { ProfileTag } from './ProfileTag';
import { ProfileInfo } from './ProfileInfo';
import { ProfileFollowers } from './ProfileFollowers';
import { ProfileFollowing } from './ProfileFollowing';

export const ProfileData: FC<ProfileDataProps> = ({ profile }) => {
	return (
		<div className="profileData">
			<ProfileName profile={profile} />
			<ProfileLink profile={profile} />
			<ProfileTag profile={profile} />
			<ProfileInfo profile={profile} />
			<ProfileFollowers profile={profile} />
			<ProfileFollowing profile={profile} />
		</div>
	);
};
