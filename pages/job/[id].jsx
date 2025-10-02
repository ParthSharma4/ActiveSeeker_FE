import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { fetchJobDetails } from "../../utils/api";

export default function JobDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [job, setJob] = useState(null);

  useEffect(() => {
    if (id) {
      fetchJobDetails(id).then((res) => setJob(res.data));
    }
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {job ? (
          <>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <p>{job.company}</p>
            <p className="mt-4">{job.description}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
