import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Grid, CuisineCard, Card } from './styledComponents';
import { Link } from 'react-router-dom';

const Searched = () => {
  const [searched, setSearched] = useState([])
  let params = useParams()
  useEffect(() => {
    getSearched(params.search)
  },[params.search])

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
    const found = await data.json();
    setSearched(found.results)
}

  return (
    <Grid>
      {searched.map((item) => (
        <CuisineCard key={item.id}>
          <Link to={'/recipe/'+item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Link>
        </CuisineCard>
      ))}
    </Grid>
  );
}

export default Searched;
