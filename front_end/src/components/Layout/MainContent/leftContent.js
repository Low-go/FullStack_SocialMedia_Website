import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';

const LeftContent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://weatherwidget.io/js/widget.min.js';
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <Box mb="16px">
      <a
        className="weatherwidget-io"
        href="https://forecast7.com/en/19d90n155d58/hawaii/"
        data-label_1="HAWAII"
        data-label_2="WEATHER"
        data-theme="original"
      >
        HAWAII WEATHER
      </a>
    </Box>
  );
};

export default LeftContent;
