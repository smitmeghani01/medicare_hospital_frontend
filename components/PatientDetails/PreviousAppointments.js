import PreviousAppointmentListItem from "./PreviousAppointmentListItem";

const DUMMY_DATA = [
  {
    id: 1,
    date: "20/01/2022",
    mode: "Online",
    illness: "Headache",
    comments:
      "Bad cold, cough, throat pain, fever, nausea",
    isFollowUp: false,
  },
  {
    id: 2,
    date: "20/01/2022",
    mode: "Online",
    illness: "Headache",
    comments:
      "Bad cold, cough, throat pain, fever, nausea",
    isFollowUp: false,
  },
  {
    id: 3,
    date: "20/01/2022",
    mode: "Online",
    illness: "Headache",
    comments:
      "Bad cold, cough, throat pain, fever, nausea",
    isFollowUp: false,
  },
  {
    id: 4,
    date: "20/01/2022",
    mode: "Online",
    illness: "Headache",
    comments:
      "Bad cold, cough, throat pain, fever, nausea",
    isFollowUp: false,
  },
  {
    id: 5,
    date: "20/01/2022",
    mode: "Online",
    illness: "Headache",
    comments:
      "Bad cold, cough, throat pain, fever, nausea",
    isFollowUp: false,
  },
];

function PreviousAppointments(props) {
  const prevAppointments = DUMMY_DATA.map((appointment) => {
    return (
      <PreviousAppointmentListItem
        key={appointment.id}
        id={appointment.id}
        date={appointment.date}
        mode={appointment.mode}
        illness={appointment.illness}
        comments={appointment.comments}
        isFollowUp={appointment.isFollowUp}
      />
    );
  });
  return (
    <div className="w-full space-y-5 border-b-2 border-gray-300 pb-8">
      {/* <h2 className="text-xl font-semibold font-title py-2 border-b-2 border-indigo-500 w-[50%]"> */}
      <h2 className="text-xl font-semibold font-title">
        Previous Appointments
      </h2>
      <div className="space-y-3">
        <div className="flex py-3 px-6 space-x-5 text-base font-semibold font-display bg-white rounded-md w-[98.5%]">
          <div className="w-[10%]">Date</div>
          <div className="w-[25%]">Illness</div>
          <div className="w-[10%]">Mode</div>
          <div className="w-[10%]">Type</div>
          <div className="w-[35%] flex-grow-0 break-words">Comments</div>
        </div>
        <ul className="space-y-3 max-h-[370px] overflow-y-scroll">{prevAppointments}</ul>
      </div>
    </div>
  );
}

export default PreviousAppointments;
