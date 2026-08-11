import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      {/* 404 Image */}
      <img 
        src="/404.png" 
        alt="404 Not Found" 
        className="mb-8 max-w-xs w-full h-auto md:max-w-sm" 
      />
      
      {/* Messaging */}
      <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Yo, you fell on the wrong path, bruv.
      </h1>
      
      <p className="mb-6 text-muted-foreground">
        Lemme take you back to the right path:
      </p>

      {/* Navigation Link */}
      <Link 
        to="/" 
        className="bg-secondary/90 px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-secondary/70"
      >
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;