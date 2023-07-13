import AvatarCard from "../components/Settings/AvatarCard";
import UserInfoCard from "../components/Settings/UserInfoCard";

const Settings = () => {
  return (
    <div className="px-4 pt-20">
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-3">
        <AvatarCard />
        <UserInfoCard />
      </div>
      </div>
  );
}

export default Settings;