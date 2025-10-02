import { useState } from "react";

export default function ProfileEditor({ profile, onSave }) {
  const [bio, setBio] = useState(profile?.bio || "");
  const [projects, setProjects] = useState(profile?.projects || []);

  const addProject = () => {
    setProjects([...projects, ""]);
  };

  const updateProject = (idx, val) => {
    const updated = [...projects];
    updated[idx] = val;
    setProjects(updated);
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <textarea
        className="w-full border p-2 mb-2"
        placeholder="Short bio..."
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      />
      <h3 className="font-bold mb-2">Projects</h3>
      {projects.map((p, idx) => (
        <input
          key={idx}
          className="w-full border p-2 mb-2"
          value={p}
          onChange={(e) => updateProject(idx, e.target.value)}
        />
      ))}
      <button
        className="bg-gray-600 text-white px-2 py-1 rounded mb-2"
        onClick={addProject}
      >
        + Add Project
      </button>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => onSave({ bio, projects })}
      >
        Save Profile
      </button>
    </div>
  );
}
