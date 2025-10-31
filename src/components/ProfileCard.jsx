function ProfileCard({ avatar, fullName, job, hobby }) {
  return (
    <div className = "lesson-card-wrapper">
      <img src={avatar} alt="avatar" width="100" />
      <h3>{fullName}</h3>
      <p>Профессия: {job}</p>
      <p>Хобби: {hobby}</p>
    </div>
  );
}

export default ProfileCard;
