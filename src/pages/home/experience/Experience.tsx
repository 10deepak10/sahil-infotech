import "./Experience.scss";

const Experience = () => {
  return (
    <div className="eperience_container">
      <div className="container py-40">
        <div className="flex-col" data-aos="fade-right">
          <span className="heading3">We are ahead with</span>
          <span className="heading3 theme-text">Experience & Trust</span>
        </div>

        <div className="flex gap-20 info_section" data-aos="flip-up">
          <div className="flex-col gap-12 align-center">
            <img
              className="logo"
              src="/media/icons/upwork-img.svg"
              alt="upwork"
            />
            <span className="count">100% Job Success</span>
          </div>
          <hr />
          <div className="flex-col gap-12 align-center">
            <img src="/media/icons/com-project.svg" alt="upwork" />
            <span className="count">100+ Project Completed</span>
          </div>
          <hr />
          <div className="flex-col gap-12 align-center">
            <img src="/media/icons/briefcase.svg" alt="upwork" />
            <span className="count">2+ Years Of Experience</span>
          </div>
          <hr />
          <div className="flex-col gap-12 align-center">
            <img src="/media/icons/user.svg" alt="upwork" />
            <span className="count">24+ Experts Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
