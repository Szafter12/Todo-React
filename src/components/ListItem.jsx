import { useState } from "react";

export function ListItem({ children, handleDelete }) {
  const [isComplete, setComplete] = useState(false);

  return (
    <li
      className="my-4 flex items-center justify-between rounded-xl border-2 border-solid px-4 py-2 text-lg text-black"
    >
      <span className={`${isComplete && "line-through"}`}>{children}</span>
      <div className="flex items-center gap-3">
        {isComplete == false && (
          <button
            onClick={() => setComplete(!isComplete)}
            className="rounded-xl border-2 border-solid border-cyan-500 p-2 transition-colors hover:bg-cyan-400 hover:text-white"
          >
            Completed
          </button>
        )}
        <button
          className="rounded-xl border-2 border-solid border-cyan-500 p-2 transition-colors hover:bg-cyan-400 hover:text-white"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
