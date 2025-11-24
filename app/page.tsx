import Grid from "@/components/Grid/Grid";
import css from "./page.module.css";

export default function Home() {
  return (
    <div className={css.page}>
      <main className={css.main}>
        <h1 className={css.title}>My Alphabet Bouquet</h1>
        <Grid />
      </main>
    </div>
  );
}
