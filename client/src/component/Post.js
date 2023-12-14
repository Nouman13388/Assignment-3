import { useRef } from "react";
import axios from "axios";

function Post() {
  const name = useRef();
  const phone = useRef();
  const email = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    };

    axios({
      method: "post",
      url: "http://localhost:3001/",
      headers: {},
      data: data,
    });
  };

  return (
    <div className="container mx-auto mt-5 bg-gray-900 text-white p-4 rounded shadow">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            ref={name}
            placeholder="Enter Name"
            className="border rounded py-2 px-3 bg-gray-800 text-white focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            ref={phone}
            placeholder="Phone"
            className="border rounded py-2 px-3 bg-gray-800 text-white focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            ref={email}
            placeholder="Email"
            className="border rounded py-2 px-3 bg-gray-800 text-white focus:outline-none focus:border-blue-500 w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Post;
