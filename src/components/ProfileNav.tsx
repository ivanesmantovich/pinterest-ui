import { FC } from 'react';

export const ProfileNav: FC = () => {
	return (
		<div className="profileNav">
			<div className="shareButton fa-stack">
				<i className="shareButtonIcon fas fa-share-square fa-stack-1x"></i>
                <i className="shareButtonBackground fas fa-circle fa-stack-2x"></i>
			</div>
            <div className="followButton">
                <span>Follow</span>
            </div>
		</div>
	);
};
