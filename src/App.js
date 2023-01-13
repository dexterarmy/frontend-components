import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Photo from "./components/Photo";
import Images from "./components/Images/Images";

import Profile from "./components/profile/Profile";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/photo" element={<Photo />} /> */}
        <Route path="/upload-multiple-images" element={<Images />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
