import React, { useState } from 'react';

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
            placeholder="Técnico em Informática para Internet"
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
            placeholder="Instituto Federal Catarinense"
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

function ProductionForm({ stateSetter }){
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

export { UserForm, EducationForm, ProfessionalForm, ProductionForm, ProjectForm };