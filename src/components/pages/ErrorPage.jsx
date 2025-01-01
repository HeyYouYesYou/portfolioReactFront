import { ErrorsCard } from "../templates/ErrorsCard";

export default function ErrorPage() {
  return (
    <article className="bg-grayLight min-h-lvh flex justify-center items-center">
      <ErrorsCard title="Oops, something went wrong..." />
    </article>
  );
}
