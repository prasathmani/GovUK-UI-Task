"use client"; // Error components must be Client Components

import { ROUTES } from "@/constant/config";
import Link from "next/link";
import * as React from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <div className="govuk-grid-row">
        <h1 className="govuk-heading-xl">Oops, something went wrong!</h1>
        <Link href={ROUTES.HOME}>Back to home</Link>
      </div>
    </main>
  );
}
