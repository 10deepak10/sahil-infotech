import "./Joblist.scss";
import { useNavigate } from "react-router-dom";
import jobs from "../../../db/jobs.json";

const Joblist = () => {
  const navigate = useNavigate();
const handleNavigate = (id: number, title: string) => {
  const slug = title
    .toLowerCase()
    .replace(/[\/&]/g, " and ") 
    .replace(/[^a-z0-9\s-]/g, "") 
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();

  navigate(`/job-detail/${id}/${slug}`);
};


  return (
    <div className="align-center flex-col">
      <div className="title flex-col gap-16" data-aos="fade-up">
        <h3 className="heading3">Perk Up Your Passion</h3>
      </div>
      <div className="list_wrapper full-width">
        {jobs.map((item) => (
          <div key={item.id} data-aos="fade-up">
            <div className="list_item">
              <div className="flex-col gap-20">
                <h4 className="text f-18 bold">{item.title}</h4>
                <div className="meta_info_wrapper">
                  <span className="meta_info">
                    <img src="/media/icons/location.svg" alt="location" />
                    {item.location}
                  </span>
                  <span className="meta_info">
                    <img src="/media/icons/briefcase.svg" alt="education" />
                    {item.education}
                  </span>
                  <span className="meta_info">
                    <img src="/media/icons/user.svg" alt="experience" />
                    {item.experience.min} - {item.experience.max} Years
                  </span>
                </div>
              </div>
              <button
                className="cta-btn fit-width"
                onClick={() => handleNavigate(item.id, item.title)}
              >
                Apply Now
                <img
                  src="/media/icons/chevron-right.svg"
                  alt="arrow-up"
                  width="18"
                  height="18"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Joblist;
