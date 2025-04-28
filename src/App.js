import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import PreferenceForm from "./components/PreferenceForm";

import LandingPage from "./pages/LandingPage";
import profilesData from "./data/profiles.json";
import matchProfiles from "./utils/matchProfile"; // 🚀 new import
import Matches from "./pages/Matches";
import profiles from './data/profiles'; // path to your JSON file

const App = () => {
  const [matches, setMatches] = useState([]); // Store processed form data here
  const [profiles, setProfiles] = useState([]);
  const [formData, setFormData] = useState({}); 
  const navigate = useNavigate();

  useEffect(() => {
    setProfiles(profilesData);
  }, []);
  const handleLogin = (formData) => {
    const processedFormData = {
      ...formData,
      age: parseInt(formData.age),
      gender: formData.gender.toLowerCase(),
      race: formData.race.toLowerCase(),
      height: formData.height.toLowerCase(),
      eyeColor: formData.eyeColor.toLowerCase(),
      lookingFor: formData.lookingFor.toLowerCase(),
      hobbies: formData.hobbies.map(h => h.toLowerCase().trim()),
    };
  
    console.log("Processed Form:", processedFormData);
  
    // ✅ Use the imported matchProfiles function (which does partial matching)
    const matchedProfiles = matchProfiles(processedFormData, profiles);
  
    console.log("Matched Profiles:", matchedProfiles);
  
    setMatches(matchedProfiles);
    navigate("/matches", { state: { matchedProfiles } });
  };

  
  

  const handleBack = () => {
    setMatches([]);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<LandingPage onLoginClick={() => navigate("/login")} />} />
      <Route path="/login" element={<PreferenceForm onSubmit={handleLogin} />} />
      <Route path="/matches" element={<Matches data={matches} />} />
    </Routes>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
