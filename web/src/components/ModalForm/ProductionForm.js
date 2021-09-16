import React from 'react';

import Modal from '../Modal/Modal';

function ProductionForm({ stateSetter }) {
  return (
    <Modal>
      <span className="modal-form-title">Adicionar nova produção</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="title">Título</label>
          <input
            className="modal-form-input"
            name="title"
            autoComplete="off"
            type="text"
            placeholder="Como desenvolver uma RESTFul API com Flask"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="category">Categoria</label>
          <select name="category" className="modal-form-input">
            <option value="Bibliográfica">Produção Bibliográfica</option>
            <option value="Técnica">Produção Técnica</option>
            <option value="Artística">Produção Artística</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="type">Tipo</label>
          <select name="type" className="modal-form-input">
            <option value="Artigo Científico">Artigo Científico</option>
            <option value="Livros ou Capítulos">Livros ou Capítulos</option>
            <option value="Programa de computador">Programa de Computador</option>
            <option value="Música">Música</option>
            <option value="Teatro">Peça de Teatro</option>
            <option value="Outro">Outro</option>
          </select>
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

export default ProductionForm;