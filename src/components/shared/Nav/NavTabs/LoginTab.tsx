import React, {useContext, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {IconButton, InputAdornment, Link, Stack, styled, TextField} from "@mui/material";
// import { Icon } from '@iconify/react';
import {Login} from "../../../../api/fetch";
import displayMsg from "../../../../ui-component/Toast";
import {UserContext} from "../../../../contexts/AuthContext";
import { LoadingButton } from "../../../buttons";
// import eyeFill from '@iconify/icons-eva/eye-fill';
// import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { ErrorMessage, Field, Form, Formik, FormikProvider, useFormik } from "formik";
import * as Yup from 'yup';
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import { Icon } from "@iconify/react";

const LoginTab = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose?: () => void;
}) => {
  const [username] = useState("");
  const [password, setPassword] = useState("");
  let [loginVisible] = useState(visible);
  const [isLoading, setisLoading] = useState(false);
  const {setIsLoggedIn} = useContext(UserContext);
  // const [showPassword, setShowPassword] = useState(false);

  const ContentStyle = styled('div')(({ theme }: { theme: any }) => ({
    maxWidth: 480,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 3)
  }));

  const signIn = (event: {preventDefault: () => void}) => {
    event.preventDefault();
    setisLoading(true);
    Login(username, password, OnAfterSignIn);
  };

  const OnAfterSignIn = (result: any) => {
    console.log(result);
    setisLoading(false);
    if (result.token) {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("token", result.token);
      localStorage.setItem("user_id", result.data.user._id);
      localStorage.setItem("username", result.data.user.username);
      setIsLoggedIn(true);
      // setLoginVisible(false)
      if (onClose) {
        onClose();
      }
      displayMsg("success", "Login successful");
    } else {
      displayMsg("error", "wrong credentials");
    }
  };

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (values: any) => {
      signIn(values);
    }
  });
  interface formikErrors {
    email: string;
    
  }

  const { handleChange } = formik;
//errors, touched, handleSubmit, isSubmitting, getFieldProps, 
  return (
    <ContentStyle>
      <div className={loginVisible ? "block" : "hidden"}>
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?&nbsp;
            <a
              href="/register"
              className="font-medium text-rose-600 hover:text-primary"
            >
              Register
            </a>
          </p>
        </div>
        {/* <form onSubmit={signIn} className="mt-8 space-y-6 mx-6" method="POST">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label className="sr-only">Username</label>
              <input
                onChange={e => {
                  setUserName(e.target.value);
                }}
                name="username"
                type="text"
                autoComplete="username"
                required={true}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label className="sr-only">Password</label>
              <input
                onChange={e => {
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                autoComplete="current-password"
                required={true}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                component={RouterLink}
                to="/"
                className="font-medium text-rose-500 hover:text-primary"
              >
                Forgot password?
              </Link>
            </div>
          </div>
          <div>
            <LoadingButton variant="contained" fullWidth type="submit" loading={isLoading}>Login</LoadingButton>
          </div>
        </form> */}
      </div>
      <div>
     <h1>Any place in your app!</h1>
     {/* <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors: formikErrors = {email: ''};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
         <Form className="text-black" >
           <Field type="text" name="username" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"/>
           <ErrorMessage name="username" component="div" />
           <Field type="password" name="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"/>
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik> */}
   </div>
      <Formik 
        initialValues={{ email: '', password: '' }}
        // validationSchema = {LoginSchema}
        onSubmit={ (values: any) => {
        signIn(values);
        }
      }>
        <Form className="text-black" onSubmit={signIn}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column' }} spacing={2}>
              <input type="hidden" name="remember" value="true" />
              <input type="hidden" name="remember" value="true" />
              <Field type="text" name="username" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"/>
              <ErrorMessage name="username" component="div" />
              <Field type="password" name="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"/>
              <ErrorMessage name="password" component="div" />
            </Stack>
            <LoadingButton variant="contained" fullWidth type="submit" loading={isLoading}>Login</LoadingButton>
          </Stack>
         </Form>
        {/* <Form autoComplete="off" noValidate onSubmit={signIn}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column' }} spacing={2}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label className="sr-only">Username</label>
                  <Field
                    onChange={handleChange}
                    name="username"
                    type="text"
                    autoComplete="username"
                    required={true}
                    
                    placeholder="Username"
                    value={formik.values.username}
                  />
                </div>
                <div>
                  <label className="sr-only">Password</label>
                  <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required={true}
                    
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    component={RouterLink}
                    to="/"
                    className="font-medium text-rose-500 hover:text-primary"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              {/* <TextField
                fullWidth
                label="Username"
                {...getFieldProps('username')}
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
                onChange ={handleChange}
                value    = {formik.values.username}
                size="small"
              />
              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                {...getFieldProps('password')}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                        <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                value={formik.values.password}
              />
            </Stack>
            <LoadingButton variant="contained" fullWidth type="submit" loading={isLoading}>Login</LoadingButton>
          </Stack>
        </Form> */}
      </Formik>
    </ContentStyle>
    // <>
    //   <div className={loginVisible ? "block" : "hidden"}>
    //     <div>
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Log in
    //       </h2>
    //       <p className="mt-2 text-center text-sm text-gray-600">
    //         Don't have an account?&nbsp;
    //         <a
    //           href="/register"
    //           className="font-medium text-rose-600 hover:text-primary"
    //         >
    //           Register
    //         </a>
    //       </p>
    //     </div>
    //     <form onSubmit={signIn} className="mt-8 space-y-6 mx-6" method="POST">
    //       <input type="hidden" name="remember" value="true" />
    //       <div className="rounded-md shadow-sm -space-y-px">
    //         <div>
    //           <label className="sr-only">Username</label>
    //           <input
    //             onChange={e => {
    //               setUserName(e.target.value);
    //             }}
    //             name="username"
    //             type="text"
    //             autoComplete="username"
    //             required={true}
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
    //             placeholder="Username"
    //           />
    //         </div>
    //         <div>
    //           <label className="sr-only">Password</label>
    //           <input
    //             onChange={e => {
    //               setPassword(e.target.value);
    //             }}
    //             name="password"
    //             type="password"
    //             autoComplete="current-password"
    //             required={true}
    //             className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
    //             placeholder="Password"
    //           />
    //         </div>
    //       </div>

    //       <div className="flex items-center justify-between">
    //         <div className="flex items-center">
    //           <input
    //             name="remember-me"
    //             type="checkbox"
    //             className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
    //           />
    //           <label className="ml-2 block text-sm text-gray-900">
    //             Remember me
    //           </label>
    //         </div>

    //         <div className="text-sm">
    //           <Link
    //             component={RouterLink}
    //             to="/"
    //             className="font-medium text-rose-500 hover:text-primary"
    //           >
    //             Forgot password?
    //           </Link>
    //         </div>
    //       </div>
    //       <div>
    //         <LoadingButton variant="contained" fullWidth type="submit" loading={isLoading}>Login</LoadingButton>
    //       </div>
    //     </form>
    //   </div>
    // </>
  );
};

export default LoginTab;
