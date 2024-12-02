import React, { useState } from "react";
import "./Contact.scss";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  type FormFields = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
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
    <div className="container">
      <div className="flex">
        <div className="flex-col">
          <div className="contact-card flex">
            <div className="icon-circle"></div>
            <div className="flex-col">
              <h6 className="heading6">Email Us</h6>
              <p className="f-18">info@demo.com</p>
            </div>
          </div>
        </div>
        <form className="flex-col" onSubmit={handleSubmit}>
          <h3 className="heading3">Send Message</h3>

          <div className="contact-field">
            <div className="flex">
              <div className="input-filed">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
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
                />
                {errors.lastName && (
                  <small className="error">{errors.lastName}</small>
                )}
              </div>
            </div>
            <div className="flex">
              <div className="input-filed">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
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
                />
                {errors.phone && (
                  <small className="error">{errors.phone}</small>
                )}
              </div>
            </div>

            <div className="flex">
              <div className="input-filed">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <small className="error">{errors.message}</small>
                )}
              </div>
            </div>
          </div>
          <button type="submit" className="circle-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <h3 className="heading3">Our Office Location</h3>
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
