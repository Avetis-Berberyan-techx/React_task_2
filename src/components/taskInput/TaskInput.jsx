import "./TaskInput.css";
import { useState } from "react";

export default function TaskInput({ onClick }) {
  let [value, setValue] = useState("");

  function HandleSubmit() {
    if (value.trim()) {
      onClick(value);
      setValue("");
    }
  }

  return (
    <>
      <div className="task-input-wrapper">
        <div className="task-input">
          <input
            type="text"
            className="task-input__input"
            placeholder="Enter task..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button
            type="button"
            className="task-input__button"
            onClick={HandleSubmit}
          >
            Create
          </button>
        </div>
      </div>
    </>
  );
}
