import React, { useState, useRef } from "react";
import "./FAQ.scss";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqComponentProps {
  faqs: FaqItem[];
}

const FAQ: React.FC<FaqComponentProps> = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<Array<HTMLDivElement | null>>([]);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container" data-aos="fade-up" data-aos-delay="50">
      <h1 className="heading3 text-center">Frequently asked questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div className="faq-question" onClick={() => toggleFaq(index)}>
            {faq.q}
            <span className="faq-icon">
              {activeIndex === index ? "−" : "+"}
            </span>
          </div>
          <div
            ref={(el) => (answerRefs.current[index] = el)}
            className="faq-answer"
            style={{
              maxHeight:
                activeIndex === index
                  ? `${answerRefs.current[index]?.scrollHeight}px`
                  : "0px",
            }}
          >
            <div className="faq-answer-content">{faq.a}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
