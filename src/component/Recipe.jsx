import RecipeCard from './RecipeCard'
import { RecipeData } from "../Data/foodList.js"

const Recipe = () => {
  return (
<div className='flex justify-center items-start flex-wrap gap-x-4'>
  {
    RecipeData.map((foods) => (
      <RecipeCard key={foods.id} foods={foods} />
    ))
  }
</div>
  )
}

export default Recipe