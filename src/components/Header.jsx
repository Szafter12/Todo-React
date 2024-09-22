import { useState } from "react";
import { Form } from "./Form";
import { AddBtn } from "./AddBtn";

export function Header({ addTask, getSubHeading }) {
  const [isFormShown, setFormShown] = useState(false);

  return (
    <header className="flex w-full flex-col items-center gap-8">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-4xl">To do:</h1>
          <p className="text-3xl">
            {getSubHeading}
          </p>
        </div>
        <AddBtn isShown={isFormShown} setFormShown={setFormShown} />
      </div>
      {isFormShown && <Form setFormShown={setFormShown} addTask={addTask}></Form>}
    </header>
  );
}
