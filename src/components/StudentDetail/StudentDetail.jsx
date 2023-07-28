import React, {useContext} from 'react';
import {AppContext} from "../../context/AppContext";
import {useParams} from "react-router-dom";

const StudentDetail = () => {
    const { seria } = useParams();
    const [ { students }, ] = useContext(AppContext);
    const student = students.list.find((item) => item.seria_number === seria);


    if(students.isLoading) {
        return (
            <div className="text-center mt-10">
                Loading
            </div>
        );
    }

    if(!student) {
        return (
            <div className="text-center mt-10">
                <h5 className="font-bold text-2xl">Not Found</h5>
            </div>
        )
    }

    return (
        <div className="container mx-auto">
            <div className="mt-16 flex flex-wrap justify-between">
                <div className="">
                    <span className="border rounded p-1 text-sm">{ student.season }</span>
                    <h3 className="font-medium text-2xl my-2">{ student.full_name }</h3>
                    <span className="">{ student.id }{ student.seria }</span>
                </div>
                <div className="mr-auto ml-56">
                    <div>
                        <div>
                            <h4 className="font-bold text-2xl">Progress</h4>
                        </div>
                        <ul>
                            <li className="my-2">{ student.progress_0 }</li>
                            <li className="my-2">{ student.progress_1 }</li>
                            <li className="my-2">{ student.progress_2 }</li>
                            <li className="my-2">{ student.progress_3 }</li>
                            <li className="my-2">{ student.progress_4 }</li>
                            <li className="my-2">{ student.progress_5 }</li>
                        </ul>
                    </div>
                    <div className="mt-10">
                        <div>
                            <h4 className="font-bold text-2xl">Certificates</h4>
                        </div>
                        <ul>
                            { student.certificates.map((item) => (
                                <li className="border rounded my-4 p-2">
                                    <h5 className="font-bold text-lg mb-4">{ item.certificate_name }</h5>
                                    <div className="flex justify-between">
                                        <a
                                            className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline"
                                            href={item.certificate}
                                            target="_blank"
                                        >
                                            Open certificate page</a>
                                        <span className="text-gray-500 text-sm">{ item.certificate_date }</span>
                                    </div>
                                </li>
                            )) }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;