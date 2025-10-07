import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// Ensure NEXT_PUBLIC_* env vars are usable in client via vite envPrefix

createRoot(document.getElementById("root")!).render(<App />);
import Login from './pages/auth/Login'
