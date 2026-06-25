import styles from "./CourseCard.module.scss";
import type { CourseCardProps } from "./CourseCard.types";

const CourseCard = ({ capacity, title, instructor, description }: CourseCardProps) => {
  return (
    <div className={styles.courseCard}>
      <span className={styles.courseTitle}>{title}</span>
      <p className={styles.courseDesc}>{description}</p>
      <span>Capacity of {capacity}</span>
      <p>By <span className={styles.courseTutor}>{instructor}</span></p>
    </div>
  )
}

export default CourseCard