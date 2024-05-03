import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';
import { useState, useCallback, useEffect, useRef } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { ColorPicker } from './color-utils';
import Iconify from './iconify';
import ToggleCards from './ToggleCards';

import Carousel, { useCarousel, CarouselDots, CarouselArrows } from './carousel';

import hoodie from '../assets/images/black-hoodie.jpg';
import lavHoodie from '../assets/images/levender-hoodie.jpg';
import yellHoodie from '../assets/images/yellow-hoodie.jpg';

const COLOR_OPTIONS = ['#000000', '#FFFFFF', '#00B8D9', '#22C55E', '#FFAB00', '#FF5630'];

function ProductCard({ product }) {
  const [selected, setSelected] = useState(COLOR_OPTIONS[0]);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const { id, name, coverUrl, price, title } = product;

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const onSelected = useCallback((inputValue) => {
    setSelected(inputValue);
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const { carouselRef } = useCarousel(carouselSettings);

  return (
    <Card sx={{ m: '0 auto', p: 3, maxWidth: 1000 }}>
      <Stack direction="row" gap={5} alignItems="center" justifyContent="center">
        <Box sx={{ maxWidth: 100 }}>
          <Slider
            {...carouselSettings}
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            dots={true}
          >
            <img alt={name} src={hoodie} width={10} />

            <img alt={name} src={lavHoodie} width={10} />

            <img alt={name} src={yellHoodie} width={10} />
          </Slider>
        </Box>

        <Box sx={{ width: 350 }}>
          {' '}
          <Slider {...carouselSettings} asNavFor={nav2} ref={(slider) => (sliderRef1 = slider)}>
            <img alt={name} src={hoodie} width={50} />

            <img alt={name} src={lavHoodie} width={50} />

            <img alt={name} src={yellHoodie} width={50} />
          </Slider>
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
