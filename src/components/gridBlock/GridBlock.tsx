import React from "react";
import "./GridBlock.scss";
import { useNavigate } from "react-router-dom";

interface GridItem {
  id: number;
  title: string;
  img?: string;
  description: string;
}

interface GridBlockProps {
  heading: string;
  subText: string;
  items: GridItem[];
  navigateto?: string;
  titleAnimation?: string;
  gridAnimation?: string;
}

const GridBlock: React.FC<GridBlockProps> = ({
  heading,
  subText,
  items,
  navigateto,
  titleAnimation = "fade-up",
  gridAnimation = "fade-up",
}) => {
  const navigate = useNavigate();
  const handleNavigate = (title: string) => {
    const slug = title.toLowerCase().replace(/[\s/]+/g, "-");

    navigate(navigateto + slug);
  };

  return (
    <div className="container grid-container text-center gap-50 py-40">
      {/* Title + Subtitle */}
      {(heading || subText) && (
        <div className="title flex-col gap-16" data-aos={titleAnimation}>
          {heading && <h3 className="heading3 empty">{heading}</h3>}
          {subText && <p className="text empty">{subText}</p>}
        </div>
      )}

      {/* Items Grid */}
      <div
        className="grid_wrapper"
        data-aos={gridAnimation}
        data-aos-delay="50"
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={
              item.img
                ? ({ "--card-bg": `url(${item.img})` } as React.CSSProperties)
                : undefined
            }
            className="grid_card flex-col gap-16"
          >
            {item.img && (
              <img
                className="grid-img"
                src={item.img}
                alt={item.title}
                height={100}
                width={100}
              />
            )}
            <h4 className="text f-18 bold text-left">{item.title}</h4>
            <p className="text text-left">{item.description}</p>
            {navigateto && (
              <button
                className="cta-btn"
                onClick={() => handleNavigate(item.title)}
              >
                View More
                <img
                  src="../../../../media/icons/arrow-up-right.svg"
                  alt="arrow-up"
                  width="18"
                  height="18"
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridBlock;
