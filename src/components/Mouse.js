import React from 'react';
import { useEffect } from 'react';

const Mouse = () => {

    useEffect(() => {
        
        const handleCursor = (e) => {
            
        }

        window.addEventListener('mousemove', handleCursor)
    }, [input]);

    return (
    
        <span className="cursor"></span>
    );
};

export default Mouse;