import React from 'react';


const Register = () => {

  const [alignment, setAlignment] = React.useState('phone')

  const handleChange = (event: any, newAlignment: any) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="MuiContainer-root MuiContainer-maxWidthLg css-1qsxih2">
    <div className="css-26q4qm">
        <div className="MuiBox-root css-10ib5jr">
            <h4 className="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom css-1bhrkuh">Get started
                absolutely free.</h4>
            <p className="MuiTypography-root MuiTypography-body1 css-1s3hfzc">Free forever. No credit card needed.</p>
        </div>
        <div className="css-1t62lt9"><button
                className="MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-fullWidth MuiButtonBase-root css-1klybow"
                tabIndex={0} type="button"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ color: `rgb(223, 62, 48)` }}>
                    <path fill="currentColor"
                        d="M17.5 14a5.51 5.51 0 0 1-4.5 3.93a6.15 6.15 0 0 1-7-5.45A6 6 0 0 1 12 6a6.12 6.12 0 0 1 2.27.44a.5.5 0 0 0 .64-.21l1.44-2.65a.52.52 0 0 0-.23-.7A10 10 0 0 0 2 12.29A10.12 10.12 0 0 0 11.57 22A10 10 0 0 0 22 12.52v-2a.51.51 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5">
                    </path>
                </svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button><button
                className="MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-fullWidth MuiButtonBase-root css-1klybow"
                tabIndex={0} type="button"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ color: `rgb(24, 119, 242)` }}>
                    <path fill="currentColor"
                        d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z">
                    </path>
                </svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button><button
                className="MuiButton-root MuiButton-outlined MuiButton-outlinedInherit MuiButton-sizeLarge MuiButton-outlinedSizeLarge MuiButton-colorInherit MuiButton-fullWidth MuiButtonBase-root css-1klybow"
                tabIndex={0} type="button"><svg xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="24" height="24"
                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" style={{ color: `rgb(28, 156, 234)` }}>
                    <path fill="currentColor"
                        d="M8.08 20A11.07 11.07 0 0 0 19.52 9A8.09 8.09 0 0 0 21 6.16a.44.44 0 0 0-.62-.51a1.88 1.88 0 0 1-2.16-.38a3.89 3.89 0 0 0-5.58-.17A4.13 4.13 0 0 0 11.49 9C8.14 9.2 5.84 7.61 4 5.43a.43.43 0 0 0-.75.24a9.68 9.68 0 0 0 4.6 10.05A6.73 6.73 0 0 1 3.38 18a.45.45 0 0 0-.14.84A11 11 0 0 0 8.08 20">
                    </path>
                </svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button></div>
        <div className="MuiDivider-root MuiDivider-fullWidth MuiDivider-withChildren css-18rucq9" role="separator"><span
                className="MuiDivider-wrapper css-cbg5f1">
                <p className="MuiTypography-root MuiTypography-body2 css-11r9ii4">OR</p>
            </span></div>
        <form action="#" autoComplete="off" noValidate>
            <div className="css-ovnx7g">
                <div className="css-14h7rs2">
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6"><label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-18d0xa8"
                            data-shrink="false">First name</label>
                        <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1l1mlix">
                            <input aria-invalid="false" name="firstName" type="text"
                                className="MuiOutlinedInput-input MuiInputBase-input css-yzm7vx" value="" />
                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                <legend className="css-dhh0px"><span>First name</span></legend>
                            </fieldset>
                        </div>
                    </div>
                    <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6"><label
                            className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-18d0xa8"
                            data-shrink="false">Last name</label>
                        <div
                            className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1l1mlix">
                            <input aria-invalid="false" name="lastName" type="text"
                                className="MuiOutlinedInput-input MuiInputBase-input css-yzm7vx" value="" />
                            <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                                <legend className="css-dhh0px"><span>Last name</span></legend>
                            </fieldset>
                        </div>
                    </div>
                </div>
                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6"><label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-18d0xa8"
                        data-shrink="false">Email address</label>
                    <div
                        className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl css-1l1mlix">
                        <input aria-invalid="false" autoComplete="username" name="email" type="email"
                            className="MuiOutlinedInput-input MuiInputBase-input css-yzm7vx" value="" />
                        <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                            <legend className="css-dhh0px"><span>Email address</span></legend>
                        </fieldset>
                    </div>
                </div>
                <div className="MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root css-feqhe6"><label
                        className="MuiInputLabel-root MuiInputLabel-formControl MuiInputLabel-animated MuiInputLabel-outlined MuiFormLabel-root MuiFormLabel-colorPrimary css-18d0xa8"
                        data-shrink="false">Password</label>
                    <div
                        className="MuiOutlinedInput-root MuiInputBase-root MuiInputBase-colorPrimary MuiInputBase-fullWidth MuiInputBase-formControl MuiInputBase-adornedEnd css-1t2syce">
                        <input aria-invalid="false" autoComplete="current-password" name="password" type="password"
                            className="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd css-1nuss9t"
                            value="" />
                        <div
                            className="MuiInputAdornment-root MuiInputAdornment-positionEnd MuiInputAdornment-outlined MuiInputAdornment-sizeMedium css-5zxort">
                            <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-edgeEnd MuiIconButton-sizeMedium css-105tfim"
                                tabIndex={0} type="button"><svg xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em"
                                    height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                    <g fill="currentColor">
                                        <circle cx="12" cy="12" r="1.5"></circle>
                                        <path
                                            d="M15.29 18.12L14 16.78l-.07-.07l-1.27-1.27a4.07 4.07 0 0 1-.61.06A3.5 3.5 0 0 1 8.5 12a4.07 4.07 0 0 1 .06-.61l-2-2L5 7.87a15.89 15.89 0 0 0-2.87 3.63a1 1 0 0 0 0 1c.63 1.09 4 6.5 9.89 6.5h.25a9.48 9.48 0 0 0 3.23-.67zM8.59 5.76l2.8 2.8A4.07 4.07 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a4.07 4.07 0 0 1-.06.61l2.68 2.68l.84.84a15.89 15.89 0 0 0 2.91-3.63a1 1 0 0 0 0-1c-.64-1.11-4.16-6.68-10.14-6.5a9.48 9.48 0 0 0-3.23.67zm12.12 13.53L19.41 18l-2-2l-9.52-9.53L6.42 5L4.71 3.29a1 1 0 0 0-1.42 1.42L5.53 7l1.75 1.7l7.31 7.3l.07.07L16 17.41l.59.59l2.7 2.71a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42z">
                                        </path>
                                    </g>
                                </svg><span className="MuiTouchRipple-root css-w0pj6f"></span></button></div>
                        <fieldset aria-hidden="true" className="MuiOutlinedInput-notchedOutline css-igs3ac">
                            <legend className="css-dhh0px"><span>Password</span></legend>
                        </fieldset>
                    </div>
                </div><button
                    className="MuiLoadingButton-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-9g6ae3"
                    tabIndex={0} type="submit">Register<span className="MuiTouchRipple-root css-w0pj6f"></span></button>
            </div>
        </form>
        <p className="MuiTypography-root MuiTypography-body2 MuiTypography-alignCenter css-399fq3">By registering, I
            agree to Minimal&nbsp;<a
                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-w46evt">Terms
                of Service</a>&nbsp;and&nbsp;<a
                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways css-w46evt">Privacy
                Policy</a>.</p>
    </div>
</div>
  );
}

// className Registere extends Component {

//   render() {

//     const [alignment, setAlignment] = useState('web')

//     const handleChange = (event: any, newAlignment: any) => {
//       setAlignment(newAlignment);
//     };

//     return (
//       <ToggleButtonGroup color="primary"
//         value={alignment}
//         exclusive
//         onChange={handleChange}
//       >
//         <ToggleButton value="web">Web</ToggleButton>
//         <ToggleButton value="android">Android</ToggleButton>
//         <ToggleButton value="ios">iOS</ToggleButton>
//       </ToggleButtonGroup>
//     )
//   }
// }

export default Register;