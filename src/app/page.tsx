import { ROUTES } from "@/constant/config";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="govuk-heading-xl">See My Patents</h1>
      <p className="govuk-body">
        Use this service to see a list of your patents.
      </p>
      <Link
        href={ROUTES.PATENTS}
        className="govuk-button"
        data-module="govuk-button"
      >
        Start Now
      </Link>
    </div>
  );
}
