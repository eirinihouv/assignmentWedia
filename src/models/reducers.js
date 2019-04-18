import { onSearch } from './'

export const searched = (searched = [], action) => {
  switch(action.type) {
     case onSearch.type:
       return searched = ["hey"];
    default:
      return searched;
  }
};
