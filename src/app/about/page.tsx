import ProjectCard, { type ProjectCardProps } from "@/components/ProjectCard";
export const projectData: ProjectCardProps[] = [
  {
    title: "Pharma App",
    description: "A pharmacy stock management app made with Flutter",
    details:
      "The Pharmacy Stock Management App is a comprehensive solution designed to streamline and enhance the stock management processes within a pharmacy or pharmaceutical business. Developed using the Flutter framework, this app provides a modern and user-friendly interface, ensuring efficient inventory control and improved operational workflows.",
    technologies: "Flutter",
    link: "string",
  },
  {
    title: "Bot Mahir",
    description: "A Discord chat bot project to have fun with friends",
    details:
      "Bot Mahir is a versatile and interactive application developed using Python, specifically designed to enhance the functionality and engagement within Discord servers. This bot serves as a powerful assistant, automating various tasks, providing real-time information, and facilitating communication between users. With its customizable features and ease of integration, Bot Mahir is a valuable addition to any Discord community.",
    technologies: "Python",
    link: "string",
  },
  {
    title: "OGZ Cuisine",
    description:
      "A delightful recipe app that provides a diverse range of recipes from various categories.",
    details:
      "OGZ Cuisine is a captivating and user-friendly platform designed to elevate the cooking and dining experience. Developed using the React framework, this app offers a delightful and interactive way for users to discover, save, and share a diverse range of recipes across various categories. With a clean and modern interface, OGZ Cuisine aims to inspire both novice and seasoned cooks to explore new culinary horizons.",
    technologies: "React",
    link: "string",
  },
];

const About = () => {
  return (
    <div className="container px-5 pb-28" style={{ minHeight: "84.5vh" }}>
      <article className="prose lg:prose-lg py-10 ">
        <h1 className="text-primary">About Me</h1>
        <p>
          {
            "I am a passionate and detail-oriented individual with a deep interest in design and technology. From my early years, I've been captivated by the world of design, and as I embarked on my journey in computer engineering, I found the perfect intersection of creativity and problem-solving."
          }
        </p>
        <p>
          {
            "My journey began with childhood hobbies, including ventures into Photoshop, which fueled my fascination with design. As I delved into computer engineering, my goal became clear - to seamlessly integrate design and engineering, aspiring to emerge as a seasoned developer."
          }
        </p>
        <p>
          {
            "Driven by a curiosity to explore new technologies, I continually seek opportunities to enhance my skills. I thrive in collaborative environments and enjoy tackling challenges head-on. My dedication to creating user-centric and visually appealing solutions motivates me to stay at the forefront of technology trends."
          }
        </p>
        <p>
          {
            "In addition to my technical skills, I bring strong communication and teamwork abilities. I believe that effective collaboration is key to successful projects. Whether it's crafting elegant code or designing intuitive user interfaces, I approach each task with enthusiasm and a commitment to excellence."
          }
        </p>
      </article>
      <article className="prose prose-lg my-10">
        <h1 className="text-primary">My Projects</h1>
      </article>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projectData.map((project, index) => (
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
