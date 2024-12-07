export const reducer = (state, action) =>{
    switch (action.type) {
        case "GET_CARDS":
            return {...state, cards:action.payload }
        case "ADD_FAV":
            return {...state, favs: [...state.favs, action.payload]}
        case "DELETE_FAV":
            const filterFavs = state.favs.filter(fav => fav.id !== action.payload.id) 
            return {...state, favs: filterFavs}
        case "TOGGLE_THEME":
            return {...state, theme: ""}
    }
}