import DeleteModal from "@/components/templates/index/DeleteModal";
import EditModal from "@/components/templates/index/EditModal";
import {useState} from "react";
import styles from "@/styles/Course.module.css";

const CoursesItem = ({getAllData,title,_id,}) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const hideEditModal = () => setShowEditModal(false);
    const hideDeleteModal = () => setShowDeleteModal(false);



    return (
        <>
            <li className={styles.courses_item}>
                <div className={styles.courses_img_title}>
                    <img
                        src="/images/courses/PWA.jpg"
                        alt="course-item-img"
                        className={styles.courses_img}
                    />
                    <h5 className={styles.courses_name}>{title}</h5>
                </div>
                <div className={styles.courses_btns}>
                    <a
                        href="#"
                        className={styles.courses_btn_edit}
                        onClick={() => setShowEditModal(true)}
                    >
                        {" "}
                        ویرایش{" "}
                    </a>
                    <a
                        href="#"
                        className={styles.courses_btn_delete}
                        onClick={() => setShowDeleteModal(true)}
                    >
                        {" "}
                        حذف{" "}
                    </a>
                </div>
            </li>
            {showEditModal && <EditModal defaultTitle={title} getAllData={getAllData} id={_id} hideEditModal={hideEditModal}/>}
            {showDeleteModal && <DeleteModal  getAllData={getAllData} id={_id} hideDeleteModal={hideDeleteModal}/>}
        </>
    );
};

export default CoursesItem;
