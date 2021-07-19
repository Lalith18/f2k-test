import React,{useState} from 'react';
import './sizeSelector.styles.css'

const SizeSelector = ({sizes}) => {
    const [sizeNum, setSizeNum] = useState(0)

    const changeSizeNum = () => {
        console.log(sizes.length)
        if(sizeNum < sizes.length-1) {
            setSizeNum((prevState) => prevState+1)
        } else {
            setSizeNum(0)
        }
    }
    return(
        <div className='size-selector'>
            <h1 className='size'>{sizes[sizeNum]}</h1>
            <button className='size-button' onClick={changeSizeNum}>{`>`}</button>
        </div>
    )
}

export default SizeSelector;