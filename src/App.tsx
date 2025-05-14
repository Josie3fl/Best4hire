import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';
// import SavedCandidates from "./pages/SavedCandidates";


function App() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> 
        {/* <Route path="/candidates" element={<SavedCandidates />} /> */}
      </main>
    </>
  );
}


export default App;
