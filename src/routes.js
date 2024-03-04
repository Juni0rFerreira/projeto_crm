import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Estoque from './pages/estoque/estoque';
import Vendedor from './pages/vendedor/vendedor';
import Metas from './pages/metas/metas';
import Alertas from './pages/alertas/alertas';
import Clientes from './pages/clientes/clientes';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/alertas' element={<Alertas />} />
        <Route path='/estoque' element={<Estoque />} />
        <Route path='/vendedor' element={<Vendedor />} />
        <Route path='/metas' element={<Metas />} />
        <Route path='/clientes' element={<Clientes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
