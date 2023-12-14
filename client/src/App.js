import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Get from './component/Get';
import Update from './component/Update';
import Post from './component/Post';
import Delete from './component/Delete';
import Navbar from './component/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Get />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/post" element={<Post />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
