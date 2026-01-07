import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from './routes/Home';
import Programs from './routes/Programs';
import Board from './routes/Board';
import Committees from './routes/Committees';
import Gallery from './routes/Gallery';
import Prospectives from './routes/Prospectives';
import InterUC from './routes/interUC';
import ProspectivesOld from './routes/ProspectivesOld';
import Contact from './routes/Contact';
import Shop from './routes/Shop';
import Service from './routes/Service';
import OSP from './util/OSP';
import Event from './routes/EventPage';
import KavyaBDay from './routes/KavyaBDay';

import ResetScroll from './util/ResetScroll'

const root = ReactDOM.createRoot(document.getElementById('main-wrapper'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <BrowserRouter basename="/">
      <ResetScroll>
        <Routes>
          <Route path="/" element={<Home key={Math.random()} />} />
          <Route path="/programs/*" element={<Programs />} />
          <Route path="/committees/*" element={<Committees />} />
          <Route path="/board/*" element={<Board />} />
          <Route path="/gallery/*" element={<Gallery />} />
          <Route path="/events/*" element={<Event />} />
          <Route path="/kavya-bday/*" element={<KavyaBDay />} />
          <Route path="/prospectives/*" element={<Prospectives />} />
          <Route path="/contact/*" element={<Contact />} />
          <Route path="/shop/*" element={<Shop />} />
          <Route path="/interUC/*" element={<InterUC />} />
        </Routes>
      </ResetScroll>
    </BrowserRouter>
  );
}
