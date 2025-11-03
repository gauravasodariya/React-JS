import { EventHandling } from './EventHandling';
import styles from './Netflix.module.css'

const SeriesCard = ({ currElement }) => {
  const { imageUrl, name, rating, description, genre, watchUrl } = currElement;

  const ratingClass = rating > 8 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={imageUrl} width="20%" height="20%" alt={name} />
      </div>

      <div className={styles.cardContent}>
        <h2>Name : {name}</h2>
        <h3>
          Rating :
          <span className={ratingClass}>
            {rating}
          </span>
        </h3>
        <p>Summary : {description}</p>
        <p className="text-blue-700">Genre : {genre}</p>
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
/* inline style in react specified using javascript object {}. 
    most numeric values ,you need to specify as a string because we write css as key-value(object) */

    