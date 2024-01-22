import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/ProjectData";

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
