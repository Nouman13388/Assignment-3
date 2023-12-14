import { useRef } from 'react';
import axios from 'axios';

function Delete() {
  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'delete',
      url: 'http://localhost:3001/' + email.current.value,
      headers: {},
    });
  };

  return (
    <div className="container mx-auto mt-5 bg-gray-900 text-white p-4 rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="block">Email</label>
          <input
            type="email"
            id="email"
            ref={email}
            placeholder="Email"
            className="border rounded py-2 px-3 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-red-700"
        >
          Delete
        </button>
      </form>
    </div>
  );
}

export default Delete;
