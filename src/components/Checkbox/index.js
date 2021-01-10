import React from 'react';
import './styles.css';


const Checkbox = (props) =>{
    const handleChange = () => {
      props.changeState();
    };
  

    return (
        <div className="checkbox">

        <input type="checkbox" Checked={props.value} onChange={handleChange} />
        {props.label}
        </div>
    )

}
export default Checkbox;