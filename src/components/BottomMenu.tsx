import { Sheet, IconButton } from '@mui/joy';
import { useMediaQuery } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, People, MonetizationOn, Event } from '@mui/icons-material';

const menuItems = [
  { label: 'Processos', icon: <Home />, path: '/processos' },
  { label: 'Clientes', icon: <People />, path: '/clientes' },
  { label: 'Financeiro', icon: <MonetizationOn />, path: '/financeiro' },
  { label: 'Agenda', icon: <Event />, path: '/agenda' },
];

export default function BottomMenu() {
  const isDesktop = useMediaQuery('(min-width:768px)'); // Detecta se está em desktop
  const navigate = useNavigate();
  const location = useLocation();

  if (isDesktop) return null; // Se for desktop, não exibe o BottomMenu

  return (
    <Sheet
      variant="soft"
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-around',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.surface',
        zIndex: 1200,
        py: 1,
      }}
    >
      {menuItems.map((item) => (
        <IconButton
          key={item.path}
          onClick={() => navigate(item.path)}
          color={location.pathname === item.path ? 'primary' : 'neutral'}
          sx={{ flexDirection: 'column', gap: 0.5 }}
        >
          {item.icon}
          <span style={{ fontSize: 12 }}>{item.label}</span>
        </IconButton>
      ))}
    </Sheet>
  );
}
