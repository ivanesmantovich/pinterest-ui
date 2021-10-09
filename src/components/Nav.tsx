import { FC } from 'react';
import { DropdownButton } from './DropdownButton';
import { Explore } from './ExploreButton';
import { LogButton } from './LogButton';
import { Logo } from './Logo';
import { Search } from './Search';
import { SignButton } from './SignButton';
import { Title } from './Title';

export const Nav: FC = () => {
	return (
		<div className='Nav'>
            <div className="navLeftPart">
                <div className="logoWithTitle">
                    <Logo/>
                    <Title/>
                </div>
                <Explore/>
            </div>
            <Search/>
            <div className="navRightPart">
                <LogButton/>
                <SignButton/>
                <DropdownButton/>
            </div>
        </div>
	);
};
