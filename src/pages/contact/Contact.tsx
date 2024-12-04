import React, { useState } from "react";
import "./Contact.scss";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors on change
  };

  const validate = (): boolean => {
    const newErrors: FormFields = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be numeric.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      // Simulate API call
      alert("Message Sent Successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <div className="container gap-80 py-80">
      <div className="flex gap-40">
        <div className="flex-col gap-30 contact-card-container">
          <div className="contact-card flex">
            <div className="icon-circle">
              <img
                src="media/icons/sms.svg"
                alt="call"
                width="24"
                height="24"
              />
            </div>
            <div className="flex-col info">
              <h6 className="heading6">Email Us</h6>
              <p className="description">info@demo.com</p>
            </div>
          </div>
          <div className="contact-card flex">
            <div className="icon-circle">
              <img
                src="media/icons/call.svg"
                alt="call"
                width="24"
                height="24"
              />
            </div>
            <div className="flex-col info">
              <h6 className="heading6">Our hotline number</h6>
              <p className="description">+91 987635241</p>
            </div>
          </div>
          <div className="contact-card flex">
            <div className="icon-circle">
              <img
                src="media/icons/location.svg"
                alt="call"
                width="24"
                height="24"
              />
            </div>
            <div className="flex-col info">
              <h6 className="heading6">Found Us</h6>
              <p className="description">
                Adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in
                potenti
              </p>
            </div>
          </div>
        </div>
        <form className="flex-col contact-form" onSubmit={handleSubmit}>
          <h3 className="heading6">Send Message</h3>

          <div className="contact-field">
            <div className="flex field-section">
              <div className="input-filed">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "error-border" : ""}
                />
                {errors.firstName && (
                  <small className="error">{errors.firstName}</small>
                )}
              </div>

              <div className="input-filed">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "error-border" : ""}
                />
                {errors.lastName && (
                  <small className="error">{errors.lastName}</small>
                )}
              </div>
            </div>
            <div className="flex field-section">
              <div className="input-filed">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error-border" : ""}
                />
                {errors.email && (
                  <small className="error">{errors.email}</small>
                )}
              </div>

              <div className="input-filed">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (
                      !/[0-9]/.test(e.key) && // Allow numbers
                      e.key !== "Backspace" && // Allow Backspace
                      e.key !== "Delete" && // Allow Delete
                      e.key !== "ArrowLeft" && // Allow Left Arrow
                      e.key !== "ArrowRight" // Allow Right Arrow
                    ) {
                      e.preventDefault();
                    }
                  }}
                  className={errors.phone ? "error-border" : ""}
                />
                {errors.phone && (
                  <small className="error">{errors.phone}</small>
                )}
              </div>
            </div>

            <div className="flex field-section">
              <div className="input-filed">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? "error-border" : ""}
                ></textarea>
                {errors.message && (
                  <small className="error">{errors.message}</small>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="cta-btn radius-full f-18 bold">
            Submit
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093156!2d144.9556518157605!3d-37.81732397975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce8b0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631569862345!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
