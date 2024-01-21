"use client";

import { useState } from "react";
import Modal from "./modal";
import PharmaApp from "../Articles/PharmaApp";
import BotMahir from "../Articles/BotMahir";
import OgzCuisine from "../Articles/OgzCuisine";

export interface ProjectCardProps {
  title: string;
  description: string;
  details: string;
  technologies: string;
  link: string;
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  details,
}) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="card w-90 h-52 bg-primary-content shadow-xl">
      <div className="card-body">
        <h1 className="card-title">
          {title}
          <span>
            <div className="badge badge-primary">{technologies}</div>
          </span>
        </h1>
        <p className="text-sm">{description} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={handleToggle}>
            See More
          </button>
          <Modal open={open}>
            {title === "Pharma App" && (
              <PharmaApp>
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="py-4 ">{details}</p>
              </PharmaApp>
            )}
            {title === "Bot Mahir" && (
              <BotMahir>
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="py-4 ">{details}</p>
              </BotMahir>
            )}
            {title === "OGZ Cuisine" && (
              <OgzCuisine>
                <h1 className="font-bold text-xl">{title}</h1>
                <p className="py-4 ">{details}</p>
              </OgzCuisine>
            )}
            <div className="modal-action">
              {/* closes the modal */}
              <button className="btn btn-primary" onClick={handleToggle}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
