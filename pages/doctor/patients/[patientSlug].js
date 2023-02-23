import { useRouter } from "next/router";
import PatientDetails from "../../../components/PatientDetails/PatientDetails";

function PatientSlug(props){
  const Router = useRouter();
  const patientSlug = Router.query.patientSlug;

  return(
    <PatientDetails patientSlug={patientSlug}/>
  )
}

export default PatientSlug;