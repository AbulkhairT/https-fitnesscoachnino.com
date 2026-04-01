/**
 * Patient PDFs — bundled in /public/forms (same documents as the original site).
 */

export type PatientFormItem = {
  id: string;
  title: string;
  description?: string;
  file: string;
};

const base = "/forms";

export const patientFormGroups: { title: string; forms: PatientFormItem[] }[] = [
  {
    title: "New patients",
    forms: [
      {
        id: "adult",
        title: "Adult new patient",
        description: "Intake for adults — with or without medical insurance.",
        file: `${base}/adult-new-patient.pdf`,
      },
      {
        id: "child-no-ins",
        title: "Child new patient — no insurance",
        file: `${base}/child-new-patient-no-insurance.pdf`,
      },
      {
        id: "child-ins",
        title: "Child new patient — with insurance",
        file: `${base}/child-new-patient-with-insurance.pdf`,
      },
    ],
  },
  {
    title: "Auto accident",
    forms: [
      {
        id: "pip",
        title: "Patient with auto accident insurance (PIP)",
        file: `${base}/auto-accident-intake.pdf`,
      },
      {
        id: "aob",
        title: "Assignment of benefits",
        file: `${base}/assignment-of-benefits.pdf`,
      },
    ],
  },
  {
    title: "Records",
    forms: [
      {
        id: "to-ablc",
        title: "Release of records to A Better Life Chiropractic",
        file: `${base}/records-release-to-ablc.pdf`,
      },
      {
        id: "from-ablc",
        title: "Release of records from A Better Life Chiropractic",
        file: `${base}/records-release-from-ablc.pdf`,
      },
    ],
  },
];
