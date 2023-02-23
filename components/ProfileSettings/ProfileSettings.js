import Navbar from "./Navbar";
import { useState } from "react";

function ProfileSettings(props) {
  const [currentTab, setCurrentTab] = useState("My Profile");

  const tabClickHandler = (tabClicked) => {
    setCurrentTab(tabClicked);
  };

  return (
    <div className="mt-8 space-y-5">
      <h2 className="text-2xl font-title font-bold">Settings</h2>
      <Navbar currentTab={currentTab} onClickTab={tabClickHandler} />
    </div>
  );
}

export default ProfileSettings;
