type card1Props = {
  title: string;
  description: string;
  img: string;
};

import "./card1.css";

export default function Card1({ title, description, img }: card1Props) {
  return (
    <div className="Card1">
      <img className="Card1Image" src={img} alt={title} />
      <h3 className="Card1title">{title}</h3>
      <p className="Card1P">{description}</p>
    </div>
  );
}
