import { useComplimentStore } from "@/store/useComplimentStore";
import css from "./Output.module.css";
import { AnimatePresence, motion } from "framer-motion";

const Output = () => {
  const { selected, clearSelected } = useComplimentStore();

  return (
    <>
      <div className={css.output}>
        <AnimatePresence mode="wait">
          {selected && (
            <motion.p
              key={selected}
              className={css.selectedCompliment}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {selected}
            </motion.p>
          )}
        </AnimatePresence>

        <button onClick={clearSelected} className={css.clearBtn}>
          Clear
        </button>
      </div>
    </>
  );
};

export default Output;
