import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

const fetchFriends = () => {
  return axios.get('http://localhost:4000/friends')
}
const ParallelQuriesPage = () => {
  const {data: superHeroes} = useQuery(['super-heroes'], fetchSuperHeroes)
  const {data: friends} = useQuery(['friends'], fetchFriends)
  return (
    <div>
      {superHeroes?.data.map((hero) => <h1 key={hero.id}>{hero.name}</h1>)}
      {friends?.data.map((friend) => <h3 key={friend.name}>{friend.name}</h3>
      )}

    </div>
  )
}

export default ParallelQuriesPage