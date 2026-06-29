type Card2Props = {
  title: string;
  points: string[];
  price: string;
};

import "./card2.css";

export default function Card2({ title, points, price }: Card2Props) {
  return (
    <div className="Card2">
      <h3 className="Card2Title">{title}</h3>
      <h4 className="Card2Price">{price}</h4>
      <div className="Card2PointsContainer">
        <ul className="Card2Points">
          {points.map((point, index) => (
            <li key={index} className="card2Point">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <button className="JoinBtn">Join Now</button>
    </div>
  );
}
