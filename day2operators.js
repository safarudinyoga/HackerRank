function solve(meal_costs, tip_percent, tax_percent){
    
    meal_cost = Math.round(meal_cost + (meal_cost * tip_percent/100) + (meal_cost *       tax_percent/100));
    console.log(meal_cost);   
}

