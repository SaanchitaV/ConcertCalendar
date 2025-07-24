import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function Navbar() {

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
<AppBar position="static" sx={{ backgroundColor: '#000', color: '#fff' }}>
<Toolbar className="flex justify-between">
<Typography variant="h6" component="div">

          Concert Calendar
</Typography>
<div className="flex items-center space-x-4">
{/* <IconButton onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} color="inherit">

            {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>
<img src="/profile-icon.svg" alt="Profile" className="w-8 h-8 rounded-full" /> */}
</div>
</Toolbar>
</AppBar>

  );

}
 