import "./Services.scss";

const Services = () => {
  const ourServices = [
    {
      id: 1,
      title: "UI/UX Design",
      img: "/media/icons/vector.svg",
      description:
        "Transform your digital experience with our expert UI/UX design, crafting intuitive, visually captivating, and user-focused solutions that enhance engagement, drive satisfaction, and accelerate business growth.",
    },
    {
      id: 2,
      title: "Web Design & Development",
      img: "/media/icons/coding.svg",
      description:
        "Elevate your online presence with our exceptional web design and development services. We create visually stunning, user-friendly, and high-performance websites tailored to your brand, ensuring a seamless digital experience",
    },
    {
      id: 3,
      title: "Full-Stack Development",
      img: "/media/icons/web-development.svg",
      description:
        "Accelerate your business growth with our expert full-stack development, creating high-performance, scalable, and seamless websites that drive conversions, enhance user engagement, and ensure long-term success.",
    },
    {
      id: 4,
      title: "AI Services",
      img: "/media/icons/ai.svg",
      description:
        "Supercharge your business with our AI-powered solutions, driving intelligent automation, game-changing insights, and innovative strategies that enhance efficiency, fuel growth, and transform your future success.",
    },
    {
      id: 5,
      title: "DevOps Services",
      img: "/media/icons/infinity.svg",
      description:
        "Revolutionize your workflows with our advanced DevOps services, driving seamless automation, continuous integration, and scalable infrastructure that boosts efficiency, accelerates delivery, and ensures transformative business growth.",
    },
    {
      id: 6,
      title: "QA Testing",
      img: "/media/icons/testing.svg",
      description:
        "Ensure flawless performance with our premium QA testing, swiftly identifying issues, optimizing quality, and delivering bug-free, high-performance solutions that elevate user experience and drive extraordinary business growth.",
    },
    // Add more projects as needed
  ];
  return (
    <div className="container process-container text-center gap-50 py-40">
      <div className="title flex-col gap-16" data-aos="fade-up">
        <h3 className="heading3">Our Core Services</h3>
        <p className="text">
        Accelerate your business growth with our services, where design meets innovation and technology delivers excellence.
        </p>
      </div>
      <div className="services_wrapper" data-aos="fade-up" data-aos-delay="50">
        {ourServices.map((item) => (
          <div key={item.id} className="services_card flex-col gap-16">
            <img src={item.img} alt={item.title} height={100} width={100} />
            <h4 className="text f-18 bold">{item.title}</h4>
            <p className="text text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
