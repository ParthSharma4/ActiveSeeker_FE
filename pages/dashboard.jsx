import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import WeeklyUpdateForm from "../components/WeeklyUpdateForm";
import { fetchDashboard, submitWeeklyUpdate } from "../utils/api";

export default function Dashboard() {
  const [status, setStatus] = useState("Active");
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    // using userID right now, add proper logged in user
    fetchDashboard("123").then((res) => {
      setStatus(res.data.status);
      setUpdates(res.data.updates);
    });
  }, []);

  const handleSubmit = (text) => {
    submitWeeklyUpdate("123", { text }).then((res) => {
      setUpdates([...updates, res.data]);
    });
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="text-xl font-bold mb-2">Dashboard</h1>
        <p>Status: {status}</p>
        <WeeklyUpdateForm onSubmit={handleSubmit} />
        <h2 className="mt-4 font-bold">Previous Updates</h2>
        <ul>
          {updates.map((u, i) => (
            <li key={i} className="border p-2 mb-2">
              {u.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
