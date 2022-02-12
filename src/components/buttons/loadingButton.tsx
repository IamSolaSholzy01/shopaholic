import { FC } from 'react';
import { LoadingButton } from '@mui/lab';

interface ButtonProps {
    fullWidth?: boolean,
    size?: "small" | "medium" | "large",
    type?: "button" | "submit" | "reset",
    variant?: "text" | "outlined" | "contained",
    loading?: boolean,
    disabled?: boolean
}

const CustomLoadingButton: FC<ButtonProps> = ({children, ...props}) => (
    <LoadingButton color="secondary" className="CutomButton" {...props}>{ children }</LoadingButton>
)

export default CustomLoadingButton;