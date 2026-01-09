type Props = {
  heading: string;
  description: string;
  variant?: string;
};
import "./HomePageEventCards.css"

export default function HomePageEventCards({
  heading,
  description,
  variant = "",
}: Props) {
  return (
    <div className={`homepage-event-card ${variant}`}>
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}
