import logo from './logo.svg';
import './App.css';
import { Avatar, Button, Typography } from '@material-tailwind/react';

function App() {
  const img = 'https://thumb.viva.co.id/media/frontend/thumbs3/2023/11/01/6541e20473772-cristiano-ronaldo-meminta-suporter-lawan-tutup-mulut_1265_711.jpg'
  return (
    <div className='w-full px-10'>
      <div className="flex items-center gap-4 mt-10">
      <Avatar
        src={img}
        alt="avatar"
        withBorder={true}
        className="p-0.5"
        size='xxl'
      />
        <div>
          <Typography variant="h6">
            Cristiano Ronaldo  
          </Typography>
          <Typography variant="small" color="gray" className="font-normal">
            footballer
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
