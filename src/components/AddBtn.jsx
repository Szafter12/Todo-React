export function AddBtn({ isShown, setFormShown }) {
  return (
    <button
      className="m-0 flex h-16 w-16 items-center justify-center rounded-[50%] bg-cyan-500 p-0 text-center text-3xl text-white"
      onClick={() => setFormShown(!isShown)}
    >
      {isShown ? "-" : "+"}
    </button>
  );
}
