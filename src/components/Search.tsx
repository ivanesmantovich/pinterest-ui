import { FC } from 'react';

export const Search: FC = () => {
	return (
		<div className="search">
			<div className="searchIconDiv">
				<i className="fas fa-search"></i>
			</div>
			<div className="searchInputFieldDiv">
				<input
					className="searchInputField"
					type="text"
					placeholder="Search for fashion, recipies, etc."
				/>
			</div>
		</div>
	);
};
