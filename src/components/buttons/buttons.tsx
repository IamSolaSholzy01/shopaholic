import { FC } from 'react';
import { Button } from '@mui/material';

interface ButtonProps {
    fullWidth?: boolean,
    size?: "small" | "medium" | "large",
    type?: "button" | "submit" | "reset",
    variant?: "text" | "outlined" | "contained",
    loading?: boolean,
    disabled?: boolean
}

const CustomButton: FC<ButtonProps> = ({children, ...props}) => (
    <Button color="secondary" className="CustomButton" {...props}>{ children }</Button>
)

export default CustomButton;