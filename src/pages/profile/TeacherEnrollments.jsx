import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const SUBJECTUPDATE_INITIAL = {
  id: "",
  calificacion: 0
}

const TeacherEnrollments = ({ enrollments = [], onUpdate = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectToUpdateState, setSubjectToUpdateState] = useState(SUBJECTUPDATE_INITIAL);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);

  console.log(enrollments)

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleUpdateFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setSubjectToUpdateState({ ...subjectToUpdateState, [name]: files[0] });
    } else {
      setSubjectToUpdateState({ ...subjectToUpdateState, [name]: value });
    }
  };

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in subjectToUpdateState) {
      data.append(key, subjectToUpdateState[key]);
    }
    onUpdate(subjectToUpdateState.id, data);
    setModalUpdateOpen(false);
    setSubjectToUpdateState(SUBJECTUPDATE_INITIAL);
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
            placeholder="Buscar por cursada..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        {/* <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar materia</button> */}
      </div>

      {/* Listado */}
      <div className="flex-grow-1">
        <table className="table align-middle caption-top">
          <caption>Lista de cursadas: Docente</caption>
          <thead>
            <tr>
              <th scope="col">Id. de la cursada</th>
              <th scope="col">Materia</th>
              <th scope="col">Alumno</th>
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
                <td>{u.usuario.nombre} {u.usuario.apellido}</td>
                <td>{u.calificacion}</td>
                <td>{u.aprobada === true ? "Si" : "No"}</td>
                <td className="d-flex gap-2">
                <button type="button" className="btn btn-dark btn-sm" onClick={() => {setModalUpdateOpen(true); setSubjectToUpdateState({
                  id: u.cursadaId,
                  calificacion: u.calificacion
                })}}>
                  Calificar
                </button>
                {/* <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(u.carreraId)}><i className="bi bi-trash"></i></button> */}
                </td>
              </tr>
            )
            })} 
          </tbody>
        </table>
      </div>

      {/* Modal para actualizar materia */}
      <div className={`modal ${modalUpdateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
        <div className="modal-dialog w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detalle de la cursada</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalUpdateOpen(false)}></button>
            </div>
            <div className="modal-body">

            <div className="mb-3">
              <label htmlFor="id" className="form-label">Id. de Cursada</label>
                <input
                  disabled
                  type="text"
                  className="form-control"
                  id="id"
                  name='id'
                  value={subjectToUpdateState.id}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="calificacion" className="form-label">Calificacion</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  className="form-control"
                  id="calificacion"
                  name='calificacion'
                  value={subjectToUpdateState.calificacion}
                  onChange={handleUpdateFormChange}
                />
            </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalUpdateOpen(false)}>Cancelar</button>
              <button type="button" className="btn btn-primary" onClick={handleUpdateFormSubmit}>Guardar</button>
            </div>
          </div>
        </div>
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

export default TeacherEnrollments