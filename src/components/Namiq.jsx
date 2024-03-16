import React, { useEffect } from 'react';

const Namiq = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/64de280dcc26a871b02fd1ad/1h81sotum';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    
    script.onload = () => {
      console.log('Tawk.to script loaded');
    };

    script.onerror = () => {
      console.error('Error loading Tawk.to script');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); 

  return <div>Tawk.to script is being loaded...</div>;
};

export default Namiq;