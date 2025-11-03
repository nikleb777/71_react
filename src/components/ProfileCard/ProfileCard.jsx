import "./ProfileCard.css";

function ProfileCard({ avatar, fullName, job, hobby }) {
  return (
    <div className="profile-card-wrapper">
      <img src={avatar} alt="avatar" />
      <h3>{fullName}</h3>
      <p>Профессия: {job}</p>
      <p>Хобби: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
