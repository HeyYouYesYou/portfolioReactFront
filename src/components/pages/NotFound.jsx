import { ErrorsCard } from "../templates/ErrorsCard";

import { PageCard } from "../templates/PageCard";
import { BasedStileCard } from "../templates/BasedStileCard";

export default function NotFound() {
  return (
    <PageCard>
      <BasedStileCard>
        <ErrorsCard title="Page not found" />
      </BasedStileCard>
    </PageCard>
  );
}
