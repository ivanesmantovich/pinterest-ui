import { FC } from 'react';

export const DropdownButton: FC = () => {
	return (
		<div className="dropdownButton fa-stack">
            <div className="dropdownButtonIcon"><i className="fas fa-caret-down fa-stack-1x"></i></div>
            <div className="dropdownButtonBackground"><i className="fas fa-circle fa-stack-2x"></i></div>
		</div>
	);
};
