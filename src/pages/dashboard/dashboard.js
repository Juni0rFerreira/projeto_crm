import React, { useState } from 'react';
import Sidebar from '../../components/SideBar';
import './dashboard.css';
import '../../components/SideBar.css';
import '../../components/SearchBar.css';
import SearchBar from '../../components/SearchBar';
import Popup from '../../components/Popup';
import { GoHistory } from "react-icons/go";
import { IoPersonAddOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiAlertCircle } from "react-icons/fi";
import { TiEdit } from "react-icons/ti";

export default function Dashboard() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [groups, setGroups] = useState([]);
  const [currentFormData, setCurrentFormData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleCreateGroupClick = () => {
    setShowPopup(true);
    setEditIndex(null);
  };

  const handleEditClick = (index) => {
    setShowPopup(true);
    setCurrentFormData(groups[index]);
    setEditIndex(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCurrentFormData(null);
    setEditIndex(null);
  };

  const handleFormSubmit = (e, formData) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);

    if (editIndex !== null) {
      // Editar grupo existente
      const updatedGroups = [...groups];
      updatedGroups[editIndex] = formData;
      setGroups(updatedGroups);
    } else {
      // Adicionar novo grupo
      setGroups((prevGroups) => [...prevGroups, formData]);
    }

    setShowPopup(false);
    setCurrentFormData(null);
    setEditIndex(null);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (index) => {
    const updatedGroups = [...groups];
    updatedGroups[index].selected = !updatedGroups[index].selected;
    setGroups(updatedGroups);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const formattedDate = new Date(dateString).toLocaleDateString('pt-BR', options);
    return formattedDate;
  };

  const getStatusBackgroundColor = (status) => {
    switch (status.toLowerCase()) {
      case 'venda feita':
        return '#339DCD';
      case 'contato feito':
        return '#34996F';
      case 'negociação':
        return '#D563FD';
      default:
        return '';
    }
  };

  return (
    <div className='layout'>
      <Sidebar />
      <div className='content'>
        <div className='search-bar'>
          <SearchBar />
        </div>
        <h1 className='text'>Inicio</h1>
        <div className='filterbar'>
          <IoHomeOutline />
          <h3 className='textbar'>Padrão I</h3>
          <button className='button-new-group' onClick={handleCreateGroupClick}>
            Criar Grupo
          </button>
          {showPopup && (
            <Popup
              handleClose={handleClosePopup}
              handleFormSubmit={handleFormSubmit}
              formData={currentFormData}
            />
          )}
        </div>
        <div className="rect-divider">
          <div className="center-content"></div>
          <div className="divider"></div>
        </div>
        <div className='select-group'>
          <IoIosArrowDown />
          <h3 className='text-select-group'>Nome do Grupo</h3>
        </div>
        <div className='container_table'>
          <div className='table-container'>
            <table className='container'>
              <thead className='custom-table'>
                <tr className='custom-table'>
                  <th className='custom-table'>
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>Cliente</th>
                  <th>Etapa</th>
                  <th>Vendedor</th>
                  <th>Comprador</th>
                  <th>Produto</th>
                  <th>Contato</th>
                  <th>Última venda</th>
                  <th>Novo Contato</th>
                  <th>Nota</th>
                </tr>
              </thead>
              <tbody className='custom-table-container'>
                {groups.map((group, index) => (
                  <tr key={index} className='custom-table'>
                    <th className='custom-table'>
                      <input
                        type="checkbox"
                        checked={selectAll || group.selected}
                        onChange={() => handleCheckboxChange(index)}
                      />
                    </th>
                    <td className='cliente-table'>
                      <div className='icon-cliente'>
                        <FiAlertCircle />
                      </div>
                      <div className='text-cliente'>
                        {group.cliente}
                      </div>
                    </td>
                    <td className='status-table' style={{ backgroundColor: getStatusBackgroundColor(group.etapa) }}>
                      {group.etapa}
                    </td>
                    <td className='icon-table'>
                      <IoPersonOutline />
                    </td>
                    <td>
                      <div className='comprador_table'>
                        <div className='text-comprador'>{group.comprador}</div>
                      </div>
                    </td>
                    <td>
                      <div className='produto_table'>
                        <div className='text-produto'>{group.produto}</div>
                      </div>
                    </td>
                    <td>
                      <div className='produto_table'>
                        {group.contato}
                      </div>
                    </td>
                    <td>
                      <div className='data-table'>
                        <div className='text-data'>{formatDate(group.ultimaVenda)}</div>
                      </div>
                    </td>
                    <td>
                      <div className='data-table'>
                        <div className='text-data'>{formatDate(group.novoContato)}</div>
                      </div>
                    </td>
                    <td>
                      <TiEdit onClick={() => handleEditClick(index)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="fixed-icons-container">
          <div className="icons-search">
            <div><GoHistory /></div>
            <div><IoPersonAddOutline /></div>
            <div className='option'><HiOutlineDotsHorizontal /></div>
          </div>
        </div>
      </div>
    </div>
  );
}
