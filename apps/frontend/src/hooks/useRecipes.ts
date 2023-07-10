import apiUrl from "../apiquery/backend";
import { useQuery } from "@tanstack/react-query";
import {Recipe} from './types'

async function fetchRecipes () {
const {data} = await apiUrl.get<Recipe[]>('/recipes')
return data
}

export function useFetchRecipes() {
    return useQuery(['recipe'] , fetchRecipes)
}