import Card from "./Card";
import './css/header.css'
export default function ImgContainer({ images }) {
  return (
    <div className="containerimg">
        {images.map((image) => (
          <Card
            key={image.id}
            img={image.urls.small}
            title={image.alt_description}
            link= {image.urls.full}
          />
        ))}
    </div>
  );
}
