import "./Process.scss";

const Process = () => {
  const ourProcess = [
    {
      id: 1,
      title: "Understand & Recommend",
      img: "/media/icons/human-resources.svg",
      description:
        "We constantly aspire to break boundaries by understanding our clients' requirements and striving to deliver tailored solutions that meet their needs, helping them achieve success with scalable, efficient, and innovative strategies.",
    },
    {
      id: 2,
      img: "/media/images/arrow-right.png",
    },
    {
      id: 3,
      title: "Strategy & Planning",
      img: "/media/icons/web-development.svg",
      description:
        "Understanding the challenges organizations face, we are committed to equipping our clients with scalable, efficient, and innovative computing services through the application of the best strategies.",
    },
    {
      id: 4,
      img: "/media/images/arrow-right.png",
    },
    {
      id: 5,
      title: "Design & Develop",
      img: "/media/icons/vector.svg",
      description:
        "With a team of highly skilled designers and developers, we meet the criteria for UX/UI software design, API integrations, backend development, and frontend development (Angular, React, Vue.js, etc.). Our excellent problem solvers are dedicated to adding value to your organization.",
    },

    {
      id: 6,
      title: "Marketing Recommendation",
      img: "/media/icons/marketing.svg",
      description: "Our experts leverage top marketing strategies and tactics to maximize your marketing investment, ensuring the highest return by creating targeted solutions that drive growth and achieve your business objectives effectively.",
    },
    {
      id: 7,
      img: "/media/images/arrow-left.png",
    },
    {
      id: 8,
      title: "Testing & Launch",
      img: "/media/icons/launch.svg",
      description: "Testing and validation are crucial. We have a dedicated team of testers who create test scenarios, catch regressions, and produce automated integration, unit, and UI tests.",
    },
    {
      id: 9,
      img: "/media/images/arrow-bottom.png",
    },
    // Add more projects as needed
  ];

  return (
    <div className="process_container">
      <div className="container text-center gap-50 py-40">
        <div className="title flex-col gap-16" data-aos="fade-up">
          <h3 className="heading3">Our Way of Working</h3>
          <p className="sub-title">
          We implement result-driven strategies tailored to meet your business needs and goals. We offer solutions designed to empower your business and help you achieve your desired outcomes.
          </p>
        </div>
        <div className="process_wrapper" data-aos="fade-up" data-aos-delay="50">
          {ourProcess.map((item) =>
            item.title ? (
              <div
                key={item.id}
                style={
                  { "--card-bg": `url(${item.img})` } as React.CSSProperties
                }
                className="process_card flex-col gap-16"
              >
                <img src={item.img} alt={item.title} height={100} width={100} />
                <h4 className="text f-18 bold">{item.title}</h4>
                <p className="text">{item.description}</p>
              </div>
            ) : (
              <div
                key={item.id}
                className={
                  item.id === 9 ? "card-flow align-start" : "card-flow"
                }
              >
                <img
                  src={item.img}
                  alt="Default placeholder"
                  height={100}
                  width={100}
                />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
