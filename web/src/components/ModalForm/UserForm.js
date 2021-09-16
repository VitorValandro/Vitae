import React  from 'react';

import Modal from '../Modal/Modal';

function UserForm({ stateSetter }){
  return(
    <Modal>
      <span className="modal-form-title">Alterar informações de usuário</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="name">Nome</label>
          <input
            className="modal-form-input"
            name="name"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="subtitle">Subtítulo</label>
          <input
            className="modal-form-input"
            name="subtitle"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="abstract">Resumo</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="abstract"
            autoComplete="off"
            maxLength="500"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="email">E-mail</label>
          <input
            className="modal-form-input"
            name="email"
            autoComplete="off"
            type="email"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="phone">Telefone</label>
          <input
            className="modal-form-input"
            name="phone"
            autoComplete="off"
            type="text"
          />
        </div>
        <span className="modal-form-error-message">Este e-mail já existe</span>
        <div className="modal-form-buttons">
          <button>Salvar</button>
          <button onClick={(event) => {
            /* IMPLEMENTAR: limpar dados do formulário antes de fechar */
            event.preventDefault();
            stateSetter();
          }}>
            Cancelar
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default UserForm;