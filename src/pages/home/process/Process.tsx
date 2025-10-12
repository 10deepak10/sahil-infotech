import React from "react";
import "./Process.scss";

interface ProcessStep {
  step: number;
  title: string;
  img?: string;
  description: string;
}

interface ProcessProps {
  ourProcess: ProcessStep[];
  arrowOrder?: string[]; // e.g. ["→", "→", "_", "←", "↓"]
}

const Process: React.FC<ProcessProps> = ({ ourProcess, arrowOrder = [] }) => {
  // ✅ Detect desktop view
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Reverse data after 3rd item on desktop
  const processedData = React.useMemo(() => {
    if (!isDesktop) return ourProcess;
    const firstHalf = ourProcess.slice(0, 3);
    const secondHalf = ourProcess.slice(3).reverse();
    return [...firstHalf, ...secondHalf];
  }, [ourProcess, isDesktop]);

  // ✅ Helper: map symbol → image path
  const getArrowImage = (symbol: string | undefined) => {
    switch (symbol) {
      case "→":
        return "/media/images/arrow-right.png";
      case "←":
        return "/media/images/arrow-left.png";
      case "↓":
        return "/media/images/arrow-bottom.png";
      default:
        return null;
    }
  };

  return (
    <div className="process_container">
      <div className="container text-center gap-50 py-40">
        <div className="title flex-col gap-16" data-aos="fade-up">
          <h3 className="heading3">Our Way of Working</h3>
          <p className="sub-title">
            We implement result-driven strategies tailored to meet your business
            needs and goals. We offer solutions designed to empower your
            business and help you achieve your desired outcomes.
          </p>
        </div>

        <div className="process_wrapper" data-aos="fade-up" data-aos-delay="50">
          {processedData.map((item, index) => {
            const arrowSymbol = arrowOrder[index];
            const arrowImg = getArrowImage(arrowSymbol);

            const shouldRenderArrow =
              (arrowImg || arrowSymbol === "_") &&
              (index < processedData.length - 1 || arrowSymbol === "↓");

            return (
              <React.Fragment key={item.step}>
                {/* CARD */}
                <div
                  className="process_card flex-col gap-16"
                  style={
                    { "--card-bg": `url(${item.img || ""})` } as React.CSSProperties
                  }
                >
                  {item.img ? (
                    <img src={item.img} alt={item.title} height={100} width={100} />
                  ) : (
                    <div className="fallback-number">{item.step}</div>
                  )}
                  <h4 className="text f-18 bold">{item.title}</h4>
                  <p className="text">{item.description}</p>
                </div>

                {/* ARROW / SPACER */}
                {shouldRenderArrow && (
                  <div
                    className={`card-flow ${
                      arrowSymbol === "↓" ? "vertical-flow" : ""
                    }`}
                  >
                    {arrowImg ? (
                      <img
                        src={arrowImg}
                        alt={`arrow-${arrowSymbol}`}
                        height={100}
                        width={100}
                      />
                    ) : (
                      // spacer for "_"
                      <div className="arrow-spacer" />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Process;
