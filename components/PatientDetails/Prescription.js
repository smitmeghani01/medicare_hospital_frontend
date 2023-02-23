import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

function Prescription(props) {
  const [prescription, setPrescription] = useState("");
  const [showUploadPrescription, setShowUploadPrescription] = useState(false);

  const showUploadPrescriptionHandler = () => {
    setShowUploadPrescription(true);
  };

  const hideUploadPrescriptionHandler = () => {
    setShowUploadPrescription(false);
  };

  const prescriptionChangeHandler = (enteredPrescription) => {
    setPrescription(enteredPrescription);
    console.log(enteredPrescription);
  };

  const uploadPrescriptionHandler = () => {

  }

  return (
    <div className="w-full space-y-5 py-8">
      {!showUploadPrescription && (
        <button
          type="button"
          onClick={showUploadPrescriptionHandler}
          className="font-display bg-indigo-700 text-white px-6 py-2 rounded-md text-sm"
        >
          Upload Prescription
        </button>
      )}
      {showUploadPrescription && (
        <div className="space-y-5">
          {/* <h2 className="text-xl font-semibold font-title py-2 border-b-2 border-indigo-500 w-[50%]"> */}
          <h2 className="text-xl font-semibold font-title">
            Upload Prescription
          </h2>
          <div className="mb-18">
          <ReactQuill
            theme="snow"
            value={prescription}
            onChange={prescriptionChangeHandler}
            placeholder="Write your prescription here ..."
            className="rounded-md h-[200px] mb-18"
          />
          </div>
          <div className="text-sm font-display text-white space-x-3 flex justify-end">
            <button
              onClick={uploadPrescriptionHandler}
              type="button"
              className=" bg-indigo-700 px-6 py-2 rounded-md"
            >
              Upload Prescription
            </button>
            <button type="button"
            onClick={hideUploadPrescriptionHandler}
            className="bg-red-600 px-6 py-2 rounded-md"
            >Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Prescription;
