import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, RecipeBtn, Info } from "./styledComponents";

const Recipe = () => {
  let params = useParams()
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const detailData = await data.json()
    setDetails(detailData);
  }
  useEffect(() => {
    fetchDetails()
  }, [params.name])
  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <RecipeBtn className={activeTab === 'instructions' ? 'active' : ''} onClick={()=> setActiveTab('instructions')}>Instructions</RecipeBtn>
        <RecipeBtn className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</RecipeBtn>
        {activeTab === 'instructions' && <div>
          <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>}
        {activeTab === 'ingredients' && <ul>
          {details.extendedIngredients.map((ingredient) => 
            <li key={ingredient.id}>{ingredient.original}</li>
          )}
        </ul>}
        
      </Info>
    </DetailWrapper>
  );
}

export default Recipe;
