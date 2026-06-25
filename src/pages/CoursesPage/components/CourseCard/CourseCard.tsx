import Button from "../../../../components/Button/Button";
import styles from "./CourseCard.module.scss";
import type { CourseCardProps } from "./CourseCard.types";
import { ROLES } from "../../../../types/Roles";
import { useEnrollCourseMutation } from "../../../../redux/slices/coursesApiSlice";
import { snack } from "../../../../components/Snackbar/hooks/useSnackbarStore";
import RoleGuard from "../../../../hoc/RoleGuard";

const CourseCard = ({ capacity, title, instructor, description, id }: CourseCardProps) => {
  const [enrollCourse, { isLoading }] = useEnrollCourseMutation();

  const onEnroll = async () => {
    try {
      await enrollCourse(id).unwrap();
      snack.success("Enrolled successfully");
    } catch (e: any) {
      snack.error(e.data?.error?.message || "Something went wrong");
    }
  };

  return (
    <div className={styles.courseCard}>
      <span className={styles.courseTitle}>{title}</span>
      <p className={styles.courseDesc}>{description}</p>
      <span>Capacity of {capacity}</span>
      <p>By <span className={styles.courseTutor}>{instructor}</span></p>

      <RoleGuard allowed={[ROLES.STUDENT]}>
        <Button 
          variant="success" 
          onClick={onEnroll} 
          className={styles.enrollBtn}
          disabled={isLoading}
        >
          {isLoading ? "Enrolling..." : "Enroll"}
        </Button>
      </RoleGuard>
    </div>
  );
};

export default CourseCard;
