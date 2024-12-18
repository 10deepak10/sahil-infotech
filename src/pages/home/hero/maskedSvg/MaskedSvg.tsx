type MaskedSVGProps = {
    imageUrl: string;
  };
  
  export const MaskedSVG = ({ imageUrl }: MaskedSVGProps) => (
    <div className="svg-container">
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        className="masked-svg"
      >
        <defs>
          <mask id="custom-mask">
            <path
              d="
                M100,50
                Q200,20 400,50
                L700,150
                Q750,200 600,400
                L300,550
                Q150,500 100,300
                Z
              "
              fill="white"
              transform="rotate(10, 400, 300)"
            />
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="800"
          height="600"
          fill="url(#image-pattern)"
          mask="url(#custom-mask)"
        />
        <defs>
          <pattern
            id="image-pattern"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={imageUrl}
              x="0"
              y="0"
              width="800"
              height="600"
            />
          </pattern>
        </defs>
      </svg>
    </div>
  );
  