import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // we add this promise to delay loading data from database
  // throw new Error("Something went wrong");
  return db.prepare("SELECT * FROM meals").all();
  // .run() => if your inserting data
  // .all() => if your fetching data (all rows)
  // .get() => to get single row
}
