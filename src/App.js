import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import StudentDetail from "./components/StudentDetail/StudentDetail";
import Search from "./components/Search/Search";
import {useContext, useEffect} from "react";
import {AppContext} from "./context/AppContext";

function App() {
    const [state, setState] = useContext(AppContext);

    const fetchData = async () => {
        try {
            const response = await fetch("http://astrum.uz/api/date_students");
            const { data } = await response.json();
            setState(prev => ({ ...prev, students: { list: data, isLoading: false } }));
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Routes>
            <Route path="/" element={<Navigate to="/search" replace={true}/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/student/:seria" element={<StudentDetail/>}/>
        </Routes>
    );
}

export default App;
