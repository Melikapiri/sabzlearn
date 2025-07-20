import Course from "@/components/templates/index/Course";
import connctionDB from '@/data/connectionDB'
import courseModel from "@/models/course";
import React, {useState} from "react";

const index = ({data}) => {
    return <Course courseData={data}/>;
};


export async function getStaticProps() {

    await connctionDB()
    const courseData = await courseModel.find({})

    return {
        props: {
            data: JSON.parse(JSON.stringify(courseData))
        }
    }
}

export default index;
