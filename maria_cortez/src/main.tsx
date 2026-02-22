import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ReactGA from 'react-ga4';

const MEASUREMENT_ID = "G-3KSKCJ48EE"; 
ReactGA.initialize(MEASUREMENT_ID);


createRoot(document.getElementById("root")!).render(<App />);
