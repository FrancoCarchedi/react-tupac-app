import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const StudentEnrollments = ({ enrollments = [] }) => {
  const [searchTerm, setSearchTerm] = useState('');

  console.log(enrollments)

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const filteredData = enrollments.filter((item) =>
    item.cursadaId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [currentPage, setCurrentPage] = useState(0);
  const perPage = 5;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * perPage;
  const endIndex = startIndex + perPage;
  const paginatedData = filteredData.slice(startIndex, endIndex);


  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <div className='input-group w-auto'>
          <span className="input-group-text"><i className="bi bi-search"></i></span>
          <input
            type="text"
            id="inputSearch"
            className="form-control"
            placeholder="Buscar..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar materia</button> */}
      </div>

      {/* Listado */}
      <div className="flex-grow-1">
        <table className="table align-middle caption-top">
          <caption>Lista de cursadas: Alumno</caption>
          <thead>
            <tr>
              <th scope="col">Id. de la cursada</th>
              <th scope="col">Materia</th>
              <th scope="col">Docente</th>
              <th scope="col">Calificación</th>
              <th scope="col">Aprobada</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((u) => {
              return (
                <tr key={u.cursadaId}>
                <td>{u.cursadaId}</td>
                <td>{u.materia.nombre}</td>
                <td>{u.docente.nombre} {u.docente.apellido}</td>
                <td>{u.calificacion}</td>
                <td>{u.aprobada === true ? "Si" : "No"}</td>
                {/* <td className="d-flex gap-2">
                <button type="button" className="btn btn-dark btn-sm" onClick={() => {setModalUpdateOpen(true); setSubjectToUpdateState({
                  id: u.cursadaId,
                  calificacion: u.calificacion
                })}}>
                  Calificar
                </button>
                <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(u.carreraId)}><i className="bi bi-trash"></i></button>
                </td> */}
              </tr>
            )
            })} 
          </tbody>
        </table>
      </div>

      {/* paginación va aca */}
      <nav aria-label="Page navigation" className="">
        <ReactPaginate
          containerClassName={'pagination justify-content-center'}
          activeClassName={'active'}
          previousClassName='page-item'
          previousLinkClassName='page-link'
          nextClassName='page-item'
          nextLinkClassName='page-link'
          pageClassName='page-item'
          pageLinkClassName='page-link'
          nextLabel={"Siguiente"}
          previousLabel={"Anterior"}
          pageCount={Math.ceil(filteredData.length / perPage)}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          />
      </nav>

    </>
  )
}

export default StudentEnrollments