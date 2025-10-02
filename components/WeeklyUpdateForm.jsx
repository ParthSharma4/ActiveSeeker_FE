import { useState } from "react";

export default function WeeklyUpdateForm({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <form
      className="p-4 bg-gray-100 rounded shadow"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(text);
        setText("");
      }}
    >
      <textarea
        className="w-full border p-2 mb-2"
        placeholder="What did you work on this week?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit Update
      </button>
    </form>
  );
}
