import "./Services.scss";

const Services = () => {
  const ourServices = [
    {
      id: 1,
      title: "Hire Dedicated Developer",
      img: "/media/icons/human-resources.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    {
      id: 2,
      title: "Web Development",
      img: "/media/icons/web-development.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    {
      id: 3,
      title: "UI/UX Design",
      img: "/media/icons/vector.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    {
      id: 4,
      title: "Mobile App Development",
      img: "/media/icons/coding.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    {
      id: 5,
      title: "Managed Support",
      img: "/media/icons/like.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    {
      id: 6,
      title: "E-commerce development",
      img: "/media/icons/shopping-cart.svg",
      description:
        "Lorem ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum sit sit hendrerit cras in potenti. Urna massa aliquam efficitur lectus class ridiculus condimentum. N",
    },
    // Add more projects as needed
  ];
  return (
    <div className="container process-container text-center gap-50 py-40">
      <div className="title flex-col gap-16" data-aos="fade-up">
        <h3 className="heading3">Our Core Services</h3>
        <p className="text">
          m ipsum odor amet, consectetuer adipiscing elit. Arcu sed vestibulum
          sit sit hendrerit cras in potenti
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
