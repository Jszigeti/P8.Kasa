import UserAvatar from "../UserAvatar/UserAvatar";
import UserRating from "../UserRating/UserRating";

function UserInfo({ currentProperty }) {
  return (
    <div className="user-info">
      <UserAvatar currrentProperty={currentProperty} />
      <UserRating currentProperty={currentProperty} />
    </div>
  );
}

export default UserInfo;
