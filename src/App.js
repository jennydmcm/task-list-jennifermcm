import Playlist from "./components/Playlist";
import "./styles.css";
import { Box, ThemeProvider } from '@mui/system';

export default function App() {
  return (

    <div className="App">
      <Box sx={{ margin: '0', bgcolor: '#007FFF', height: '12vh' }}>
        <h1 style={{ color: 'white', fontSize: '100px' }}> Task Management App</h1>
      </Box>

      <Playlist />
    </div>
  );
}
