import React from 'react';

import Modal from '../../components/Modal/Modal';

function UserForm(){
  return(
    <Modal>
      <span className="modal-form-title">Alterar informações de usuário</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" for="name">Nome</label>
          <input
            className="modal-form-input"
            name="name"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" for="subtitle">Subtítulo</label>
          <input
            className="modal-form-input"
            name="subtitle"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" for="abstract">Resumo</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="abstract"
            autoComplete="off"
            maxLength="500"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" for="email">E-mail</label>
          <input
            className="modal-form-input"
            name="email"
            autoComplete="off"
            type="email"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" for="phone">Telefone</label>
          <input
            className="modal-form-input"
            name="phone"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="modal-form-buttons">
          <button>Salvar</button>
          <button>Cancelar</button>
        </div>
      </form>
    </Modal>
  );
}

export { UserForm };