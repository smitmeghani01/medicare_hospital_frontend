import PatientListItem from "./PatientListItem";
import { useRouter } from "next/router";

const DUMMY_PATIENTS = [
  {
    name: "Param Kothari",
    id: 123456,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123457,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123458,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123459,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123460,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123461,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123462,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
  {
    name: "Param Kothari",
    id: 123463,
    diagnosis: "Meningitis",
    lastVisit: "10/02/2022",
  },
];

function MyPatients() {
  const Router = useRouter();

  const openPatientDetailsPageHandler = (patientID) => {
    Router.push(`/doctor/patients/${patientID}`);
  }

  const patientListItems = DUMMY_PATIENTS.map((patient) => {
    return (
      <PatientListItem
        key={patient?.id}
        name={patient?.name}
        id={patient?.id}
        diagnosis={patient?.diagnosis}
        lastVisit={patient?.lastVisit}
        onOpenPatientDetailsPage={openPatientDetailsPageHandler}
      />
    );
  });

  return (
    <div className="w-full space-y-5">
      <h2 className="text-xl font-semibold font-title">
        My Patients
      </h2>
      <div className="space-y-3">
        <div className="flex py-3 px-6 space-x-5 text-base font-semibold font-display bg-white rounded-md">
          <div className="w-[25%]">Patient Name</div>
          <div className="w-[20%]">Patient ID</div>
          <div className="w-[40%]">Diagnosis</div>
          <div className="w-[10%]">Last Visit</div>
        </div>
          <ul className="bg-white rounded-md">{patientListItems}</ul>
      </div>
    </div>
  );
}

export default MyPatients;
