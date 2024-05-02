import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ColorPicker } from './color-utils';
import Iconify from './iconify';
import ToggleCards from './ToggleCards';

const COLOR_OPTIONS = ['#000000', '#FFFFFF', '#00B8D9', '#22C55E', '#FFAB00', '#FF5630'];

function ProductCard({ product }) {
  const [selected, setSelected] = useState(COLOR_OPTIONS[0]);

  const { id, name, coverUrl, price, title } = product;

  const onSelected = useCallback((inputValue) => {
    setSelected(inputValue);
  }, []);

  return (
    <Card sx={{ p: 3, maxWidth: 1000 }}>
      <Stack direction="row" gap={5} alignItems="center" justifyContent="center">
        <Box>
          <img alt={name} src={coverUrl} width={350} />
        </Box>

        <Stack spacing={2.5} sx={{ p: 3, pt: 2, width: '50%' }}>
          <h1 className="card-title">{title}</h1>
          <Stack direction="row" alignItems="center" gap={1}>
            <Iconify icon="emojione:star" width={16} />
            <Iconify icon="emojione:star" width={16} />
            <Iconify icon="emojione:star" width={16} />
            <Iconify icon="emojione:star" width={16} />
            <Iconify icon="emojione:star" width={16} />
            <p className="product-rating">3.5</p>
          </Stack>
          <Box spacing={1}>
            <p className="select-desc">Select Size</p>
            <Stack>
              <ToggleCards />
            </Stack>
          </Box>
          <Box spacing={1}>
            <p className="select-desc">Colors Available</p>
            <Stack direction="row" alignItems="center">
              <ColorPicker selected={selected} onSelectColor={onSelected} colors={COLOR_OPTIONS} />
            </Stack>
          </Box>
          <Stack spacing={10} direction="row" alignItems="center">
            <Button variant="contained" sx={{ pl: 6, pr: 6 }}>
              <Iconify
                icon="lets-icons:basket-alt-3-light"
                width={22}
                color="#ffff"
                sx={{ mr: 1 }}
              />
              Add to Cart
            </Button>
            <Box className="product-price">{price}</Box>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object,
};
