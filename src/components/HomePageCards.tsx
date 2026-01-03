import { LucideIcon } from "lucide-react";
import "./HomePageCards.css"

type Props = {
  heading: string;
  icon: LucideIcon;
  description: string;
};

export default function HomePageCards({ heading, icon: Icon, description }: Props) {
  return (
    <div className="mini-card">
      <div className="icon-box">
        <Icon size={22} />
      </div>

      <div className="card-info">
        <h4>{heading}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
}
