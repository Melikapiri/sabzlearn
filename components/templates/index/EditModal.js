import "@fortawesome/fontawesome-svg-core/styles.css";
import {config} from "@fortawesome/fontawesome-svg-core";
import {useState} from "react";

config.autoAddCss = false;
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCashRegister, faTag, faUser} from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/Modal.module.css";

const EditModal = ({defaultTitle,hideEditModal, id, getAllData}) => {

    const [title, setTitle] = useState(defaultTitle)
    const updateCourses = async (event, id) => {
        event.preventDefault()
        const res = await fetch(`/api/course/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title})
        })
        if (res.ok) {
            hideEditModal()
            getAllData()
            swal({
                title: "دوره با موفقیت ادیت شد ",
                buttons: "Ok",
                icon: "success"
            })
        }
    }

    return (
        <div className={styles.modal_container} id="edit-modal">
            <div className={styles.modal_bg} onClick={hideEditModal}></div>
            <div className={styles.modal_content}>

                <h1 className={styles.modal_title}>اطلاعات جدید را وارد کنید</h1>
                <form action="#" className={styles.edit_user_form}>
                    <div className={styles.input_field}>
                        <span><FontAwesomeIcon icon={faTag}/></span>
                        <input
                            type="text"
                            placeholder="نام دوره"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>


                    <button type="submit" onClick={(event) => updateCourses(event, id)} className={styles.update_btn}>
                        اپدیت دوره
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditModal
