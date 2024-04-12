function UserAvatar({ currrentProperty }) {
  return (
    <div className="user-avatar">
      <p>{currrentProperty.host.name}</p>
      <img src={currrentProperty.host.picture} alt="Owner avatar" />
    </div>
  );
}

export default UserAvatar;
