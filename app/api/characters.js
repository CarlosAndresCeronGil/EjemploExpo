import { create } from "apisauce";

const apiCharacters = create({
    baseURL: 'https://rickandmortyapi.com/api/character/1,2,3,4'
});

export default apiCharacters;