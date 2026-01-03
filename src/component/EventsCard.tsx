import React from "react";
import Image from "next/image";
import "./EventsCard.css";

interface EventTileProps {
  imageSrc: string;
  title: string;
  description: string;
}

const EventTile: React.FC<EventTileProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="event-tile">
      <div className="event-media">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="event-media-img"
          sizes="(max-width: 1200px) 100vw, 600px"
        />
      </div>

      <div className="event-content">
        <h2 className="event-heading">{title}</h2>
        <div className="event-summary">
          <span className="event-marker">/</span>
          <p className="event-description">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default EventTile;
