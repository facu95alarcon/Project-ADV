import { Box, Typography, ButtonGroup, IconButton, Sheet } from '@mui/joy';
import { Home, People, MonetizationOn, Event } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { label: 'Processos', icon: <Home />, path: '/processos' },
  { label: 'Clientes', icon: <People />, path: '/clientes' },
  { label: 'Financeiro', icon: <MonetizationOn />, path: '/financeiro' },
  { label: 'Agenda', icon: <Event />, path: '/agenda' },
];

export default function TopMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Sheet
      variant="soft"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1200,
       // px: 2,
       // py: 1,
       // borderBottom: '1px solid',
       // borderColor: 'divider',
       //backgroundColor: 'rgba(218, 165, 32, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'auto',
        borderRadius: 'sm',

      }}
    >
   

      <ButtonGroup variant="plain" color="neutral" size="sm" sx={{ backgroundColor: 'rgba(89, 110, 129, 0.75)'}}  >
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
              <IconButton
                  sx={{ padding: 1 }}
              key={item.path}
              variant={isActive ? 'solid' : 'plain'}
              color={isActive ? 'primary' : 'neutral'}
              onClick={() => navigate(item.path)}
              title={item.label}
            >
              {item.icon}{item.label}
            </IconButton>
          );
        })}
      </ButtonGroup>
    </Sheet>
  );
}