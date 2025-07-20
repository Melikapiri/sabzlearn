import CoursesItem from "@/components/modules/coursesItem/CoursesItem";
import {useState} from "react";
import AddCourseModal from "./AddCourseModal";
import styles from "@/styles/Course.module.css";


const Course = ({courseData}) => {
    const [allCourses, setAllCourses] = useState(courseData)
    const [showAddCourseModal, setShowAddCourseModal] = useState(false);

    const hideAddCourseModal = () => setShowAddCourseModal(false);

    const getAllData = async () => {

        const res = await fetch(`/api/course`)
        const allData = await res.json()
        setAllCourses(allData)
    }


    return (
        <>
            <section className={styles.courses}>
                <div className={styles.courses_top}>
                    <h2 className={styles.courses_title}>دوره ها</h2>
                    <a
                        href="#"
                        className={styles.new_course_btn}
                        onClick={() => setShowAddCourseModal(true)}
                    >
                        اضافه کردن دوره جدید
                    </a>
                </div>
                <ul className={styles.courses_list}>
                    {
                        allCourses.map(course => <CoursesItem getAllData={getAllData} key={course._id}
                                                              setShowAddCourseModal={setShowAddCourseModal} {...course}
                        />)
                    }

                </ul>
            </section>

            {showAddCourseModal && (
                <AddCourseModal getAllData={getAllData} hideAddCourseModal={hideAddCourseModal}/>
            )}
        </>
    );
};


export default Course;
