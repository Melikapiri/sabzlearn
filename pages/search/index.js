import {useState} from "react";
import coursesItem from "@/components/modules/coursesItem/CoursesItem";
import styles from "@/styles/Course.module.css";
import connectionDB from "@/data/connectionDB";
import courseModel from "@/models/course";
import {useRouter} from "next/router";

const Search = ({data}) => {
    const router = useRouter()

    return (
        <>
            <section className={styles.courses}>
                <div className={styles.courses_top}>
                    <h2 className={styles.courses_title}>نتایج جستجو برای : {router.query.q}</h2>

                    <ul className={styles.courses_list}>
                        {
                            data.map(course => <p>{course.title}</p>)
                        }
                    </ul>
                </div>
            </section>


        </>
    );
};


export async function getServerSideProps(context) {
    await connectionDB()
    const {query} = context
    console.log(query)

    const search = await courseModel.find({title: {$regex: query.q}})
    return {
        props: {
            data: JSON.parse(JSON.stringify(search))
        }
    }

}

export default Search;
