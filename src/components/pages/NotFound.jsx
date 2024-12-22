import { Title } from "../templates/Title";
import { PageCard } from "../templates/pageCard";
import { BasedStileCard } from "../templates/BasedStileCard";

export default function NotFound() {
  return (
    <PageCard>
      <BasedStileCard>
        <Title>Page not found</Title>
      </BasedStileCard>
    </PageCard>
  );
}
