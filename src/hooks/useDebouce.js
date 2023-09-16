import { useState, useEffect } from 'react';
function useDebouce(value, delay) {
    const [debouceValue, setDebouceValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouceValue(value), delay);
        return () => clearTimeout(handler);
    }, [value]);
    return debouceValue;
}

export default useDebouce;
