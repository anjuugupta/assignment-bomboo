import * as React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import './videoplayer.css';

export default function VideoPlayer() {
  return (
    <Box className='videowrap'
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
      <Card component="li" sx={{ minWidth: 450, flexGrow: 1, minHeight: 300 }}>
        <CardMedia>
          <video
            controls
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ width: '100%', height: '50%' }}
          >
            <source
              src="https://assets.codepen.io/6093409/river.mp4"
              type="video/mp4"
            />
          </video>
        </CardMedia>
      </Card>
    </Box>
  );
}
