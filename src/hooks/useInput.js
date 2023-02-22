import {useState} from "react";


// принимает чтартовое значение и возвращает текущее значение + функцию onchange для инпута
export const  useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onChange = e => {
        setValue(e.target.value)
    }

    return {
        value, onChange
    }
};

// примменение

