import "./JobForm.scss";
import { useParams } from "react-router-dom";
import jobsData from "../../db/jobs.json";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";

type ButtonState = "idle" | "sending" | "failed" | "success";

const JobForm = () => {
  const { id } = useParams();
  const job = jobsData.find((job) => job.id === Number(id));
  const defaultSubject = job ? job.title : "";

  const [status, setStatus] = useState("");
  const [buttonState, setButtonState] = useState<ButtonState>("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [selectedJob, setSelectedJob] = useState(job || null);

  // 🛠️ Field validation
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "firstName":
        return value.trim() ? "" : "First name is required";
      case "lastName":
        return value.trim() ? "" : "Last name is required";
      case "email":
        return value.trim() ? "" : "Email is required";
      case "mobile":
        if (!value.trim()) return "Mobile is required";
        if (!/^\d{10}$/.test(value))
          return "Enter a valid 10-digit mobile number";
        return "";
      case "subject":
        return value.trim() ? "" : "Please select a job";
      case "letter":
        return value.trim() ? "" : "cover Letter is required";
      case "experience":
        return value.trim() ? "" : "Experience is required";
      case "currentCTC":
        return value.trim() ? "" : "Current CTC is required";
      case "expectedCTC":
        return value.trim() ? "" : "Expected CTC is required";
      case "noticePeriod":
        return value.trim() ? "" : "Notice period is required";
      default:
        return "";
    }
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormErrors((prev) => {
      const newErrors = { ...prev };
      if (error) {
        newErrors[name] = error;
      } else {
        delete newErrors[name];
      }
      return newErrors;
    });
  };

  // Validate entire form
  const validateForm = () => {
    const errors: Record<string, string> = {};
    const form = formRef.current;
    if (!form) return errors;

    const fields = [
      "firstName",
      "lastName",
      "email",
      "mobile",
      "subject",
      "letter",
      "experience",
      "currentCTC",
      "expectedCTC",
      "noticePeriod",
    ];

    fields.forEach((field) => {
      const value = (form[field as keyof HTMLFormElement] as HTMLInputElement)
        ?.value.trim();
      const error = validateField(field, value || "");
      if (error) errors[field] = error;
    });

    return errors;
  };

  // 🛠️ Handle form submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");
    setButtonState("sending");

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setButtonState("idle");
      return;
    }

    setFormErrors({});
    setStatus("Sending...");

    if (formRef.current) {
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID as string;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string;

      const candidateTemplate =
        process.env.REACT_APP_TEMPLATE_AUTO_REPLY as string;
      const internalTemplate =
        process.env.REACT_APP_TEMPLATE_INTERNAL as string;

      // Send Auto-Reply + Internal Notification
      Promise.all([
        emailjs.sendForm(serviceID, candidateTemplate, formRef.current!, publicKey),
        emailjs.sendForm(serviceID, internalTemplate, formRef.current!, publicKey),
      ])
        .then(() => {
          setStatus("✅ Application sent successfully!");
          setButtonState("success");
          formRef.current?.reset();
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
          setStatus("❌ Failed to send application. Please try again.");
          setButtonState("failed");
        });
    }
  };

  // Button text & style
  const getButtonProps = () => {
    switch (buttonState) {
      case "sending":
        return { text: "Sending...", disabled: true, className: "btn-sending" };
      case "failed":
        return { text: "Retry", disabled: false, className: "btn-failed" };
      case "success":
        return {
          text: "Application Sent",
          disabled: true,
          className: "btn-success",
        };
      default:
        return {
          text: "Submit Application",
          disabled: false,
          className: "btn-default",
        };
    }
  };

  const { text, disabled, className } = getButtonProps();

  return (
    <>
      <Banner
        background={"/media/hero-bg.png"}
        title={"Join Our Team"}
        description={
          "Take the next step in your career with us. Apply today and become part of a team that values innovation, growth, and collaboration."
        }
      />

      <div className="container my-10 flex-row align-start wrap">
        {/* Left Side - Job Details */}
        {selectedJob && (
          <div className="job-details">
            {selectedJob.keySkills?.length > 0 && (
              <div className="job-keyskills">
                <h3>Key Skills</h3>
                <div className="chips">
                  {selectedJob.keySkills.map((skill, index) => (
                    <span key={index} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {selectedJob.responsibilities?.length > 0 && (
              <div className="job-section">
                <h3>Responsibilities</h3>
                <ul>
                  {selectedJob.responsibilities.map((resp, index) => (
                    <li key={index}>{resp}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedJob.skills?.length > 0 && (
              <div className="job-section">
                <h3>Skills</h3>
                <ul>
                  {selectedJob.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Right Side - Form */}
        <form className="apply-form" ref={formRef} onSubmit={handleSubmit}>
          <div className="flex-row">
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                onChange={handleFieldChange}
              />
              {formErrors.firstName && (
                <p className="error-text">{formErrors.firstName}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleFieldChange}
              />
              {formErrors.lastName && (
                <p className="error-text">{formErrors.lastName}</p>
              )}
            </div>
          </div>

          <div className="flex-row">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleFieldChange}
              />
              {formErrors.email && (
                <p className="error-text">{formErrors.email}</p>
              )}
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile"
                maxLength={10}
                inputMode="numeric"
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, "");
                }}
                onChange={handleFieldChange}
              />
              {formErrors.mobile && (
                <p className="error-text">{formErrors.mobile}</p>
              )}
            </div>
          </div>

          {/* Extra Job Form Fields */}
          <div className="flex-row">
            <div>
              <input
                type="text"
                name="experience"
                placeholder="Total Experience (in years)"
                onChange={handleFieldChange}
              />
              {formErrors.experience && (
                <p className="error-text">{formErrors.experience}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="currentCTC"
                placeholder="Current CTC"
                onChange={handleFieldChange}
              />
              {formErrors.currentCTC && (
                <p className="error-text">{formErrors.currentCTC}</p>
              )}
            </div>
          </div>

          <div className="flex-row">
            <div>
              <input
                type="text"
                name="expectedCTC"
                placeholder="Expected CTC"
                onChange={handleFieldChange}
              />
              {formErrors.expectedCTC && (
                <p className="error-text">{formErrors.expectedCTC}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="noticePeriod"
                placeholder="Notice Period"
                onChange={handleFieldChange}
              />
              {formErrors.noticePeriod && (
                <p className="error-text">{formErrors.noticePeriod}</p>
              )}
            </div>
          </div>

          <Dropdown
            name="subject"
            defaultValue={defaultSubject}
            required={false}
            onChange={(value: string) => {
              const foundJob = jobsData.find((j) => j.title === value);
              setSelectedJob(foundJob || null);

              const error = validateField("subject", value);
              setFormErrors((prev) => {
                const newErrors = { ...prev };
                if (error) newErrors.subject = error;
                else delete newErrors.subject;
                return newErrors;
              });
            }}
          />
          {formErrors.subject && (
            <p className="error-text">{formErrors.subject}</p>
          )}

          <div>
            <textarea
              name="letter"
              placeholder="Cover Letter"
              rows={5}
              onChange={handleFieldChange}
            ></textarea>
            {formErrors.letter && (
              <p className="error-text">{formErrors.letter}</p>
            )}
          </div>

          {status && !status.includes("Sending") && (
            <p
              className={`status-text ${
                status.includes("✅") ? "success" : "error"
              }`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            className={`cta-btn full-width ${className}`}
            disabled={disabled}
          >
            {text}
          </button>
        </form>
      </div>
    </>
  );
};

export default JobForm;
