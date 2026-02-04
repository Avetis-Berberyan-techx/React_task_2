import "./Filters.css";
import { useState } from "react";

function Filter({ children, isActive, HandleActive }) {
  return (
    <>
      <button
        type="button"
        className={
          !isActive ? "filter__button-item" : "filter__button-item--active "
        }
        onClick={() => HandleActive(children)}
      >
        {children}
      </button>
    </>
  );
}

export default function Filters({ activateFilter }) {
  let [activeButtons, SetActiveButtons] = useState({
    all: true,
    active: false,
    completed: false,
  });

  function Activate(ch) {
    SetActiveButtons({
      all: ch === "All",
      active: ch === "Active",
      completed: ch === "Completed",
    });
    activateFilter(ch);
  }
  return (
    <>
      <div className="filters">
        <Filter isActive={activeButtons.all} HandleActive={Activate}>
          All
        </Filter>
        <Filter isActive={activeButtons.active} HandleActive={Activate}>
          Active
        </Filter>
        <Filter isActive={activeButtons.completed} HandleActive={Activate}>
          Completed
        </Filter>
      </div>
    </>
  );
}
