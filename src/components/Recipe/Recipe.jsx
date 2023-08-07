import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';
import { RecipeText } from './Recipe.styled';
import { RecipeIcons } from 'components/Recipe/Recipe.styled'
import { RecipeCard } from './Recipe.styled';
import { RecipeDifficulty } from './RecipeDifficulty';
import { RecipeImage } from './Recipe.styled';
import PropTypes from 'prop-types'


export function Recipe ({name, time, servings, calories, image, difficulty}){
    return <RecipeCard>
        <RecipeText>{name}</RecipeText>
        <RecipeImage src={image} alt="" width="450" />
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
        <RecipeDifficulty difficulty={difficulty}/>
    </RecipeCard>
}

Recipe.propTypes = {
    RecipeText: PropTypes.string.isRequired,
    RecipeIcons: PropTypes.elementType.isRequired,
    RecipeDifficulty: PropTypes.elementType.isRequired,
}