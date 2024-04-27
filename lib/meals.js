import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // we add this promise to delay loading data from database

  // throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
}

//  The statement selects all columns from the meals table where the slug column matches the provided slug.
export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
