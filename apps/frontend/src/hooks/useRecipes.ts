import apiUrl from "../apiquery/backend";
import { useQuery } from "@tanstack/react-query";

async function fetchRecipes () {
const {data} = await apiUrl.get('/recipes')
return data
}

export function useFetchRecipes() {
    return useQuery(['recipe'] , fetchRecipes)
}