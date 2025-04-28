import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const PreferenceForm = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    gender: "",
    race: "",
    age: "",
    height: "",
    lookingFor: "",
    eyeColor: "",
    hobbies: [], // Start with an empty array for hobbies
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "hobbies") {
      // Handle multiple hobby selections
      const updatedHobbies = Array.from(e.target.selectedOptions, (option) => option.value.toLowerCase());
      setForm((prev) => ({ ...prev, [name]: updatedHobbies }));
    } else if (name === "lookingFor") {
      // Ensure that we set the value as "serious" for "serious relationship"
      const updatedLookingFor = value === "serious relationship" ? "serious" : value;
      setForm((prev) => ({ ...prev, [name]: updatedLookingFor }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value.toLowerCase() }));
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const processedForm = {
      ...form,
      age: parseInt(form.age), // Ensure age is converted to a number
    };
  
    console.log("Processed Form before submitting:", processedForm); // Add this log
    onSubmit(processedForm); // Pass the form data to the parent component
  };
  
  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Tell us about yourself</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
  
        <select
          name="gender"
          id="gender"
          onChange={handleChange}
          value={form.gender}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Select Your Preferred Gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="nonbinary">nonbinary</option>
        </select>
  
        <select
          name="race"
          onChange={handleChange}
          value={form.race}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Preferred Race</option>
          <option value="asian">asian</option>
          <option value="black">black</option>
          <option value="white">white</option>
          <option value="latino">latino</option>
          <option value="other">other</option>
        </select>
  
        <input
          type="number"
          name="age"
          placeholder="Preferred Age"
          value={form.age}
          onChange={handleChange}
          required
          className="w-full border px-4 py-2 rounded"
        />
  
        <select
          name="height"
          onChange={handleChange}
          value={form.height}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Preferred Height</option>
          <option value="short">short</option>
          <option value="average">average</option>
          <option value="tall">tall</option>
        </select>
  
        <select
          name="lookingFor"
          onChange={handleChange}
          value={form.lookingFor === "serious" ? "serious relationship" : form.lookingFor} // Check and set value for serious
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Looking For</option>
          <option value="serious relationship">serious</option> {/* Keep "serious relationship" here */}
          <option value="hookups">hookups</option>
        </select>
  
        <select
          name="eyeColor"
          onChange={handleChange}
          value={form.eyeColor}
          required
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Preferred Eye Color</option>
          <option value="brown">brown</option>
          <option value="blue">blue</option>
          <option value="green">green</option>
          <option value="hazel">hazel</option>
        </select>
  
        {/* Multi-select for hobbies */}
        <select
          name="hobbies"
          onChange={handleChange}
          value={form.hobbies}
          required
          className="w-full border px-4 py-2 rounded"
          multiple
        >
          <option value="sporty">sporty</option>
          <option value="artistic">artistic</option>
          <option value="nerdy">nerdy</option>
          <option value="social">social</option>
          <option value="adventurers">adventurers</option>
        </select>
  
        <Button className="bg-pink-600 text-white px-4 py-2 w-full rounded hover:bg-pink-700">
          Submit
        </Button>
      </form>
    </div>
  );
  
};

export default PreferenceForm;
