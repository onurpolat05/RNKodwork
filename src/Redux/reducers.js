export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORİTE':
      let idAlreadyExists = state.favorites.indexOf(action.payload) > -1;
      if (idAlreadyExists) {
        return {...state};
      } else {
        return {...state, favorites: [...state.favorites, action.payload]};
      }

    case 'REMOVE_FAVORİTE':
      console.log(action.payload);
      return {
        favorites: [...state.favorites.filter(jop => jop !== action.payload)],
      };

    default:
      return state;
  }
}
