import { FC } from 'react';
import { CardProps } from '../interfaces/CardProps';
import {Time} from './Time'

interface CardItemProps {
	card: CardProps;
}

export const Card: FC<CardItemProps> = ({ card }) => {
	return (
		<div className="card">
			<div className="pics">
				<div className="pic1" style={{backgroundImage: `url(${card.pic1})`}}>
				</div>
				<div className="pic2" style={{backgroundImage: `url(${card.pic2})`}}>
				</div>
				<div className="pic3" style={{backgroundImage: `url(${card.pic3})`}}>
				</div>
			</div>
            <div className="cardData">
				<div className="title">{card.title}</div>
				<div className="pins">{`${card.pins} Pins`}</div>
				<Time time={card.time}/>
			</div>
		</div>
	);
};
