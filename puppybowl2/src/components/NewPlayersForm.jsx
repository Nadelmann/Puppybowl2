import { useState } from "react";

export default function NewPlayers() {
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);

    const playerData = {
      name: formData.get("name"),
      breed: formData.get("breed"),
      status: formData.get("status"),
      teamId: formData.get("teamId"),
      cohortId: 373, 
      imageUrl: formData.get("imageUrl"),
    };

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
        }
      );

      if (response.ok) {
        console.log("Player created successfully.");
      } else {
        console.log("Player creation failed.");
        setError("Player creation failed.");
      }
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
          Name: <input type="text" name="name" />
        </label>{" "}
        <br />
        <label>
          Breed: <input type="text" name="breed" />
        </label>{" "}
        <br />
        <label>
          Status(bench or field): <input type="text" name="status" />
        </label>{" "}
        <br />
        <label>
          teamId: <input type="text" name="teamId" />
        </label>{" "}
        <br />
        <label>
          CohortId: 373
        </label>{" "}
        <br />
        <label>
          imageUrl: <input type="text" name="imageUrl" />
        </label>{" "}
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
