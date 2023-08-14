import React, {useContext} from 'react';
import {AppContext} from "../../context/AppContext";
import {useParams} from "react-router-dom";

const StudentDetail = () => {
    const { seria } = useParams();
    const [ { students }, ] = useContext(AppContext);
    const student = students.list.find((item) => item.student?.seria_number == seria);

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
            <div className="border rounded mt-16">
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Номер серии
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ФИО
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Общий
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Общий балл
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Модуль 1
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Бал модуль 1
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Модуль 2
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Бал модуль 2 
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Модуль 3
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Бал модуль 3 
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Дата выдачи
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b">
                                <th scope="row" className="px-6 py-4 text-gray-900">
                                    {student.student.seria}{student.student.seria_number}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                    {student.student.ism} {student.student.familiya} {student.student.sharif}
                                </th>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.umumiy}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.umumiy_ball}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_1}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_ball_1}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_2}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_ball_2}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_3}
                                </td>
                                <td className="px-6 py-4 text-gray-900">
                                    {student.student.modul_ball_3}
                                </td>
                                <td className="px-6 py-4 text-gray-900 font-medium">
                                    {student.student.berilgan_sana}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='mt-6'>
                    <img 
                        className='m-auto'
                        src={student.student.certificate} 
                        alt='sertificate'
                    />
                </div>
            </div>
        </div>
    );
};

export default StudentDetail;