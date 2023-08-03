import styled from 'styled-components';

export const AlertText = styled.p`
    line-height: 1.5;
    padding: 10px 20px;
    background-color: ${({type, theme})=>{
        switch (type){
            case "error": 
                return theme.colors.error;
            case 'warning':
                return theme.colors.warning;
            case 'success':
                return theme.colors.success;
            default:
                return theme.colors.grey;
        }
    }};
    color: #fff;
`


// або просто винести в функцію і в властивості написати ${назву функції}
//colors: ${({theme})=> theme.colors.назва функції}