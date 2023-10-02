import { useState } from "react";
import * as usersService from "../../utilities/users-service.js";

export default function UpdateUser({ user, setUser }) {
    const [credentials, setCredentials] = useState({
        name: " ",
        id: user._id,
       
    })
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
    console.log(credentials);
      const updatedUser = await usersService.updateUser(credentials);
      setUser(updatedUser)
    } catch (err) {
      setError(err);
      console.log(error);
    }
  };
  return (
    <div className="form-container">
      <form autoComplete="off" onSubmit={handleSubmit}>
            <label>Update Name</label>
            <input
              type="text"
              name="name"
              value={credentials.name}
              onChange={handleChange}
              required
            />
            <button type="submit">
              Submit Changes
            </button>
      </form>
    </div>
  );
}