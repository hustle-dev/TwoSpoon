type CardType = 'wide' | 'square' | 'smallSquare';
type CardBackgroundType = 'white' | 'none';
type CardHeadingPositionType = 'bottomLeft' | 'bottomCenter' | 'topLeft';

export interface CardProps {
  id: string | number;
  type: CardType;
  background: CardBackgroundType;
  hasSummary: boolean;
  headingPosition: CardHeadingPositionType;
  imgSrc: string;
  title: string;
  summary: string;
}
