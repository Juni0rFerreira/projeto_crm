import React, { useState } from 'react';
import './Popup.css';

const AlertPopup = ({ message, onClose }) => (
  <div className='overlay'>
    <div className='alert-popup'>
      <p>{message}</p>
    </div>
  </div>
);

const Popup = ({ handleClose, handleFormSubmit }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [formData, setFormData] = useState({
    cliente: '',
    etapa: '',
    vendedor: '',
    comprador: '',
    produto: '',
    contato: '',
    ultimaVenda: '',
    novoContato: null,
    nota: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'etapa') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      const truncatedValue = value.slice(0, 11);
      setFormData((prevData) => ({
        ...prevData,
        [name]: truncatedValue,
      }));
    }
  };
  const saveToDB = (data) => {
    // Recupera dados existentes do localStorage
    const existingData = JSON.parse(localStorage.getItem('db')) || [];

    // Adiciona novos dados aos dados existentes
    existingData.push(data);

    // Salva os dados atualizados de volta no localStorage
    localStorage.setItem('db', JSON.stringify(existingData));
  };

  const handleFormSubmitWithSave = (e, formData) => {
    e.preventDefault();

    const requiredFields = ['cliente', 'etapa', 'vendedor', 'comprador', 'produto', 'contato'];
    const isFormValid = requiredFields.every((field) => formData[field] !== '');

    if (!isFormValid) {
      setAlertMessage('Por favor, preencha todos os campos obrigatórios antes de salvar.');
      setShowAlert(true);
      return;
    }

    // Executa a lógica original
    handleFormSubmit(e, formData);

    // Salva os dados no localStorage
    saveToDB(formData);

    // Fecha o popup
    handleClose();
  };

  return (
    <div className='popup'>
      <form onSubmit={(e) => handleFormSubmitWithSave(e, formData)}>
        <div className='form-row'>
          <label>
            Cliente:
            <input
              type='text'
              name='cliente'
              placeholder='Empresa'
              value={formData.cliente}
              onChange={handleInputChange}
              maxLength={10} 
            />
            {formData.cliente && formData.cliente.length > 10 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>

          <label>
            Vendedor:
            <input
              type='text'
              name='vendedor'
              placeholder='Vendedor'
              value={formData.vendedor}
              onChange={handleInputChange}
              maxLength={10}
            />
            {formData.vendedor && formData.vendedor.length > 10 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>

          <label>
            Comprador:
            <input
              type='text'
              name='comprador'
              placeholder='Comprador'
              value={formData.comprador}
              onChange={handleInputChange}
              maxLength={10}
            />
            {formData.comprador && formData.comprador.length > 10 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>

          <label>
            Produto:
            <input
              type='text'
              name='produto'
              placeholder='Produto'
              value={formData.produto}
              onChange={handleInputChange}
              maxLength={10}
            />
            {formData.produto && formData.produto.length > 10 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>
        </div>
        <div className='form-row'>
          <label>
            Contato:
            <input
              type='tel'
              name='contato'
              inputMode='numeric'
              placeholder='(DD) 99999-9999'
              pattern="[0-9]*"
              title="Apenas números são permitidos"
              onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, ''))}
              value={formData.contato}
              onChange={handleInputChange}
              maxLength={11}
            />
            {formData.contato && formData.contato.length > 11 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>

          <label>
            Última Venda:
            <input
              type='date'
              name='ultimaVenda'
              value={formData.ultimaVenda}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Novo Contato:
            <input
              type='date'
              name='novoContato'
              value={formData.novoContato === null ? '' : formData.novoContato}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Nota:
            <input
              type='text'
              name='nota'
              placeholder='Obs...'
              value={formData.nota === null ? '' : formData.nota}
              onChange={handleInputChange}
              maxLength={10}
            />
            {formData.nota && formData.nota.length > 10 && (
              <span className='warning-text'>Máximo de 10 caracteres permitidos</span>
            )}
          </label>
        </div>
        <div className='form-label'>
          <label className="etapa-label">
            Etapa
            <div>
              <select
                className="etapa-select"
                name='etapa'
                value={formData.etapa}
                onChange={handleInputChange}
              >
                <option value='Nenhum'>Selecione uma Opção</option>
                <option value='Venda Feita'>Venda Feita</option>
                <option value='Contato Feito'>Contato Feito</option>
                <option value='Negociação'>Negociação</option>
              </select>
            </div>
          </label>
        </div>
        <div className='button-row'>
          <button type='submit' className='green-button'>
            Salvar
          </button>
          <button type='button' onClick={handleClose} className='red-button'>
            Fechar
          </button>
        </div>
      </form>

      {showAlert && (
        <AlertPopup message={alertMessage} onClose={() => setShowAlert(false)} />
      )}
    </div>
  );
};

export default Popup;
