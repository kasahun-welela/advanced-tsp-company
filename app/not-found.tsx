import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-4">
      <div className="bg-card text-card-foreground rounded-xl shadow-lg flex flex-col items-center px-8 py-12 max-w-md w-full ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
          className="w-24 h-24 mb-6 text-primary"
        >
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="4"
            fill="#e0f2fe"
          />
          <path
            d="M35 60 Q50 75 65 60"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="40" cy="45" r="4" fill="currentColor" />
          <circle cx="60" cy="45" r="4" fill="currentColor" />
        </svg>
        <h1 className="text-4xl font-extrabold  mb-2 text-center">404</h1>
        <h2 className="text-xl font-semibold mb-2 text-center">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6 text-center">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/80 text-white px-6 py-2 rounded-lg shadow transition-colors duration-200">
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
