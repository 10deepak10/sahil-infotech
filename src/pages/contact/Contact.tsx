import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import "./Contact.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../../components/Banner/Banner";
import ReviewSlider from "../../components/reviewSlider/ReviewSlider";
import GridBlock from "../../components/gridBlock/GridBlock";
import Dropdown from "../../components/dropdown/Dropdown";
import serviceData from "../../db/services.json";
import { useSearchParams, useNavigate } from "react-router-dom";

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  service: string;
};

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });

  const [errors, setErrors] = useState<FormFields>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "",
  });
  const guideline = [
    {
      id: 1,
      title: "Connect with Us",
      img: "/media/icons/contact.svg",
      description:
        "Reach out to us to discuss your project vision and start the journey towards innovative solutions and impactful results.",
    },
    {
      id: 2,
      title: "Requirement Analysis",
      img: "/media/icons/vector.svg",
      description:
        "We’ll analyze your requirements in detail, ensuring we understand your goals and craft a tailored plan for success.",
    },
    {
      id: 3,
      title: "Final Project Estimate",
      img: "/media/icons/clock.svg",
      description:
        "Receive a comprehensive project estimate based on detailed analysis, outlining the scope, costs, and timelines for your approval.",
    },
  ];

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
      service: "",
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
    if (!formData.service.trim())
      newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const subject = `Message from ${formData.firstName} ${formData.lastName}`;
      const body = `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nMessage:\n${formData.message}`;

      const mailtoLink = `mailto:info@sahilinfotech.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        service: "",
      });
    }
  };
  useEffect(() => {
    const serviceFromQuery = searchParams.get("service");
    if (serviceFromQuery) {
      // Find exact service title from your data
      const matchedService = serviceData.find(
        (s) =>
          s.title.toLowerCase().replace(/[\s/]+/g, "-") ===
          serviceFromQuery.toLowerCase()
      );
      if (matchedService) {
        setFormData((prev) => ({ ...prev, service: matchedService.title }));
      }
    }
  }, [searchParams]);
  return (
    <>
      <Banner
        background={"/media/hero-bg.png"}
        title={"We Are Open to Talk"}
        description={
          "Let's start a conversation together, we'll create the solutions that drive your business forward."
        }
      />
      <div className="container contact-main-container gap-80 py-40">
        <div className="flex gap-40 strech-content mob-reverse">
          <div className="contact-card-container">
            {!formData.service && (
              // Default block if no service is selected
              <div className="flex-col gap-30 full-height">
                <a
                  href="mailto:info@sahilinfotech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex"
                  data-aos="fade-right"
                >
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
                    <p className="description">info@sahilinfotech.com</p>
                  </div>
                </a>

                <a
                  href="tel:+919016738858"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex"
                  data-aos="fade-right"
                >
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
                    <p className="description">+91 90167-38858</p>
                  </div>
                </a>

                <a
                  href="https://maps.app.goo.gl/Nm1UxaMKeAPGe7oW9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card flex"
                  data-aos="fade-right"
                >
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
                    <p className="description">Surat, Gujarat, India</p>
                  </div>
                </a>
              </div>
            )}

            {formData.service && (
              <div className="contact-service-data" key={formData.service}>
                <GridBlock
                  gridAnimation="fade-right"
                  heading={""}
                  subText=""
                  navigateto={"/service/"}
                  items={[
                    serviceData.find(
                      (item) => item.title === formData.service
                    ) as any,
                  ]}
                />
              </div>
            )}
          </div>

          <form
            className="flex-col contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
          >
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
              <div className="input-filed p-relative full-width">
                <Dropdown
                  name="service"
                  value={formData.service}
                  data={serviceData}
                  required={false}
                  onChange={(value: string) => {
                    setFormData((prev) => ({ ...prev, service: value }));
                    setErrors((prev) => ({ ...prev, service: "" }));
                    const param = value.toLowerCase().replace(/[\s/]+/g, "-");
                    setSearchParams({ service: param });
                  }}
                />
                {errors.service && (
                  <small className="error">{errors.service}</small>
                )}
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
            <button type="submit" className="cta-btn f-14 bold uppercase">
              Submit
            </button>
          </form>
        </div>
        <ReviewSlider />

        {/* Google Map Embed */}
        <div className="container align-start gap-12" data-aos="fade-up">
          <h6 className="heading6 text-green">Google Maps</h6>
          <p className="description">
            Found Us on <strong className="text-green">Google</strong> Maps
          </p>

          <div className="map-container" data-aos="fade-up">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4620328626966!2d72.8824073753309!3d21.213519481407026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f0e70d83f2d%3A0xc013dea3bcef1fe9!2sSahil%20Infotech!5e0!3m2!1sen!2sin!4v1758154147584!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <GridBlock heading="So What Next?" subText="" items={guideline} />
      </div>
    </>
  );
}
