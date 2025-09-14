import React from "react";
import './GridBlock.scss'

interface GridItem {
  id: number;
  title: string;
  img: string;
  description: string;
}

interface GridBlockProps {
  heading: string;
  subText: string;
  items: GridItem[];
}

const GridBlock: React.FC<GridBlockProps> = ({ heading, subText, items }) => {
  return (
    <div className="container grid-container text-center gap-50 py-40">
      {/* Title + Subtitle */}
      <div className="title flex-col gap-16" data-aos="fade-up">
        <h3 className="heading3">{heading}</h3>
        <p className="text">{subText}</p>
      </div>

      {/* Items Grid */}
      <div className="grid_wrapper" data-aos="fade-up" data-aos-delay="50">
        {items.map((item) => (
          <div
            key={item.id}
            style={{ "--card-bg": `url(${item.img})` } as React.CSSProperties}
            className="grid_card flex-col gap-16"
          >
            <img src={item.img} alt={item.title} height={100} width={100} />
            <h4 className="text f-18 bold text-left">{item.title}</h4>
            <p className="text text-left">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBlock;
