import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import LibraryPage from './pages/LibraryPage.jsx';
import FormPage    from './pages/FormPage.jsx';
import MoviesPage from './pages/MoviesPage.jsx';
import SeriesPage from './pages/SeriesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import Footer from './components/footer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/"        element={<HomePage/>}/>
        <Route path="/library" element={<LibraryPage/>}/>
        <Route path="/movies" element={<MoviesPage/>}/>
        <Route path="/series" element={<SeriesPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/form"    element={<FormPage/>}/>
        <Route path="/form/:id" element={<FormPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
