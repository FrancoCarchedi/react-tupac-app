import React, { useState } from 'react'

const SUBJECT_INITIAL = {
  nombre: "",
  carreraId: ""
}

const SUBJECTUPDATE_INITIAL = {
  id: "",
  nombre: "",
  carreraId: ""
}

const Subjects = ({ subjects = [], onAdd = () => {}, onUpdate = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subjectToCreateState, setSubjectToCreateState] = useState(SUBJECT_INITIAL);
  const [subjectToUpdateState, setSubjectToUpdateState] = useState(SUBJECTUPDATE_INITIAL);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);

  console.log('subjectToUpdateState', subjectToUpdateState);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setSubjectToCreateState({ ...subjectToCreateState, [name]: files[0] });
    } else {
      setSubjectToCreateState({ ...subjectToCreateState, [name]: value });
    }
  };

  const handleUpdateFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setSubjectToUpdateState({ ...subjectToUpdateState, [name]: files[0] });
    } else {
      setSubjectToUpdateState({ ...subjectToUpdateState, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in subjectToCreateState) {
      data.append(key, subjectToCreateState[key]);
    }
    onAdd(data);
    setModalCreateOpen(false);
    setSubjectToCreateState(SUBJECT_INITIAL);
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

  const filteredData = subjects.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
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
        <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar materia</button>
      </div>

      {/* Listado */}
      <div className="flex-grow-1">
        <table className="table align-middle caption-top">
          <caption>Lista de materias</caption>
          <thead>
            <tr>
              <th scope="col">Id. de la materia</th>
              <th scope="col">Nombre</th>
              <th scope="col">Carrera</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((u) => {
              return (
                <tr key={u.materiaId}>
                <td>{u.materiaId}</td>
                <td>{u.nombre}</td>
                <td>{u.carrera.nombre}</td>
                <td className="d-flex gap-2">
                <button type="button" className="btn btn-dark btn-sm" onClick={() => {setModalUpdateOpen(true); setSubjectToUpdateState({
                  id: u.materiaId,
                  nombre: u.nombre,
                  carreraId: u.carrera.carreraId
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
              <h5 className="modal-title">Agregar materia</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalCreateOpen(false)}></button>
            </div>
            <div className="modal-body">

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name='nombre'
                  value={subjectToCreateState.nombre}
                  onChange={handleFormChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="carreraId" className="form-label">Id. de Carrera</label>
                <input
                  type="text"
                  className="form-control"
                  id="carreraId"
                  name='carreraId'
                  value={subjectToCreateState.carreraId}
                  onChange={handleFormChange}
                />
            </div>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalCreateOpen(false)}>Cancelar</button>
              <button type="button" disabled={Object.values(subjectToCreateState).some(property => property === "")} className="btn btn-primary" onClick={handleFormSubmit}>Guardar</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para actualizar materia */}
      <div className={`modal ${modalUpdateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
        <div className="modal-dialog w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Detalle de la carrera</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalUpdateOpen(false)}></button>
            </div>
            <div className="modal-body">

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name='nombre'
                  value={subjectToUpdateState.nombre}
                  onChange={handleUpdateFormChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="carreraId" className="form-label">Id. de Carrera</label>
                <input
                  type="text"
                  className="form-control"
                  id="carreraId"
                  name='carreraId'
                  value={subjectToUpdateState.carreraId}
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

    </>
  )
}

export default Subjects