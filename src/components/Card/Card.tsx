import { CardProps } from '@/types/index';

const Card = ({ title, text, imageUrl, children }: CardProps) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {imageUrl && <img src={imageUrl} className="card-img-top" alt={title || 'card image'} />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        {text && <p className="card-text">{text}</p>}
        {children}
      </div>
    </div>
  );
};

export default Card;
