import { useSuperHeroesData } from '../hooks/useSuperHeroesData';

const RQSuperHerouspage = () => {
  const onSuccess = (data) => {
    console.log('perform side effect after data fetching', data)
  }

  const onError = (error) => {
    console.log('perform side effect after encountering error', error)
  }

   

  const { isLoading, data, error, isError, isFetching, refetch } = useSuperHeroesData(onSuccess, onError)

  if ( isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
 
  if (isError) {
    return <h2>{error.message}</h2>
  }
  console.log(isLoading, isFetching)
  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch Heroes</button>
      {/* {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
    })} */}
      {data.map(heroName => {
        return <h1 key={heroName}>{heroName}</h1>
      })}
    </>
  )
};

export default RQSuperHerouspage;
