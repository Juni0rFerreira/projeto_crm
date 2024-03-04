import React from 'react';
import Sidebar from '../../components/SideBar';
import './vendedor.css';
import "@fontsource/inter";

export default function Vendedor() {

    return (
        <div>
            <div className='layout'>
                <Sidebar />
                <div className='div-process'>
                    <h1 className='text-process'>Aguarde página em processo de produção...</h1>
                    <h2>-Vendedor-</h2>
                </div>
            </div>
        </div>
    );
}
