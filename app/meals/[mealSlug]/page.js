import Link from "next/link";
import React from "react";

const MealsSlugPage = ({ params }) => {
  return (
    <main>
      <div>MealsSlugPage</div>
      <p>{params.mealSlug}</p>
      <p>
        <Link href="/meals">back to meals</Link>
      </p>
    </main>
  );
};

export default MealsSlugPage;
