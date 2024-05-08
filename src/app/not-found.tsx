import { ROUTES } from "@/constant/config";
import { Metadata } from "next";
import Link from "next/link";
import * as React from "react";

export const metadata: Metadata = {
  title: "Not Found",
};

export default function NotFound() {
  return (
    <main>
      <div className="govuk-grid-row">
        <h1 className="govuk-heading-xl">Page Not Found</h1>
        <Link href={ROUTES.HOME}>Back to home</Link>
      </div>
    </main>
  );
}
