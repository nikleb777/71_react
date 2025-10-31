import ProfileCard from "../components/ProfileCard";

function Homework02() {
  return (
    <div style = {{ display: "flex", gap: "20px" }}>
      <ProfileCard
        avatar = "https://i.pravatar.cc/400?img=12"
        fullName = "John Doe"
        job = "Frontend Developer"
        hobby = "Футбол"
      />

      <ProfileCard
        avatar = "https://i.pravatar.cc/400?img=48"
        fullName = "Sarah Miller"
        job = "Designer"
        hobby = "Рисование"
      />

      <ProfileCard
        avatar = "https://i.pravatar.cc/150?img=3"
        fullName = "Alex Carter"
        job = "QA Engineer"
        hobby = "Игры"
      />
    </div>
  );
}

export default Homework02;
