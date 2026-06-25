import { useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./CoursesPage.module.scss";
import type { ModalState } from "./CoursesPage.types";
import AddCoursePage from "./components/AddCoursePage/AddCoursePage";
import { useGetCoursesQuery, useGetMyCoursesQuery } from "../../redux/slices/coursesApiSlice";
import Loader from "../../components/Loader/Loader";
import CourseCard from "./components/CourseCard/CourseCard";
import PermissionGuard from "../../hoc/PermissionGuard";
import { ROLES } from "../../types/Roles";

const CoursesPage = () => {
  const [modal, setModal] = useState<ModalState>(null);
  const onClose = () => setModal(null);

  const { data: coursesData, isFetching, isLoading } = useGetCoursesQuery();

  if (isFetching || isLoading) return <Loader />;
  return (
    <div className={styles.CoursesPage}>

      {modal?.type === "ADD_COURSE" && <AddCoursePage onClose={onClose} />}

      <PermissionGuard allowed={[ROLES.ADMIN]}>
        <div className={styles.coursesNav}>
          <Button onClick={() => setModal({ type: "ADD_COURSE" })}>+ Add</Button>
        </div>
      </PermissionGuard>

      <div className={styles.coursesContainer}>
        {
          coursesData?.map(course =>
            <CourseCard
              key={course.title}
              title={course.title}
              description={course.description}
              capacity={course.capacity}
              instructor={course?.instructor?.name}
            />)
        }
      </div>
    </div>
  )
}

export default CoursesPage