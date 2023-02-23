import React from "react";
import Dropzone from "react-dropzone";
import UploadIcon from "../../public/icons/UploadIcon";
const DropFiles = (props) => {
  return (
    <Dropzone
      onDrop={(accepted,rejected)=>{
        props.upload(accepted,rejected,props.num)
      }}
      accept="image/jpeg, image/png"
      multiple={true}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className={`
          text-tertiaryBlue-600 block w-full text-center cursor-pointer 
          border-2 border-tertiary-375 hover:border-tertiary-400 
          border-dashed p-7 rounded-md transition-all`}
        >
          <input {...getInputProps()} />
          <p className="flex justify-center">
            <UploadIcon />
          </p>
          <p className="text-sm font-semibold text-tertiary-650">{props.msg}</p>
        </div>
      )}
    </Dropzone>
  );
};

export default DropFiles;
