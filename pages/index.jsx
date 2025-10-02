import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    // Add the auth integration
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to ActiveSeeker</h1>
      <p className="mb-6">Find your next opportunity, the smarter way.</p>
      <button
        className="bg-blue-600 text-white px-6 py-3 rounded"
        onClick={handleLogin}
      >
        Login with Google
      </button>
    </div>
  );
}
