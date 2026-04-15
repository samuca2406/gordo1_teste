type CardProps = {
  title: string;
  text: string;
  image: string;
  link: string;
};

export function Card({ title, text, image, link }: CardProps) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">Ouvir</a>
      </div>
    </div>
  );
}