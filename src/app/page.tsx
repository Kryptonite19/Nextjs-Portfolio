"use client";
import Image from "next/image";

const Home = () => {
  const handleDownloadResume = () => {
    // Construct the public URL of the PDF file
    const pdfUrl = "/Resume.pdf"; // Update this with the actual path to your PDF file in the public folder

    // Open a new window to download the PDF file
    window.open(pdfUrl, "_blank");
  };
  return (
    <>
      <div className="hero " style={{ minHeight: "84.5vh" }}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/DSC_1098.JPEG"
            width={1200}
            height={800}
            alt="Picture of the author"
            className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl mask mask-squircle"
          />
          <div>
            <h1 className="text-5xl font-bold">
              {"Hello There! I'm "}
              <span className="text-primary">{"Oğuzhan"}</span>
            </h1>
            <p className="py-6 text-lg">
              {
                "I'm a web developer based in Ankara, Turkey. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks."
              }
            </p>
            <button
              className="btn btn-primary text-lg"
              onClick={handleDownloadResume}
            >
              {"Download CV"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
