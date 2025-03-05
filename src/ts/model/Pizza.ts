import { DataStructure } from "../services/DataStructure";

export interface PizzaModel {
title: string,
description:string,
toppings: string[],
price: number
id: number
}

export const Pizza = new DataStructure<PizzaModel>(
    "http://localhost:3000/pizzas"
)