import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'

const ENROLLMENT_INITIAL = {
  email: "",
  materiaId: "",
  docenteId: ""
}

const ENROLLMENTUPDATE_INITIAL = {
  email: "",
  materiaId: "",
  docenteId: ""
}

const ENROLLMENT_DETAIL = {
  id: "",
  docente: "",
  alumno: "",
  calificacion: 1,
  aprobada: false
}

const Enrollments = ({ enrollments = [], subjects= [], onAdd = () => {}, onUpdate = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [enrollmentToCreateState, setEnrollmentToCreateState] = useState(ENROLLMENT_INITIAL);
  const [enrollmentToUpdateState, setEnrollmentToUpdateState] = useState(ENROLLMENT_DETAIL);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);

  console.log(enrollmentToUpdateState)

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setEnrollmentToCreateState({ ...enrollmentToCreateState, [name]: files[0] });
    } else {
      setEnrollmentToCreateState({ ...enrollmentToCreateState, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in enrollmentToCreateState) {
      data.append(key, enrollmentToCreateState[key]);
    }
    onAdd(data);
    setModalCreateOpen(false);
    setEnrollmentToCreateState(SUBJECT_INITIAL);
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
      <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar cursada</button>
    </div>

    {/* Listado */}
    <div className="flex-grow-1">
      <table className="table align-middle caption-top">
        <caption>Lista de cursadas</caption>
        <thead>
          <tr>
            <th scope="col">Id. de la cursada</th>
            <th scope="col">Materia</th>
            <th scope="col">Docente</th>
            <th scope="col">Alumno</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((u) => {
            return (
              <tr key={u.cursadaId}>
              <td>{u.cursadaId}</td>
              <td>{u.materia.nombre}</td>
              <td>{u.docente.nombre} {u.docente.apellido}</td>
              <td>{u.usuario.nombre} {u.usuario.apellido}</td>
              <td className="d-flex gap-2">
              <button type="button" className="btn btn-dark btn-sm" onClick={() => {setModalUpdateOpen(true); setEnrollmentToUpdateState({
                id: u.cursadaId,
                docente: `${u.docente.nombre} ${u.docente.apellido}`,
                alumno: `${u.usuario.nombre} ${u.usuario.apellido}`,
                calificacion: u.calificacion,
                aprobada: u.aprobada
              })}}>
                Ver detalle
              </button>
              {/* <button type="button" className="btn btn-danger btn-sm" onClick={() => onDelete(u.carreraId)}><i className="bi bi-trash"></i></button> */}
              </td>
            </tr>
          )
          })} 
        </tbody>
      </table>
    </div>

    {/* Modal para crear materia */}
    <div className={`modal ${modalCreateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar cursada</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalCreateOpen(false)}></button>
          </div>
          <div className="modal-body">

          {/* <div className="mb-3">
            <label htmlFor="materiaId" className="form-label">Id. de Materia</label>
              <input
                type="text"
                className="form-control"
                id="materiaId"
                name='materiaId'
                value={enrollmentToCreateState.materiaId}
                onChange={handleFormChange}
              />
          </div> */}

          <div className="mb-3">
            <label htmlFor="materiaId" className="form-label">Seleccionar materia</label>
            <select 
              className="form-select"
              aria-label="Materias Select" 
              name="materiaId"
              value={enrollmentToCreateState.materiaId}
              onChange={handleFormChange}>
              {subjects.map(r => (
                <option key={r.materiaId} value={r.materiaId}>{r.nombre}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="docenteId" className="form-label">Id. de Docente</label>
              <input
                type="text"
                className="form-control"
                id="docenteId"
                name='docenteId'
                value={enrollmentToCreateState.docenteId}
                onChange={handleFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email del Alumno</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name='email'
                value={enrollmentToCreateState.email}
                onChange={handleFormChange}
              />
          </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalCreateOpen(false)}>Cancelar</button>
            <button type="button" disabled={Object.values(enrollmentToCreateState).some(property => property === "")} className="btn btn-primary" onClick={handleFormSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </div>

    {/* Modal para ver detalle de la materia */}
    <div className={`modal ${modalUpdateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalle de la carrera</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalUpdateOpen(false)}></button>
          </div>
          <div className="modal-body">

          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Id. Cursada</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="nombre"
                name='nombre'
                value={enrollmentToUpdateState.id}
                // onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="carreraId" className="form-label">Docente</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="carreraId"
                name='carreraId'
                value={enrollmentToUpdateState.docente}
                // onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="carreraId" className="form-label">Alumno</label>
              <input
                disabled
                type="text"
                className="form-control"
                id="carreraId"
                name='carreraId'
                value={enrollmentToUpdateState.alumno}
                // onChange={handleUpdateFormChange}
              />
          </div>

          <div className='d-flex gap-4'>
            <div className="mb-3">
              <label htmlFor="carreraId" className="form-label">Calificación</label>
                <input
                  disabled
                  type="number"
                  className="form-control"
                  id="carreraId"
                  name='carreraId'
                  value={enrollmentToUpdateState.calificacion}
                  // onChange={handleUpdateFormChange}
                />
            </div>

            <div className="mb-3 d-flex flex-row-reverse justify-content-between w-25">
              <label htmlFor="carreraId" className="form-label">Aprobada</label>
                <input
                  disabled
                  type="checkbox"
                  className="form-check-input"
                  id="carreraId"
                  name='carreraId'
                  checked={enrollmentToUpdateState.aprobada}
                  value={enrollmentToUpdateState.aprobada}
                  // onChange={handleUpdateFormChange}
                />
            </div>
          </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalUpdateOpen(false)}>Cerrar</button>
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

export default Enrollments