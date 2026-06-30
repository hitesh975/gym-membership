type trainerCardProps = {
  name: string;
  description: string;
  image: string;
};
import "./trainerCard.css";

export default function TrainerCard({
  name,
  description,
  image,
}: trainerCardProps) {
  return (
    <div className="trainerCard">
      <img src={image} alt={name} className="trainerImage" />
      <h3 className="trainerName">{name}</h3>
      <p className="trainerDescription">{description}</p>
    </div>
  );
}
