import {Alert} from './Alert/Alert'
import {GlobalStyle} from '../Global.styled'
import { Recipe } from './Recipe/Recipe';
import recipies from 'recipies';


export const App = () => {
  return (
    <>
      {recipies.map(({name, time, servings, calories, image}) => (
        <Recipe
          key={image}
          name={name}
          time={time}
          servings={servings}
          calories={calories}
          image={image}
        />
    
        ))
      }
        <GlobalStyle/>
        <Alert type='error'/>
        <Alert type='success'/>
        <Alert type='warning'/>
    </>
  )
}
