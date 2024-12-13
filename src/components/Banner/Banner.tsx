import './Banner.scss';
import PropTypes from 'prop-types';

interface BannerProps {
  background: string;
  title: string;
  description: string;
}

export default function Banner({ background, title, description }: BannerProps) {
  return (
    <div 
      className="container strech-content text-center gap-50 py-40" 
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="title flex-col align-center gap-16" data-aos="fade">
        <h3 className="heading3">{title}</h3>
        <p className="text">
          {description}
        </p>
      </div>
    </div>
  );
}
