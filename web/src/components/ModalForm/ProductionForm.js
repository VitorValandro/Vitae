import React, { useState } from 'react';

import api from '../../services/api';
import Modal from '../Modal/Modal';

function ProductionForm({ stateSetter, user }) {
  const [name, setName] = useState('');
  const [nature, setNature] = useState('Bibliográfica');
  const [publishedOn, setPublishedOn] = useState('');
  const [type, setType] = useState('Artigo Científico');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const DATA = {
      "name": name,
      "nature": nature,
      "published_on": publishedOn,
      "type": type,
      "description": description,
      "date_year": date,
      "user_id": Number(user)
    }

    await api.post(`/user/${user}/info/production/0`, DATA)
      .then((response) => {
        alert('Dados salvos com sucesso')
        stateSetter();
      })
      .catch((err) => {
        if (err.response.data) {
          const { error } = err.response.data;
          setSubmitValidationMsg(error);
        }
        else {
          setSubmitValidationMsg('Um erro ocorreu ao salvar as informações');
        }
      })
  }

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
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Como desenvolver uma RESTFul API com Flask"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="title">Local de publicação</label>
          <input
            className="modal-form-input"
            name="title"
            autoComplete="off"
            type="text"
            value={publishedOn}
            onChange={(event) => setPublishedOn(event.target.value)}
            placeholder="Revista Brasileira de Ciência da Computação"
            required
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="nature">Categoria</label>
          <select 
            name="nature" 
            className="modal-form-input"
            value={nature}
            onChange={(event) => setNature(event.target.value)}
          >
            <option value="Bibliográfica">Produção Bibliográfica</option>
            <option value="Técnica">Produção Técnica</option>
            <option value="Artística">Produção Artística</option>
          </select>
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="type">Tipo</label>
          <select 
            name="type" 
            className="modal-form-input"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
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
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="start_date">Data de publicação</label>
          <input
            className="modal-form-input"
            name="start_date"
            autoComplete="off"
            type="number"
            value={date}
            onChange={(event) => setDate(event.target.value)}
            required
          />
        </div>
        {submitValidationMsg && <span className="modal-form-error-message">{submitValidationMsg}</span>}
        <div className="modal-form-buttons">
          <input type="submit" onClick={handleSubmit} />
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