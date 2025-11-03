import NetflixSeries from "./components/NetflixSeries"
// import './components/Netflix.css'
import './components/Netflix.module.css'
export const App = () => {
  return (
    <section className="container">
      <h2 className="card-heading">List of Best Series</h2>
   <NetflixSeries/>
   </section>
  ) 
}