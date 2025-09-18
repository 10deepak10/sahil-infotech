import "./JobDetail.scss";
import { useNavigate, useParams } from "react-router-dom";
import jobsData from "../../../db/jobs.json"; 
import { Helmet } from "react-helmet-async";

const JobDetail = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === Number(id));
  const navigate = useNavigate();

  const handleNavigate = (id: string | number) => {
    navigate(`/apply/${id}`);
  };

  if (!job) {
    return (
      <div className="container">
        <Helmet>
          <title>Job Not Found | Sahil Infotech Careers</title>
          <meta
            name="description"
            content="The job you are looking for could not be found. Explore open positions at Sahil Infotech."
          />
        </Helmet>
        <h2>Job Not Found</h2>
      </div>
    );
  }

  // Create slug for SEO-friendly canonical link
  const slug = job.title.toLowerCase().replace(/\s+/g, "-");

  return (
    <>
      {/* ✅ SEO Metadata + JobPosting Schema */}
      <Helmet>
        <title>{`${job.title} | Careers at Sahil Infotech`}</title>
        <meta
          name="description"
          content={`Apply now for ${job.title} at Sahil Infotech. Location: ${job.location}. Required skills: ${job.skills.join(
            ", "
          )}.`}
        />
        <link
          rel="canonical"
          href={`https://www.sahilinfotech.com/job-detail/${job.id}/${slug}`}
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "JobPosting",
            title: job.title,
            description: job.responsibilities.join(", "),
            identifier: {
              "@type": "PropertyValue",
              name: "Sahil Infotech",
              value: job.id,
            },
            datePosted: new Date().toISOString(),
            employmentType: "FULL_TIME",
            hiringOrganization: {
              "@type": "Organization",
              name: "Sahil Infotech",
              sameAs: "https://www.sahilinfotech.com",
              logo: "https://www.sahilinfotech.com/media/logo.png",
            },
            jobLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressLocality: job.location,
                addressCountry: "IN",
              },
            },
            qualifications: job.skills.join(", "),
            responsibilities: job.responsibilities.join(", "),
            skills: job.skills.join(", "),
            educationRequirements: job.education,
            experienceRequirements: `${job.experience.min} - ${job.experience.max} years`,
            applicantLocationRequirements: {
              "@type": "Country",
              name: "India",
            },
          })}
        </script>
      </Helmet>

      {/* ✅ Page UI */}
      <div className="job-banner">
        <img
          src={"/media/banner/job-default-banner.png"}
          alt={job.title}
          className="job-banner-img"
        />
        <div className="job-banner-overlay">
          <h1 className="job-banner-title">{job.title}</h1>
        </div>
      </div>

      <div className="detail-container" data-aos="fade-up">
        <div className="container job-detail">
          <h2 className="job-title">{job.title}</h2>

          {/* Job Meta */}
          <div className="job-meta">
            <div className="meta-item">
              <img
                src="/media/icons/location.svg"
                alt="Location"
                className="meta-icon"
              />
              <span className="meta-value">{job.location}</span>
            </div>
            <div className="meta-item">
              <img
                src="/media/icons/briefcase.svg"
                alt="Education"
                className="meta-icon"
              />
              <span className="meta-value">{job.education}</span>
            </div>
            <div className="meta-item">
              <img
                src="/media/icons/user.svg"
                alt="Experience"
                className="meta-icon"
              />
              <span className="meta-value">
                {job.experience.min} - {job.experience.max} Years
              </span>
            </div>
          </div>
        </div>

        {/* Job Content */}
        <div className="d-flex flex-col gap-30">
          {/* Responsibilities */}
          <div className="d-flex flex-col gap-20">
            <h3 data-aos="fade-up">Responsibilities</h3>
            <ul className="custom-list">
              {job.responsibilities.map((res, index) => (
                <li key={index} data-aos="fade-up">
                  {res}
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="d-flex flex-col gap-20">
            <h3 data-aos="fade-up">Skills Required</h3>
            <ul className="custom-list">
              {job.skills.map((skill, index) => (
                <li key={index} data-aos="fade-up">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Now */}
          <button
            className="cta-btn fit-width m-auto"
            onClick={() => handleNavigate(job.id)}
            data-aos="fade-up"
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
    </>
  );
};

export default JobDetail;
