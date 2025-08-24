import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './style/font.css';

// ✅ favicon 불러오기 (Vite는 import하면 자동으로 번들링해줌)
import gksfLogo from './assets/images/GKS_AI.png';

// ✅ favicon 교체
const link =
  document.querySelector("link[rel~='icon']") || document.createElement('link');
link.rel = 'icon';
link.type = 'image/png';
link.href = gksfLogo;
document.getElementsByTagName('head')[0].appendChild(link);

createRoot(document.getElementById('root')).render(<App />);
