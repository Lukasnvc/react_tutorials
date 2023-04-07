import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const fetchSuperHero = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}
const DynamicParallelPage = ({ heroIds }) => {
  
  const queryResults = useQueries(
    heroIds.map((id) => ({
      queryKey: ['super-hero', id],
      queryFn: () => fetchSuperHero(id),
    }))
  );
  console.log( heroIds)
  return (
    <div>DynamicParallel.page</div>
  )
}

export default DynamicParallelPage