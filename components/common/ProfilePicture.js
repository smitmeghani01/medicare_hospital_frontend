function ProfilePicture(props) {
  return (
    <div className={`rounded-full bg-gray-400 h-full w-full ${props?.className}`} >
      <img
        className="h-full w-full rounded-full object-cover object-center"
        src={
          props.profilePicture ||
          "https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"
        }
      />
    </div>
  );
}

export default ProfilePicture;