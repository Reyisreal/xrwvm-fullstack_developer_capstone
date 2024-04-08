import LoginPanel from "./components/Login/Login"
import Dealer from "./components/Dealers/Dealer"
import PostReview from "./components/Dealers/PostReview"
import RegisterPanel from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";
import Dealers from './components/Dealers/Dealers';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/dealers" element={<Dealers/>} />
      <Route path="/dealer/:id" element={<Dealer/>} />
      <Route path="/postreview/:id" element={<PostReview/>} />
      <Route path="/registration" element={<RegisterPanel />} />
    </Routes>
  );
}
export default App;
