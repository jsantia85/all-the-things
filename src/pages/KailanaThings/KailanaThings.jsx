import ThingCard from "../../components/ThingCard/ThingCard";

import { Link } from 'react-router-dom'

const KailanaThings = (props) => {
  return (
    <>
      <h1>Kailana's Things </h1>
      <Link to="/">Home</Link>

      {props.things.map((thing, idx) => 
        <ThingCard key={idx} thing={thing}/>
      )}
    </>
  )
}

export default KailanaThings