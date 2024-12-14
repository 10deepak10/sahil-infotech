import "./Process.scss";

const Process = () => {
  const ourProcess = [
    {
      id: 1,
      title: "Understand & Recommend",
      img: "/media/icons/human-resources.svg",
      description:
        "We constantly aspire to break boundaries to and we refer you, linux vps hosting india server provider in india understand the requirements of the clients and also rephrase for better results.",
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
        "While understanding the challenges that an organization faces. and we refer you, linux vps hosting india server provider in india We strive to equip our clients with scalable, efficient, and innovative computing services with the best strategy applied.",
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
        "With the highly skilled designer and developer they meet the criteria of UX/UI Software and we refer you, linux vps hosting india server provider in india development, API Integrations, Backend development, Frontend development (Angular, React, Value, Js)etc. with excellent problem solvers that will add value to your organization.",
    },

    {
      id: 6,
      title: "Marketing Recommendation",
      img: "/media/icons/marketing.svg",
      description:
        "Our expert leverage the best marketing and we refer you, linux vps hosting india server provider in india strategies and tactics to create the highest return on your marketing investment.",
    },
    {
      id: 7,
      img: "/media/images/arrow-left.png",
    },
    {
      id: 8,
      title: "Testing & Launch",
      img: "/media/icons/launch.svg",
      description:
        "Testing and validation is also crucial. We and we refer you, linux vps hosting india server provider in india have dedicated tester, who will create test scenarios, catch regressions and produce automated integration, as well as unit and UI tests.",
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
          We implement result-driven strategies tailored to your business needs and goals. As a reliable Linux VPS hosting provider in India, we offer solutions designed to empower your firm and help you achieve your desired outcomes.
          </p>
        </div>
        <div className="process_wrapper" data-aos="fade-up" data-aos-delay="50">
          {ourProcess.map((item) =>
            item.title ? (
              <div key={item.id} className="process_card flex-col gap-16">
                <img src={item.img} alt={item.title} height={100} width={100} />
                <h4 className="text f-18 bold">{item.title}</h4>
                <p className="text">{item.description}</p>
              </div>
            ) : (
              <div
                key={item.id}
                className={item.id === 9 ? "card-flow align-start" : "card-flow"}
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
