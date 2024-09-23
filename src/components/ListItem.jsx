import { useState } from "react";

export function ListItem({ children, handleDelete }) {
  const [isComplete, setComplete] = useState(false);

  return (
    <li className="my-4 flex items-center justify-between rounded-xl border-2 border-solid px-4 py-2 text-lg text-black">
      <p className={`overflow-x-auto text-sm md:text-lg ${isComplete && "line-through"}`}>{children}</p>
      <div className="flex items-center gap-3">
        {isComplete == false && (
          <button
            onClick={() => setComplete(!isComplete)}
            className="rounded-xl border-2 border-solid border-cyan-500 p-1 transition-colors hover:bg-cyan-400 hover:text-white md:p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </button>
        )}
        <button
          className="rounded-xl border-2 border-solid border-cyan-500 p-1 transition-colors hover:bg-cyan-400 hover:text-white md:p-2"
          onClick={handleDelete}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>
    </li>
  );
}
