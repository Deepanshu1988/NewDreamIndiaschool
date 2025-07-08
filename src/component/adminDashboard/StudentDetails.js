import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StudentDetails = () => {
  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [classFilter, setClassFilter] = useState("");
  const [filteredStudentData, setFilteredStudentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 10;

  const getStudentData = async () => {
    const response = await axios.get(
      `http://localhost:4400/api/auth/getAllStudent`
    );
    const data = response.data;
    console.log(data);
    if (classFilter) {
      const filteredData = data.filter(
        (item) => item.class_for_admission === classFilter
      );
      setFilteredStudentData(filteredData);
    } else {
      setFilteredStudentData(data);
    }
  };

  useEffect(() => {
    getStudentData();
  }, [classFilter]);

  const handleClassFilterChange = (event) => {
    const selectedClass = event.target.value;
    setClassFilter(selectedClass);
    setCurrentPage(1);
  };

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudentData.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  console.log(currentStudents);

  const handleMoreDetails = (id) => {
    navigate(`/view-student-data/${id}`);
  };

  const handleReceipt = (id) => {
    navigate(`/view-student-receipt/${id}`);
  };
  const downloadBirthCertificate = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:4400/api/auth/getStudentBirthCertificateviaId/${id}`,
        {
          responseType: "blob", // Request binary data
        }
      );

      // Create a blob from the response data
      const blob = new Blob([response.data], { type: "application/pdf" });

      // Create a URL for the blob
      const url = window.URL.createObjectURL(blob);

      // Open the URL in a new tab
      window.open(url, "_blank");

      // Release the URL when it's no longer needed to free up memory
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <h1 class="text-center">Students Details</h1>
        <div class="container mt-5 mb-5">
          <table>
            <thead>
              <tr>
                <th class="header-cell">
                  <select
                    id="class-filter"
                    value={classFilter}
                    onChange={handleClassFilterChange}
                  >
                    <option value="">All</option>
                    <option value="Nursery">Nursery</option>
                    <option value="KG-Lower">KG-Lower</option>
                    <option value="KG-Upper">KG-Upper</option>
                  </select>
                </th>
                <th className="header-cell">Form No.</th>
                <th class="header-cell">Firstname</th>
                <th class="header-cell">Lastname</th>
                <th class="header-cell">Religion</th>
                <th class="header-cell">Date of Birth</th>
                <th className="header-cell">Receipt No.</th>
                <th class="header-cell">More Details</th>
              </tr>
            </thead>
            <tbody>
              {currentStudents?.map((item, index) => (
                <>
                  <tr key={index}>
                    <td>{item.class_for_admission}</td>
                    <td>{item.pay_id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.Religion}</td>
                    <td>{item.date_of_birth}</td>
                    <td>{item.receipt}</td>
                    <td>
                      <div className="d-flex justify-content-evenly">
                        <button
                          class="btn btn-info"
                          // style={{ backgroundColor: "#ff3f34" }}
                          onClick={() => handleMoreDetails(item.id)}
                        >
                          View Details
                        </button>
                        <button
                          class="btn btn-warning"
                          // style={{ backgroundColor: "#ff3f34" }}
                          onClick={() => handleReceipt(item.id)}
                        >
                          View Reciept
                        </button>
                        <button
                          class="btn btn-success"
                          // style={{ backgroundColor: "#ff3f34" }}
                          onClick={() => downloadBirthCertificate(item.id)}
                        >
                          View Birth Certificate
                        </button>
                      </div>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
          <div className="pagination-section mt-3">
            <div className="pagination">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="btn btn-danger"
              >
                Previous
              </button>
              <span className="fs-4 mx-3">{currentPage}</span>
              <button
                onClick={nextPage}
                className="btn btn-success"
                disabled={currentStudents.length < studentsPerPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default StudentDetails;
const Container = styled.div`
  height: 100vh;
  .headDiv {
    background: #ff3f34;
    padding: 1rem 0;
    color: white;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    border: 1px solid #ccc;
    background-color: #ffffff6b;
  }

  thead {
    background-color: red;
  }

  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #f2f2f2;
  }

  th.header-cell {
    background-color: #00b894;
    /* Change to your preferred color */
    color: white;
  }
  .pagination-section {
    float: right;
  }
`;
