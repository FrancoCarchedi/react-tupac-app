import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const CAREER_INITIAL = {
  nombre: "",
  descripcion: "",
  sigla: "",
  titulo: "",
  duracion: 0,
  portrait: null,
  plan: null
}

const CAREERUPDATE_INITIAL = {
  id: "",
  nombre: "",
  descripcion: "",
  sigla: "",
  titulo: "",
  duracion: 0,
  portrait: null,
  plan: null
}

const Careers = ({ careers = [], onUpdate = () => {}, onAdd = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [careerToCreateState, setCareerToCreateState] = useState(CAREER_INITIAL);
  const [careerToUpdateState, setCareerToUpdateState] = useState(CAREERUPDATE_INITIAL);
  const [modalCreateOpen, setModalCreateOpen] = useState(false);
  const [modalUpdateOpen, setModalUpdateOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  const handleFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setCareerToCreateState({ ...careerToCreateState, [name]: files[0] });
    } else {
      setCareerToCreateState({ ...careerToCreateState, [name]: value });
    }
  };

  const handleUpdateFormChange  = (e) => {
    const { name, value, files } = e.target;
    if (name === 'portrait' || name === 'plan') {
      setCareerToUpdateState({ ...careerToUpdateState, [name]: files[0] });
    } else {
      setCareerToUpdateState({ ...careerToUpdateState, [name]: value });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in careerToCreateState) {
      data.append(key, careerToCreateState[key]);
    }
    onAdd(data);
    setModalCreateOpen(false);
    setCareerToCreateState(CAREER_INITIAL);
  };

  const handleUpdateFormSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in careerToUpdateState) {
      data.append(key, careerToUpdateState[key]);
    }
    onUpdate(careerToUpdateState.id, data);
    setModalUpdateOpen(false);
    setCareerToUpdateState(CAREERUPDATE_INITIAL);
  };

  const filteredData = careers.filter((item) =>
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
      <button type="button" className="btn btn-primary" onClick={() => setModalCreateOpen(true)}>Agregar carrera</button>
    </div>

    <div className="flex-grow-1">
    <table className="table align-middle caption-top">
      <caption>Lista de carreras</caption>
      <thead>
        <tr>
          <th scope="col">Id. de la carrera</th>
          <th scope="col">Nombre</th>
        </tr>
      </thead>
      <tbody>
        {paginatedData.map((u) => {
          return (
            <tr key={u.carreraId}>
            <td>{u.carreraId}</td>
            <td>{u.nombre}</td>
            <td className="d-flex gap-2">
            <button type="button" className="btn btn-dark btn-sm" onClick={() => {setModalUpdateOpen(true); setCareerToUpdateState({
              id: u.carreraId,
              nombre: u.nombre,
              sigla: u.sigla,
              titulo: u.titulo,
              descripcion: u.descripcion,
              duracion: u.duracion,
              plan: u.plan,
              portrait: u.portada
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

    {/* Modal para crear carrera */}
    <div className={`modal ${modalCreateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Agregar carrera</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalCreateOpen(false)}></button>
          </div>
          <div className="modal-body">

          <div className='d-flex gap-4'>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name='nombre'
                  value={careerToCreateState.nombre}
                  onChange={handleFormChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="sigla" className="form-label">Sigla</label>
                <input
                  type="text"
                  className="form-control"
                  id="sigla"
                  name='sigla'
                  value={careerToCreateState.sigla}
                  onChange={handleFormChange}
                />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="duracion" className="form-label">Duración</label>
              <input
                type="number"
                className="form-control"
                id="duracion"
                name='duracion'
                value={careerToCreateState.duracion}
                onChange={handleFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
              <input
                type="textarea"
                className="form-control"
                id="titulo"
                name='titulo'
                value={careerToCreateState.titulo}
                onChange={handleFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="portrait" className="form-label">Portada</label>
              <input
                type="file"
                className="form-control"
                id="portrait"
                name="portrait"
                onChange={handleFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="plan" className="form-label">Plan de estudio</label>
              <input
                type="file"
                className="form-control"
                id="plan"
                name="plan"
                onChange={handleFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripcion</label>
              <textarea
                type="textarea"
                className="form-control"
                rows="3"
                style={{ resize: 'none' }}
                id="descripcion"
                name='descripcion'
                value={careerToCreateState.descripcion}
                onChange={handleFormChange}
              />
          </div>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalCreateOpen(false)}>Cancelar</button>
            <button type="button" disabled={Object.values(careerToCreateState).some(property => property === "")} className="btn btn-primary" onClick={handleFormSubmit}>Guardar</button>
          </div>
        </div>
      </div>
    </div>

    {/* Modal para ver y editar  */}
    <div className={`modal ${modalUpdateOpen == true? `d-flex` : `d-none`}`} tabIndex="-1">
      <div className="modal-dialog w-100">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Detalle de la carrera</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setModalUpdateOpen(false)}></button>
          </div>
          <div className="modal-body">

          <div className='d-flex gap-4'>
            <div className="mb-3">
              <label htmlFor="nombre" className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  name='nombre'
                  value={careerToUpdateState.nombre}
                  onChange={handleUpdateFormChange}
                />
            </div>

            <div className="mb-3">
              <label htmlFor="sigla" className="form-label">Sigla</label>
                <input
                  type="text"
                  className="form-control"
                  id="sigla"
                  name='sigla'
                  value={careerToUpdateState.sigla}
                  onChange={handleUpdateFormChange}
                />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="duracion" className="form-label">Duración</label>
              <input
                type="number"
                className="form-control"
                id="duracion"
                name='duracion'
                value={careerToUpdateState.duracion}
                onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Titulo</label>
              <input
                type="textarea"
                className="form-control"
                id="titulo"
                name='titulo'
                value={careerToUpdateState.titulo}
                onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="portrait" className="form-label">Portada</label>
              <input
                type="file"
                className="form-control"
                id="portrait"
                name="portrait"
                onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="plan" className="form-label">Plan de estudio</label>
              <input
                type="file"
                className="form-control"
                id="plan"
                name="plan"
                onChange={handleUpdateFormChange}
              />
          </div>

          <div className="mb-3">
            <label htmlFor="descripcion" className="form-label">Descripcion</label>
              <textarea
                type="textarea"
                className="form-control"
                rows="3"
                style={{ resize: 'none' }}
                id="descripcion"
                name='descripcion'
                value={careerToUpdateState.descripcion}
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

export default Careers