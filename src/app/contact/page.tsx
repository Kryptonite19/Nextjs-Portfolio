import ContactCard, { type ContactCardProps } from "@/components/ContactCard";

const Contact = () => {
  const contactData: ContactCardProps[] = [
    {
      title: "Email",
      content: "oguzhankeles.dev@gmail.com",
      icon: "email",
    },
    {
      title: "LinkedIn",
      content: "linkedin.com/in/ahmet-oğuzhan-keleş-ogz1111/",
      icon: "linkedin",
    },
    {
      title: "GitHub",
      content: "github.com/Kryptonite19",
      icon: "github",
    },
  ];
  return (
    <div className="container px-5 " style={{ minHeight: "84.5vh" }}>
      <article className="prose lg:prose-lg py-10">
        <h1 className="text-primary">Contact Me</h1>
        <p>
          {
            "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
          }
        </p>
      </article>
      {/* <ContactForm /> */}
      <div className="lg:flex">
        {contactData.map((contact, index) => (
          <div key={index} className="mr-4 my-5">
            <ContactCard {...contact} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
