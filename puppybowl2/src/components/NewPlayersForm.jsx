import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "some-username",
            password: "super-secret-999",
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      setToken(result.token);
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
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>{" "}
        <br />
        <label>
          Password:{" "}
          <input
            type="password"
            pattern=".{8,}"
            required
            title="8 characters minimum"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>{" "}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}