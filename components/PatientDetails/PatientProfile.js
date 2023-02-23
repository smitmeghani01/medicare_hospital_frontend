import Card from "../common/Card";
import ProfilePicture from "../common/ProfilePicture";

function PatientProfile(props) {
  return (
    <Card className="p-4 w-[23%] flex flex-col space-y-4 h-[fit-content] my-8">
      <div className="space-y-3 border-b-[1px] pb-4 border-gray-300 flex flex-col items-center">
        <ProfilePicture profilePicture="" className="w-[75px] h-[75px]" />
        <div className="space-y-1 flex flex-col items-center">
          <p className="font-semibold font-title text-base">Param Kothari</p>
          <p className="text-sm font-display text-gray-400">20 Years, Male</p>
        </div>
      </div>
      <div className="space-y-5 font-display">
        <div className="text-sm">
          <div className="text-gray-400">Email</div>
          <div className="font-medium">paramrkothari@gmail.com</div>
        </div>
        <div className="text-sm">
          <div className="text-gray-400">Phone</div>
          <div className="font-medium">+91 8779221172</div>
        </div>
        <div className="text-sm">
          <div className="text-gray-400">Date of Birth</div>
          <div className="font-medium">18 June 2002</div>
        </div>
      </div>
    </Card>
  );
}

export default PatientProfile;
