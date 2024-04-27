"use client";

const error = ({ error }) => {
  return (
    <main className="error">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
    </main>
  );
};

export default error;
