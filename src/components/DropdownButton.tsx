import { FC } from 'react';

export const DropdownButton: FC = () => {
	return (
		<div className="dropdownButton fa-stack">
            <i className="dropdownButtonIcon fas fa-caret-down fa-stack-1x"></i>
            <i className="dropdownButtonBackground fas fa-circle fa-stack-2x"></i>
		</div>
	);
};
