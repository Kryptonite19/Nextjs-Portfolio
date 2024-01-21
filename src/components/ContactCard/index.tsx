"use client";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
export interface ContactCardProps {
  title: string;
  content: string;
  icon: "email" | "linkedin" | "github";
}
const ContactCard: React.FC<ContactCardProps> = ({ title, content, icon }) => {
  // ContactCard.js

  let IconComponent = null;

  switch (icon) {
    case "email":
      IconComponent = FiMail;
      break;
    case "linkedin":
      IconComponent = FiLinkedin;
      break;
    case "github":
      IconComponent = FiGithub;
      break;
    default:
      IconComponent = FiMail; // Default to email icon
  }
  return (
    <div className="flex justify-center items-center min-w-72 min-h-56 px-5 py-5 card w-95 shadow-lg bg-primary-content ">
      <div className="card-body items-center text-center">
        <div className="icon-container">
          <IconComponent size={32} />
        </div>
        <p>{title}</p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
