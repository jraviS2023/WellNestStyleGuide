import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function ToDoItem({ description }) {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={isChecked}
                        onChange={handleChange}
                    />
                }
                label={
                    <span className={isChecked ? 'line-through text-gray-500' : ''}>
                        {description}
                    </span>
                }
            />
        </FormGroup>
    );
}

export default ToDoItem;