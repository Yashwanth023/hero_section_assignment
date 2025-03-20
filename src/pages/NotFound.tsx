
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-6">
      <div className="glass-card p-8 md:p-12 rounded-xl max-w-md w-full text-center">
        <h1 className="text-5xl font-bold mb-4 text-light">404</h1>
        <p className="text-xl text-light/70 mb-8">
          The page you're looking for doesn't exist.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass-card-hover text-light font-medium"
        >
          <ArrowLeft size={18} />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
