import React from 'react';

import Modal from '../Modal/Modal';

function ProjectForm({ stateSetter }) {
  return (
    <Modal>
      <span className="modal-form-title">Adicionar novo projeto</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="title">Título</label>
          <input
            className="modal-form-input"
            name="title"
            autoComplete="off"
            type="text"
            placeholder="Vitae: Portfólio Pessoal"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="category">Categoria</label>
          <select name="category" className="modal-form-input">
            <option value="Ensino">Ensino</option>
            <option value="Pesquisa">Pesquisa</option>
            <option value="Extensão">Extensão</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="situation">Situação</label>
          <select name="situation" className="modal-form-input">
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="link">Link</label>
          <input
            className="modal-form-input"
            name="link"
            autoComplete="off"
            type="text"
            placeholder="Repositório para mais informações..."
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="description">Descrição</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="description"
            autoComplete="off"
            placeholder="Descreva sua produção..."
            maxLength="500"
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

export default ProjectForm;