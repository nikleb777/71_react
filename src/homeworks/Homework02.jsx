import ProfileCard from "../components/ProfileCard/ProfileCard";
import "./Homework02.css";

function Homework02() {
  return (
    <div className="cards-container">
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=3"
        fullName="John Smith"
        job="Frontend Developer"
        hobby="Готовка"
      />
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=5"
        fullName="Anna Johnson"
        job="UX Designer"
        hobby="Путешествия"
      />
      <ProfileCard
        avatar="https://i.pravatar.cc/150?img=8"
        fullName="Michael Brown"
        job="QA Engineer"
        hobby="Футбол"
      />
    </div>
  );
}

export default Homework02;
