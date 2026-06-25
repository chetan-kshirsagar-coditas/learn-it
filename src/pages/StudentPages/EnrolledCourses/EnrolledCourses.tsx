import { useGetMyCoursesQuery } from "../../../redux/slices/coursesApiSlice";
import styles from "./EnrolledCourses.module.scss";

const EnrolledCourses = () => {
  const { data: courses, isLoading, isFetching } = useGetMyCoursesQuery();
  return (
    <div>EnrolledCourses</div>
  )
}

export default EnrolledCourses