export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORİTE':
      let idAlreadyExists = state.favorites.indexOf(action.payload) > -1;
      // make a copy of the existing array
      if (idAlreadyExists) {
        return {...state};
      } else {
        // modify the COPY, not the original
        return {...state, favorites: [...state.favorites, action.payload]};
      }

    case 'REMOVE_FAVORİTE':
      return {
        favorites: [
          ...state.favorites.filter(jop => jop !== action.payload.jop),
        ],
      };

    default:
      return state;
  }
}
