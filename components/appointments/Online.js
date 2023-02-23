import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Countdown from "react-countdown";
import DropFiles from "../common/DropFiles";
import "react-quill/dist/quill.snow.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";
const ReactQuill=dynamic(import('react-quill'),{ssr:false})
import AuthContext from "../../store/auth-context";
import { Appointment } from "../context/AppointmentContext";
import { useContext } from "react";
const Online = () => {
  const [isVideo, setIsVideo] = useState(false);
  const [isText, setIsText] = useState(true);
  const [isDisabledT, setIsDisabledT] = useState(false);
  const [isDisabledV, setIsDisabledV] = useState(false);
  const [checkImage, secheckImage] = useState(false);
  const [IllDes, setIllDes] = useState("");
  const [imageArray, setImageArray] = useState([]);
   const ctx=useContext(Appointment)

   useEffect(()=>{
    ctx.updateAppointmentStep2(isVideo?"Video":"Text",IllDes.replaceAll("<[^>]*>", ""),imageArray.map((file)=>URL.createObjectURL(file)))
   
    console.log(ctx.appointment)
   },[isVideo,IllDes,imageArray])

  const upload = (accepted, rejected) => {
    setImageArray([...imageArray, ...accepted]);
  };
  const VideomodeHandler = () => {
    setIsVideo(true);
    setIsText(false);
    setIsDisabledT(true);
  };
  useEffect(() => {
    console.log(imageArray.length);
    if (imageArray.length > 5) secheckImage(true);
  }, [imageArray]);
  const textmodeHandler = () => {
    setIsVideo(false);
    setIsText(true);
    setIsDisabledV(true);
  };
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return (
        <>
          <div className=" flex w-[100%] justify-center space-x-2 items-center ">
            <img src="/gmeet.jpg" width={100} height={100}></img>
            <p className="text-lg font-semibold">
              Link will be generated shortly...
            </p>
          </div>
          <div className="text-sm my-2 text-center text-tertiaryred-150 w-full flex justify-center">
            Kindly proceed to payment
          </div>
        </>
      );
    } else {
      // Render a countdown
      return (
        <>
          <div className="flex justify-center my-5">
            <span className="text-3xl font-semibold py-7 px-10 rounded-full border-tertiarygreen-400 border-4">
              {seconds}
            </span>
          </div>
          <div
            className="flex w-full justify-center"
            onClick={() => {
              setIsText(false);
              setIsVideo(false);
              setIsDisabledT(false);
            }}
          >
            <button className="my-3 text-tertiarywhite-100 rounded-full bg-tertiaryred-150 w-[20%] px-5 py-1">
              Cancel
            </button>
          </div>
        </>
      );
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex justify-center my-5">
        <button
          className={
            !isDisabledV
              ? "bg-tertiaryViolet text-tertiarywhite-100 font-semibold px-3 py-3 mx-3 flex space-x-2 rounded-xl  items-center"
              : "bg-tertiarygrey-300 text-tertiarywhite-100 font-semibold px-3 py-3 mx-3 flex space-x-2 rounded-xl  items-center"
          }
          onClick={VideomodeHandler}
          disabled={isDisabledV}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width={20}
            height={20}
          >
            <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
          </svg>
          <span>VIDEO CONSULT</span>
        </button>
        <button
          className={
            !isDisabledT
              ? "bg-tertiaryblue-50 text-tertiarywhite-100 font-semibold px-3 py-3 mx-3 flex space-x-2 rounded-xl  items-center"
              : "bg-tertiarygrey-300 text-tertiarywhite-100 font-semibold px-3 py-3 mx-3 flex space-x-2 rounded-xl  items-center"
          }
          onClick={textmodeHandler}
          disabled={isDisabledT}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            height={20}
          >
            <path d="M96 352V96c0-35.3 28.7-64 64-64H416c35.3 0 64 28.7 64 64V293.5c0 17-6.7 33.3-18.7 45.3l-58.5 58.5c-12 12-28.3 18.7-45.3 18.7H160c-35.3 0-64-28.7-64-64zM272 128c-8.8 0-16 7.2-16 16v48H208c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h48v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V256h48c8.8 0 16-7.2 16-16V208c0-8.8-7.2-16-16-16H320V144c0-8.8-7.2-16-16-16H272zm24 336c13.3 0 24 10.7 24 24s-10.7 24-24 24H136C60.9 512 0 451.1 0 376V152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 224c0 48.6 39.4 88 88 88H296z" />
          </svg>
          <span> DESCRIBE ILLNESS</span>
        </button>
      </div>
      {isVideo && (
        <>
          <Countdown date={Date.now() + 5000} renderer={renderer}></Countdown>
        </>
      )}
      {isText && (
        <div className="px-5 py-5 flex flex-col">
          <div className="flex space-x-2 my-2 items-center">
            <h1 className="text-lg font-bold ">Write illness Description</h1>
            <span className="text-red-600">*</span>
          </div>
          <ReactQuill
            theme="snow"
            value={IllDes}
            onChange={(val) => setIllDes(val)}
            placeholder="Write your problems here ..."
            className="rounded-md h-[200px]"
          />
          <div className="flex space-x-2 my-2 items-center mt-12">
            <h1 className="text-lg font-bold ">Upload illness Media</h1>
          </div>
          {checkImage && (
            <p className="text-sm my-2 text-red-600">
              Cannot upload more than 5 images
            </p>
          )}
          <DropFiles
            msg="Drag and drop or click to add Media here"
            num={5}
            upload={upload}
          ></DropFiles>
          {imageArray.length > 0 && (
            <ReactImageGallery
              disableKeyDown={true}
              showPlayButton={false}
              showFullscreenButton={true}
              showBullets={false}
              showThumbnails={true}
              autoPlay={false}
              lazyLoad={true}
              items={imageArray.map((file) => {
                const url = URL.createObjectURL(file);
                return {
                  original: url,
                  thumbnail: url,
                };
              })}
            ></ReactImageGallery>
          )}
        </div>
      )}
    </div>
  );
};
export default Online;
