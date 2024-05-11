import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecommendationsPage from "./pages/RecommendationsPage";
import Header from "./components/Header";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recommend/:id" element={<RecommendationsPage />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}
