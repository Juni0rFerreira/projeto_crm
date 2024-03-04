import React from 'react';
import Sidebar from '../../components/SideBar';
import './clientes.css';
import "@fontsource/inter";

export default function Clientes() {

    return (
        <div>
            <div className='layout'>
                <Sidebar />
                <div className='div-process'>
                    <h1 className='text-process'>Aguarde página em processo de produção...</h1>
                    <h2>-Clientes-</h2>
                </div>
            </div>
        </div>
    );
}
