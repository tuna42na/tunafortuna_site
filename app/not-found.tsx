import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold mb-4 bg-white p-4 rounded-lg">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="mb-6 text-lg text-gray-700">
          Sorry, the page you are looking for does not exist. (yet...)
        </p>
        <Link
          href="/"
          className="px-6 py-2 rounded bg-gray-600 hover:bg-gray-500 transition-colors font-medium">
          Go Home
        </Link>
      </div>
    </main>
  );
}
