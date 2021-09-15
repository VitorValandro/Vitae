import React from 'react';

import Modal from '../../components/Modal/Modal';

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

function EducationForm({ stateSetter }){
  return(
    <Modal>
      <span className="modal-form-title">Adicionar novo curso</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="name">Nome</label>
          <input
            className="modal-form-input"
            name="name"
            autoComplete="off"
            type="text"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="institution">Instituição</label>
          <input
            className="modal-form-input"
            name="institution"
            autoComplete="off"
            type="text"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="grade">Grau</label>
          <select name="grade" className="modal-form-input">
            <option value="Técnico">Técnico</option>
            <option value="Graduação">Graduação</option>
            <option value="Especialização">Especialização</option>
            <option value="Mestrado">Mestrado</option>
            <option value="Doutorado">Doutorado</option>
            <option value="Complementar">Complementar</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="workload">Carga horária total</label>
          <input
            className="modal-form-input"
            name="workload"
            autoComplete="off"
            type="number"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="start_date">Data de início</label>
          <input
            className="modal-form-input"
            name="start_date"
            autoComplete="off"
            type="date"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="end_date">Data de fim</label>
          <input
            className="modal-form-input"
            name="end_date"
            autoComplete="off"
            type="date"
            required
          />
        </div>
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

export { UserForm, EducationForm };