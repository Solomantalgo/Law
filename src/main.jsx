import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './reveal.css';

document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(<App />);
