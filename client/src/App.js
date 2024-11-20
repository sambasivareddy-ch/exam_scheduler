import React from "react";
import { Route, Routes, Outlet } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import AdminLoginForm from "./pages/admin/AdminLoginForm";
import AdminPlanExam from "./pages/admin/AdminPlanExam";
import AdminAddDetails from "./pages/admin/AdminAddDetails";
import Invigilator from "./pages/Invigilator";
import Student from "./pages/Student";

const AdminParent = () => {
    return <Outlet />;
};

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/administrator" element={<AdminParent />}>
                    <Route path="plan-exam" element={<AdminPlanExam />} />
                    <Route path="add-details" element={<AdminAddDetails />} />
                    <Route path="edit-plan" element={<h3>Edit Plan</h3>} />
                    {/* Base Route */}
                    <Route path="" element={<AdminLoginForm />} />
                </Route>
                <Route path="/invigilator" element={<Invigilator />} exact />
                <Route path="/student" element={<Student />} exact />
            </Routes>
        </div>
    );
}

export default App;
