"use client";

const ContactForm = () => {
  return (
    <div>
      <div className="w-full ">
        <div className=" sm:max-w-md md:max-w-lg flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered input-primary w-full "
          />
          <input
            type="text"
            placeholder="Your e-mail"
            className="input input-bordered input-primary w-full "
          />
          <textarea
            className="textarea textarea-primary"
            placeholder="Your Message"
          ></textarea>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <button className="btn btn-active btn-primary btn-block max-w-[200px] text-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
