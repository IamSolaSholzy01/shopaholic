import { FC } from "react";
import { LoadingButton } from "@mui/lab";

const CustomLoadingButton: FC<{
    fullWidth?: boolean,
    loading: boolean,
    type?: "button" | "submit" | "reset",
    variant?: "text" | "outlined" | "contained",
    size?: "small" | "medium" | "large"
    children: any
}> = ({fullWidth, loading, type, variant, size, children}: {
    fullWidth?: boolean,
    loading: boolean,
    type?: "button" | "submit" | "reset",
    variant?: "text" | "outlined" | "contained",
    size?: "small" | "medium" | "large"
    children: any
}) => (
    <LoadingButton color="secondary" fullWidth={fullWidth} loading={loading} type={type} variant={variant} size={size}>{ children }</LoadingButton>
)

export default CustomLoadingButton;