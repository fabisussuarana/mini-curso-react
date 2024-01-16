import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () => { 
    return(
        <Routes>
            <Route path="/pagina-inicial" element={<Button variant='contained' color='secondary'>Teste</Button>} />

            {/* Caso o usuário digite uma url inezistente no site, redireciona para
            a página inicial */}
            <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
        </Routes>
    )
};