import { useState } from "react";

export default function NewPlayers() {

  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C",

      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2 className="heading">Sign Up</h2>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Name:{" "}
          <input

          />
        </label>{" "}
        <br />
        <label>
          Breed:{" "}
          <input

          />
        </label>{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}