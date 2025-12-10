import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";

const Home = () => <h1 className="text-gray-200 text-3xl">Home Page!!</h1>;
const SearchPage = () => (
  <h1 className="text-gray-200 text-3xl">Search Results...</h1>
);
const SignIn = () => <h1 className="text-gray-200 text-3xl">Sign In Page!!</h1>;
const SignUp = () => <h1 className="text-gray-200 text-3xl">Sign Up Page!!</h1>;
const About = () => <h1 className="text-gray-200 text-3xl">About Page</h1>;
const Contact = () => <h1 className="text-gray-200 text-3xl">Contact Page</h1>;

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-10">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
