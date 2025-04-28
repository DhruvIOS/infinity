import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({
    name: '',
    gender: '',
    race: '',
    age: '', // Updated from ageRange to age
    height: '',
    lookingFor: '',
    eyeColor: '',
    hobbies: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value.toLowerCase()] // Ensure hobby is lowercase
          : prev.hobbies.filter((hobby) => hobby !== value.toLowerCase()), // Ensure hobby is lowercase
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value.toLowerCase() })); // Ensure other values are lowercase
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with form:', form);
    onLogin(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      <input
        type="text"
        name="name"
        placeholder="your name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">gender</option>
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="nonbinary">nonbinary</option>
      </select>

      <input
        type="text"
        name="race"
        placeholder="race"
        value={form.race}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <input
        type="number"
        name="age"
        placeholder="preferred age"
        value={form.age}
        onChange={handleChange}
        required
        className="w-full p-2 mb-4 border rounded"
      />

      <select
        name="height"
        value={form.height}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">height</option>
        <option value="short">short</option>
        <option value="average">average</option>
        <option value="tall">tall</option>
      </select>

      <select
        name="lookingFor"
        value={form.lookingFor}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      >
        <option value="">looking for</option>
        <option value="hookups">hookups</option>
        <option value="serious relationship">serious</option>
      </select>

      <input
        type="text"
        name="eyeColor"
        placeholder="eye color"
        value={form.eyeColor}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
        required
      />

      <fieldset className="mb-4">
        <legend className="font-semibold mb-2">hobbies</legend>
        {['sporty', 'artistic', 'nerdy', 'social', 'adventurers'].map((hobby) => (
          <label key={hobby} className="inline-flex items-center mr-4">
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={form.hobbies.includes(hobby)}
              onChange={handleChange}
              className="mr-1"
            />
            {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
          </label>
        ))}
      </fieldset>

      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
