import { useEffect, useState } from 'react';
import { getEmployeeType, getEmployees } from "../Services/api";
import './Employee.css'
import NavBar from '../Component/Navbar/NavBar'
import Footer from '../Component/Hero/Footer'

const IMAGE_BASE_URL = "https://ward10admin.lmc.gov.np/api/uploads/"; 

function Employee(){
    const [categories, setCategories] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState(2);

    useEffect(() => {
        async function fetchCategories(){
            try {
                const data = await getEmployeeType();
                setCategories(data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategories();
    }, []);

    useEffect(() => {
        async function fetchEmployees(){
            try {
                const data = await getEmployees();
                setEmployees(data || []);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchEmployees();
    }, []);

    const filteredEmployees = employees.filter(
        employee => employee.category.id === selectedCategory
    );

    if (loading) return <p>Loading...</p>;

    return (
        <>
        <NavBar/>

        <div className='top-container'>
        <p>वडा टोली</p>
        <h1>जनप्रतिनिधि र कर्मचारीहरू</h1>
        <p>वडा कार्यालयमा कार्यरत निर्वाचित प्रतिनिधि र कर्मचारीहरूको परिचय।</p>
        </div>
        <div className='category-button'>
            {categories.map(category => (
                <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? 'active' : ''}
                >
                    {category.name}
                </button>
            ))}
        </div>

        <div className='employee-container'>
            {filteredEmployees.map(employee => (
                <div className='employee-card' key={employee.id}>
                    <img
                        src={`${IMAGE_BASE_URL}${employee.photo.fileName}`}
                        alt={employee.name}
                    />
                    <h4>{employee.name}</h4>
                    <p>{employee.title}</p>
                    <p>{employee.contact}</p>
                </div>
            ))}
        </div>

        <Footer/>
        </>
    );
}

export default Employee;