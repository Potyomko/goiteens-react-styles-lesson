import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';
import { RecipeText } from './Recipe.styled';
import { RecipeIcons } from 'components/Recipe/Recipe.styled'
import { RecipeCard } from './Recipe.styled';
import { RecipeLi } from './Recipe.styled';


export function Recipe ({name, time, servings, calories, image}){
    return <RecipeCard>
        <RecipeText>{name}</RecipeText>
        <img src={image} alt="" width="450" />
        <RecipeIcons>
            <RecipeInfo 
                text={`${time} min`} 
                icon={BsAlarm}/>
            <RecipeInfo 
                text={`${servings} servings`} 
                icon={HiOutlineChartPie}/>
            <RecipeInfo 
                text={`${calories} calories`} 
                icon={HiOutlineChartBar}/>
        </RecipeIcons>
    </RecipeCard>
}