import { useState } from "react";

export function Form({ addTask, setFormShown }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit() {
    if (inputValue.trim()) {
      addTask(inputValue);
      setFormShown(false)
      setInputValue("");
    }
  }

  return (
    <div className="flex justify-center gap-5 md:w-3/4">
      <input
        type="text"
        id="formInput"
        className="w-3/4 rounded-xl border-2 border-solid border-cyan-500 px-4 py-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="rounded-lg bg-cyan-500 px-4 py-2 text-lg text-slate-100 transition-colors hover:bg-cyan-400"
        onClick={handleSubmit}
      >
        Add
      </button>
    </div>
  );
}
