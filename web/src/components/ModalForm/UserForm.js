import React, {useState}  from 'react';

import api from '../../services/api';
import Modal from '../Modal/Modal';

function UserForm({ stateSetter, data, user }){
  const [subtitle, setSubtitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [phone, setPhone] = useState('');
  const [submitValidationMsg, setSubmitValidationMsg] = useState('');

  async function handleSubmit(event){
    event.preventDefault();

    const DATA = {
      "subtitle":subtitle,
      "abstract":abstract,
      "phone":phone
    }

    await api.put(`/user/${user}`, DATA)
      .then((response) => {
        alert('Dados salvos com sucesso')
        stateSetter();
      })
      .catch((err) => {
        console.log(err)
        if (err.response.data) {
          const { error } = err.response.data;
          setSubmitValidationMsg(error);
        }
        else {
          setSubmitValidationMsg('Um erro ocorreu ao salvar as informações');
        }
      })
  }

  return(
    <Modal>
      <span className="modal-form-title">Alterar informações de usuário</span>
      <form className="modal-form">
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="subtitle">Subtítulo</label>
          <input
            className="modal-form-input"
            name="subtitle"
            autoComplete="off"
            type="text"
            value={subtitle}
            onChange={(event) => setSubtitle(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="abstract">Resumo</label>
          <textarea
            className="modal-form-input modal-form-input-textarea"
            name="abstract"
            autoComplete="off"
            maxLength="500"
            value={abstract}
            onChange={(event) => setAbstract(event.target.value)}
          />
        </div>
        <div className="modal-form-fieldset">
          <label className="modal-form-label" htmlFor="phone">Telefone</label>
          <input
            className="modal-form-input"
            name="phone"
            autoComplete="off"
            type="text"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </div>
        <span className="modal-form-error-message">{submitValidationMsg}</span>
        <div className="modal-form-buttons">
          <button onClick={handleSubmit}>Salvar</button>
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