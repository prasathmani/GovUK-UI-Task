import { ENDPOINT, ROUTES } from "@/constant/config";
import Link from "next/link";
import { Metadata } from "next";
import { IMyPatent } from "@/Types/index";
import { dateFormat } from "@/lib/utils";

export const metadata: Metadata = {
  title: "My Patents",
};

const getPatents = async () =>
  await (await fetch(ENDPOINT.PATENTS, { next: { tags: ["patents"] } })).json();

export default async function MyPatents() {
  const PatentList: IMyPatent[] = await getPatents();

  return (
    <div className="govuk-width-container">
      <Link href={ROUTES.HOME} className="govuk-back-link">
        Back
      </Link>
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-full">
            <h1 className="govuk-heading-xl">My Patents</h1>

            <table className="govuk-table">
              <thead className="govuk-table__head">
                <tr className="govuk-table__row">
                  <th scope="col" className="govuk-table__header">
                    Number
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Status
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Owner
                  </th>
                  <th scope="col" className="govuk-table__header">
                    Renewal
                  </th>
                </tr>
              </thead>
              <tbody className="govuk-table__body">
                {PatentList?.map((project: IMyPatent) => (
                  <tr className="govuk-table__row" key={project.id}>
                    <td className="govuk-table__cell">
                      <Link
                        href={`${ROUTES.PATENTS}/${project.id}`}
                        className="govuk-link"
                      >
                        {project.number}
                      </Link>
                    </td>
                    <td className="govuk-table__cell">{project.status}</td>
                    <td className="govuk-table__cell">
                      {project.owners?.[0].name}
                    </td>
                    <td className="govuk-table__cell">
                      {dateFormat(project.renewalDate)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
