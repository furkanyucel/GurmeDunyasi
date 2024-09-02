
const RecipeCard = ({foods}) => {

  const {imgUrl, title, description} = foods

  return (
    <div className='bg-white mt-10 border border-solid border-orange-500 flex flex-col justify-start w-1/5 p-2 rounded h-[370px] hover:scale-105'>
    <img className="w-[250px] h-[250px] object-cover rounded " src={imgUrl} alt="image" />
    <div className="mt-4">
    <h4 className="w-full text-sm font-semibold">{title}</h4>
    <p className="text-xs font-extralight">{description}</p>
    </div>
  </div>
  )
}

export default RecipeCard