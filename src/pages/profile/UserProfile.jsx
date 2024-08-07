import React, { useState } from 'react'

const UserProfile = ({ user }) => {
  return (
    <>
    <div className="rounded w-50 border m-auto">
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <h3 className="mb-0">Mi perfil</h3>
          </div>
          <div className="col-4 text-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Editar</button>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between align-items-center">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Foto</span>
          </div>
          <div className="col-8 text-start">
            <img src={user.foto} alt={user.nombre} width={100} height={100} className="rounded-circle"/>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Nombre</span>
          </div>
          <div className="col-8 text-start">
            <p className="mb-0">{ user.nombre }</p>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Apellido</span>
          </div>
          <div className="col-8 text-start">
            <p className="mb-0">{ user.apellido }</p>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Nombre de usuario</span>
          </div>
          <div className="col-8 text-start">
            <p className="mb-0">{ user.username }</p>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Correo electrónico</span>
          </div>
          <div className="col-8 text-start">
            <p className="mb-0">{ user.email }</p>
          </div>
        </div>
      </div>
      <div className="container border-bottom">
        <div className="row p-3 mw-75 justify-content-between">
          <div className="col-4 text-start">
            <span className="text-body-tertiary">Roles</span>
          </div>
          <div className="col-8 text-start">
            { user.roles.map( r => (
              <p className="mb-0">{ r }</p>
            )) }
            
          </div>
        </div>
      </div>
    </div>

    {/* Modal */}
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default UserProfile