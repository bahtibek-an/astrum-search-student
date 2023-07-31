import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate(`/student/${input}/`);
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="border rounded p-6">
                <div className="text-center mb-6">
                    <h4 className="text-2xl font-bold">Поиск по серию номеру</h4>
                </div>
                <form action="" method="post" onSubmit={handleSubmit} style={{ width: '500px' }}>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <input
                            type="number"
                            id="default-search"
                            value={input}
                            onChange={handleChange}
                            className="block w-full p-3 text-sm text-black border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Seria Number"
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button 
                            type="submit"
                            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Поиск
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;