import React from "react";
import { useState } from "react";

const Range = ({ print }) => {
    const [number, setNumber] = useState(0);

    const getBinary = (num, arr=[]) => {
        if (+num === 0) {
            return [0,0,0,0,0,0,0,0,0,0];
        }
        if (Math.floor(num / 2) === 0) {
            let binaryArr = [... arr, 1].reverse();
            let lengthBinaryArr = binaryArr.length;
            if ((10 - lengthBinaryArr) > 0) {
                let zeroArr = [];
                for (let i = 0; i < (10 - lengthBinaryArr); i++) {
                    zeroArr.push(0);
                }
                return zeroArr.concat(binaryArr);
            } else {
                return binaryArr;
            }
        }
        
        if (num % 2 === 0) {
            return getBinary(num / 2, [... arr, 0]);
        } else {
            return getBinary((num - 1) / 2, [... arr, 1]);
        }
      }



    const handlerChange = (event) => {
        setNumber(event.target.value);
        print(getBinary(event.target.value, []));
    }

    return (
        <div>
            <p>{ number }</p>
            <span>0</span>
            <input
            type="range"
            min="0"
            max="1000"
            defaultValue="0"
            onChange={ (event) => handlerChange(event) }
            />
            <span>1000</span>
        </div>
    )
}

export default Range;