function Input(props) {
  return (
    <div className={props?.divClassName || "space-y-2 flex flex-col"}>
      {props?.label && (
        <label
          htmlFor={props?.input.id}
          className={props?.labelClassName || "text-lg font-normal text-tertiarygrey-400 font-title"}
        >
          {props?.label}{props?.input?.required && <span className="text-tertiaryred-50">*</span>}
        </label>
      )}
      <input
        {...props?.input}
        className={props?.inputClassName || "bg-tertiarywhite-100 border border-tertiarygrey-350 focus:outline-none text-lg rounded-lg w-full p-2.5"}
      />
      {props?.extra}
    </div>
  );
}

export default Input;
