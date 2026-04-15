import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Página no encontrada</p>
      <p className="text-sm text-gray-500">{location.pathname}</p>
    </div>
  );
}