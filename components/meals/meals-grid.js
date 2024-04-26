import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem
            // id={meal.id}
            // name={meal.name}
            // description={meal.description}
            // price={meal.price}
            // imageUrl={meal.imageUrl}
            {...meal}
          />
        </li>
      ))}
    </ul>
  );
}
