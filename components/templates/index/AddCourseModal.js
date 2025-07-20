import React, {useState} from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import swal from "sweetalert";

config.autoAddCss = false;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCashRegister, faFile, faTag, faUser} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";


const AddCourseModal = ({hideAddCourseModal, getAllData}) => {
    const [title, setTitle] = useState("")

    const addNewCourse = async (event, title) => {
        event.preventDefault()
        const res = await fetch('/api/course', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({title})
        })
        if (res.ok) {
            hideAddCourseModal()
            swal({
                title: "دوره با موفقیت اد شد",
                icon: 'success',
                buttons: 'ok'
            })
            getAllData()

        }
    }


    return (
        <div className={styles.modal_container} id="add-new-course-modal">
            <div className={styles.modal_bg} onClick={hideAddCourseModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اضافه کردن دوره جدید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag}/></span>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="نام دوره"
                            spellCheck="false"
                        />
                    </div>


                    <button type="submit"
                            onClick={(event) => addNewCourse(event, title)} className={styles.update_btn}>
                        اضافه کردن دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCourseModal
