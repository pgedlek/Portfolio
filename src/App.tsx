import * as React from 'react';
import Button from '@mui/material/Button';

const App: React.FC = () => {  // Explicitly type your component
  return (
    <Button variant="contained" color="primary">
      Hello World
    </Button>
  );
};

export default App;
