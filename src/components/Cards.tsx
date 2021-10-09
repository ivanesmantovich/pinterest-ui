import { FC } from 'react';
import { CardProps } from '../interfaces/CardProps';
import { Card } from './Card';

interface CardsProps {
	cards: CardProps[];
}

export const Cards: FC<CardsProps> = ({ cards }) => {
	return (
		<div className="cardsContainer">
			{cards.map((card) => {
				return <Card card={card} key={card.id} />;
			})}
		</div>
	);
};
