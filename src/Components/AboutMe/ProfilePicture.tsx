import self from "../../Assets/images/self-photo/self.webp";
const ProfilePicture = () => {
  return (
    <div className="profile-picture-container">
      <div className="profile-picture-border">
        <img className="profile-picture-img" src={self} alt="Tushar Gahlaut" />
      </div>
    </div>
  );
};

export default ProfilePicture;
