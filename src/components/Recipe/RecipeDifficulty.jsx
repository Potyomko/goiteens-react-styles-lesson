import { RecipeDifficultyLi } from './Recipe.styled';
import { RecipeDifficultyDiv } from './Recipe.styled';
import { RecipeDifficultyText } from './Recipe.styled';
import { RecipeDifficultyUl } from './Recipe.styled';
import PropTypes from 'prop-types';

export const RecipeDifficulty = ({difficulty}) => {
    console.log(difficulty);
    return (
        <RecipeDifficultyDiv>
            <RecipeDifficultyText>Difficulty</RecipeDifficultyText>
            <RecipeDifficultyUl>
                <RecipeDifficultyLi selected = {difficulty === 0}>Easy</RecipeDifficultyLi>
                <RecipeDifficultyLi selected = {difficulty === 1}>Medium</RecipeDifficultyLi>
                <RecipeDifficultyLi selected = {difficulty === 3}>Hard</RecipeDifficultyLi>
            </RecipeDifficultyUl>
        </RecipeDifficultyDiv>
    )
}
RecipeDifficulty.propTypes = {
    type: PropTypes.oneOf([0, 1, 3]),
    RecipeDifficultyText: PropTypes.string.isRequired,
    RecipeDifficultyLi: PropTypes.string.isRequired,
}