import { IMyPatent } from "@/Types";
import { ENDPOINT, ROUTES } from "@/constant/config";
import { dateFormat } from "@/lib/utils";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patent Details",
};

const getPatentById = async (id: number) =>
  await (
    await fetch(`${ENDPOINT.PATENTS}/${id}`, { next: { tags: ["patentById"] } })
  ).json();

export default async function PatentDetails({
  params,
}: {
  params: { id: number };
}) {
  const { id } = params;
  const patentDatas = await getPatentById(id);
  const patentData: IMyPatent = patentDatas[0];

  return (
    <div className="govuk-width-container">
      <Link href={ROUTES.PATENTS} className="govuk-back-link">
        Back
      </Link>
      <h1>{patentData?.number}</h1>
      <ul className="govuk-list">
        <li>
          <p className="govuk-body">
            <strong>Registered to:</strong> {patentData.owners?.[0]?.name}
          </p>
        </li>
        <li>
          <p className="govuk-body">
            <strong>Registration date:</strong>{" "}
            {dateFormat(patentData.registrationDate)}
          </p>
        </li>
        <li>
          <p className="govuk-body">
            <strong>Next renewal:</strong> {dateFormat(patentData.renewalDate)}
          </p>
        </li>
      </ul>
    </div>
  );
}
export const dynamicParams = false;
