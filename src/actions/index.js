export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_RECIPE = 'FAVORTE_RECIPES';

export function setRecipes(items){
    return {
        type: SET_RECIPES,
        items
    }
}


export function favoriteRecipe(recipe){
    return {
        type: FAVORITE_RECIPE,
        recipe
    }
}

