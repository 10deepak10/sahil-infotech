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
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
      case "message":
        return value.trim() ? "" : "Message is required";
      default:
        return "";
    }
  };

  // Handle individual field changes
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

  //  Validate full form before submit
  const validateForm = () => {
    const errors: Record<string, string> = {};
    const form = formRef.current;
    if (!form) return errors;

    const firstName = (form.firstName as HTMLInputElement).value.trim();
    const lastName = (form.lastName as HTMLInputElement).value.trim();
    const email = (form.email as HTMLInputElement).value.trim();
    const mobile = (form.mobile as HTMLInputElement).value.trim();
    const subject = (form.subject as HTMLInputElement).value.trim();
    const message = (form.message as HTMLTextAreaElement).value.trim();

    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) errors.email = "Email is required";
    if (!mobile) {
      errors.mobile = "Mobile is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!subject) errors.subject = "Please select a job";
    if (!message) errors.message = "Message is required";

    // File validation
    if (!selectedFile) {
      errors.attachment = "Resume file is required";
    } else {
      const allowedTypes = [
        "application/pdf",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(selectedFile.type)) {
        errors.attachment = "Only PDF or DOCX files are allowed";
      } else if (selectedFile.size > 2 * 1024 * 1024) {
        errors.attachment = "File size must be less than 2MB";
      }
    }

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
      emailjs
        .sendForm(
          process.env.REACT_APP_EMAILJS_SERVICE_ID as string,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string,
          formRef.current!,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            setStatus("✅ Application sent successfully!");
            setButtonState("success");
            formRef.current?.reset();
            setSelectedFile(null);
          },
          (error) => {
            console.error(error);
            setStatus("❌ Failed to send application. Please try again.");
            setButtonState("failed");
          }
        );
    }
  };

  // Button text & style based on state
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

          <Dropdown
            name="subject"
            defaultValue={defaultSubject}
            required={false}
            onChange={(value: string) => {
              const foundJob = jobsData.find((j) => j.title === value);
              setSelectedJob(foundJob || null);

              // validate subject dynamically
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
              name="message"
              placeholder="Your message"
              rows={5}
              onChange={handleFieldChange}
            ></textarea>
            {formErrors.message && (
              <p className="error-text">{formErrors.message}</p>
            )}
          </div>

          {/* File Upload */}
          <div className="file-upload">
            {!selectedFile ? (
              <label className="upload-label">
                Upload Resume
                <input
                  type="file"
                  name="attachment"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const allowedTypes = [
                        "application/pdf",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                      ];
                      const maxSize = 2 * 1024 * 1024;

                      if (!allowedTypes.includes(file.type)) {
                        setFormErrors((prev) => ({
                          ...prev,
                          attachment: "Only PDF or DOCX files are allowed",
                        }));
                        e.target.value = "";
                        return;
                      }
                      if (file.size > maxSize) {
                        setFormErrors((prev) => ({
                          ...prev,
                          attachment: "File size must be less than 2MB",
                        }));
                        e.target.value = "";
                        return;
                      }

                      setSelectedFile(file);
                      setFormErrors((prev) => {
                        const newErrors = { ...prev };
                        delete newErrors.attachment;
                        return newErrors;
                      });
                    }
                  }}
                />
              </label>
            ) : (
              <div className="file-preview">
                <span className="file-name">{selectedFile.name}</span>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => {
                    setSelectedFile(null);
                    setFormErrors((prev) => ({
                      ...prev,
                      attachment: "Resume file is required",
                    }));
                  }}
                >
                  ❌
                </button>
              </div>
            )}
            {formErrors.attachment && (
              <p className="error-text">{formErrors.attachment}</p>
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
