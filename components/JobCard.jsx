import Link from "next/link";

export default function JobCard({ job }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p>{job.company}</p>
      <p className="text-sm text-gray-600">Similarity: {job.score}%</p>
      <Link href={`/job/${job.id}`}>
        <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
          View
        </button>
      </Link>
    </div>
  );
}
