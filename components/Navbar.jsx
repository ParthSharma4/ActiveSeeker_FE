import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold text-lg">NAME OF THE WEBSITE</h1>
      <div className="flex gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/jobs">Jobs</Link>
      </div>
    </nav>
  );
}
