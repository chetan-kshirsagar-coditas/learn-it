import { useForm } from "react-hook-form"
import Button from "../../../../components/Button/Button"
import Modal from "../../../../components/Modal/Modal"
import Form from "../../../../Form/Form"
import type { AddCoursePageProps, CourseData } from "./AddCoursePage.types"
import { zodResolver } from "@hookform/resolvers/zod"
import { ZCourseData } from "./AddCoursePage.schema"
import FormInput from "../../../../Form/FormInput/FormInput"
import styles from "./AddCoursesPage.module.scss"
import { useAddCourseMutation } from "../../../../redux/slices/coursesApiSlice"
import { snack } from "../../../../components/Snackbar/hooks/useSnackbarStore"

const AddCoursePage = ({ onClose }: AddCoursePageProps) => {
  const defaultValues: CourseData = {
    title: "",
    description: "",
    instructorId: "",
    capacity: 1,
    isElective: true
  }
  const methods = useForm<CourseData>({ defaultValues, resolver: zodResolver(ZCourseData) });

  const [addCourse, { isLoading }] = useAddCourseMutation();

  const onSubmit = async (data: CourseData) => {
    try {
      await addCourse(data).unwrap();
      snack.success("Course added successfully");
      onClose();
    } catch (e: any) {
      snack.error(e.data.error.message || "Something went wrong");
    }
  }

  return (
    <Modal>
      <div>
        <Form methods={methods} onSubmit={onSubmit}>
          <span className={styles.formTitle}>Add Course</span>
          <FormInput<CourseData>
            label="Title"
            name="title"
            placeholder="Enter title here"
          />
          <FormInput<CourseData>
            label="Description"
            name="description"
            placeholder="Enter description here"
          />
          <FormInput<CourseData>
            label="Instructor"
            name="instructorId"
            placeholder="Enter instructor here"
          />
          <FormInput<CourseData>
            label="Capacity"
            name="capacity"
            placeholder="Enter capacity here"
            type="number"
          />
          <div className={styles.formBtnContainer}>
            <Button type="submit">{isLoading ? "Adding..." : "Add"}</Button>
            <Button type="button" variant="secondary" onClick={onClose}>Cancel</Button>
          </div>
        </Form>
      </div>
    </Modal>
  )
}

export default AddCoursePage