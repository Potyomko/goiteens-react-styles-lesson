import styled from 'styled-components';

export const RecipeText = styled.h2`
    line-height: 1.5;
    padding: 10px 20px;
    color: #000;
    display: flex;
    justify-content: center;
`
export const RecipeImage = styled.img`
    margin: 20px 0px 0px 27px;
`
export const RecipeIcons = styled.ul`
    display: flex;
    justify-content: space-around;
    border-radius: 30px;
    margin: 42px;
    margin-bottom: 10px;
    width: 415px;
    height: 72px;
    padding: 5px;
    align-items: center;
    background-color: #fff;
`
export const RecipeCard = styled.div`
    background-color: rgb(215, 207, 201);
    width: 500px;
    padding: 30px;
    margin: 19px;
`
export const RecipeDifficultyDiv = styled.div`
    width: 445px;
    margin: 39px 0px -6px 28px;
    height: 147px;
    border-radius: 30px;
    background-color: white;
`
export const RecipeDifficultyText = styled.h2`
    padding: 26px;  
`
export const RecipeDifficultyLi = styled.li`
    border-radius: 10px;
    background-color: ${({ selected, theme }) => {
    console.log(selected);
    return selected ? theme.colors.select : theme.colors.bgColorR
    }};
    padding: 9px 25px 9px 23px;
`
export const RecipeDifficultyUl = styled.ul`
    display: flex;
    justify-content: space-around;
`