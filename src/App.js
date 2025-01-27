import './App.css';
import { Route, Routes } from 'react-router-dom';
import DroneView from './page/DroneView';
import Layout from './component/Layout';
import TAM from './page/TAM';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<DroneView />} />
        <Route path='/tam' element={<TAM />} />
      </Route>
    </Routes>
  );
}

export default App;
