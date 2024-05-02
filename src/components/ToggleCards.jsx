import { useState } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function ToggleCards() {
  const [alignment, setAlignment] = useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
      sx={{ maxWidth: 293 }}
    >
      <ToggleButton value="xs" aria-label="left aligned" sx={{ minWidth: 50 }}>
        XS
      </ToggleButton>
      <ToggleButton value="s" aria-label="centered" sx={{ minWidth: 50 }}>
        S
      </ToggleButton>
      <ToggleButton value="m" aria-label="right aligned" sx={{ minWidth: 50 }}>
        M
      </ToggleButton>
      <ToggleButton value="l" aria-label="right2 aligned" sx={{ minWidth: 50 }}>
        L
      </ToggleButton>
      <ToggleButton value="xl" aria-label="justified" sx={{ minWidth: 50 }}>
        XL
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleCards;
