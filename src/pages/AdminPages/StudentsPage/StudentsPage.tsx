import { useState } from 'react';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader/Loader';
import Modal from '../../../components/Modal/Modal';
import { useGetStudentsQuery } from '../../../redux/slices/authApiSlice';
import styles from './StudentsPage.module.scss';
import type { ModalState } from './StudentsPage.types';


const StudentsPage = () => {
  const [modal, setModal] = useState<ModalState>(null);
  const { data: students, isLoading } = useGetStudentsQuery();

  const closeModal = () => setModal(null);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.StudentsPage}>
      {students?.map((student) => (
        <div key={student.id} className={styles.studentPreview}>
          <span>{student.name}</span>
          <Button onClick={() => setModal({ type: "OPEN_DETAILED_VIEW", data: student })}>
            View
          </Button>
        </div>
      ))}

      {modal?.type === "OPEN_DETAILED_VIEW" && (
        <Modal>
          <div className={styles.studentDetailsCard}>

            <span className={styles.name}><i className="fa-regular fa-circle-user"></i>{modal.data.name}</span>
            <span className={styles.email}><i className="fa-regular fa-envelope"></i>{modal.data.email}</span>

            <div className={styles.enrollments}>

              {modal.data.enrollments?.map((enrollment) => {
                const courseSubmissions = modal.data.submissions?.filter(
                  (sub) => sub.assignment.courseId === enrollment.course.id
                );

                return (
                  <div key={enrollment.id} className={styles.enrollmentBlock}>
                    <span><i className="fa-brands fa-leanpub"></i>{enrollment.course.title}</span> 
                    
                    <div className={styles.submissionsBlock}>
                      {courseSubmissions.length > 0 ? (
                        courseSubmissions.map((submission) => (
                          <span key={submission.id} className={styles.submissionItem}>
                            {submission.assignment.title}
                          </span>
                        ))
                      ) : (
                        <span className={styles.noSubmissionItem}>No submissions yet</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <Button  onClick={closeModal}>Close</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default StudentsPage;
