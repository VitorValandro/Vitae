import React from 'react';

import Modal from '../Modal/Modal';

function ProfessionalForm({ stateSetter }) {
  return (
    <Modal>
      <span className="modal-form-title">Adicionar nova experiência profissional</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="company">Empresa</label>
          <input
            className="modal-form-input"
            name="company"
            autoComplete="off"
            type="text"
            placeholder="Vitae Software LTDA"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="role">Posição</label>
          <input
            className="modal-form-input"
            name="role"
            autoComplete="off"
            type="text"
            placeholder="Desenvolvedor de Software"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="description">Descrição</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="description"
            autoComplete="off"
            placeholder="Descreva suas atividades enquanto estava neste emprego..."
            maxLength="500"
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="workload">Carga horária semanal</label>
          <input
            className="modal-form-input"
            name="workload"
            autoComplete="off"
            type="number"
            placeholder="40"
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

export default ProfessionalForm;