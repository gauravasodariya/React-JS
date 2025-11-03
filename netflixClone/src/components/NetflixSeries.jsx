import seriesData from '../api/seriesData.json'
import SeriesCard from './SeriesCard'
const NetflixSeries = () =>{
  return (
    <ul className="grid-three--cols">{seriesData.map((currElement) => (
            <SeriesCard key={currElement.id} currElement={currElement}/>
        ))}
    </ul>
  )}
export default NetflixSeries;



