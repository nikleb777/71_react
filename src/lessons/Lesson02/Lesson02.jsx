import Button from "../../components/Button/Button";
import "./styles.css";
import LessonCard from "../../components/LessonCard/LessonCard";

function Lesson02 () {
  return (
    <div className="lesson02-wrapper">
    <div className='button-container'>
  <Button />
  <Button />
  <Button />
  </div>
  <LessonCard />
  </div>
  );
}

export default Lesson02;