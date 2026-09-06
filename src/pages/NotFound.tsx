import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
      <div className="text-center p-8 rounded-2xl bg-[#0a0a0a] border border-neutral-800 max-w-md w-full shadow-2xl">
        <h1 className="text-5xl font-display font-bold mb-3 text-white">404</h1>
        <p className="text-sm font-mono text-neutral-400 mb-6">Page not found or route decommissioned</p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-neutral-200 transition-colors"
        >
          Return to Console
        </a>
      </div>
    </div>
  );
};

export default NotFound;