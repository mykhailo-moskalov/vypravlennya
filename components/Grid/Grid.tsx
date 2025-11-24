"use client";

import { compliments } from "@/lib/compliments";
import css from "./Grid.module.css";
import Output from "../Output/Output";
import { useComplimentStore } from "@/store/useComplimentStore";

const Grid = () => {
  const { setSelected } = useComplimentStore();

  return (
    <>
      <Output />
      <div className={css.grid}>
        {Object.keys(compliments).map((letter) => (
          <button
            key={letter}
            onClick={() => setSelected(compliments[letter])}
            className={css.letterBtn}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};

export default Grid;
