import * as Yup from "yup";
import {useContext, useState} from "react";
import {Icon} from "@iconify/react";
import {useFormik, Form, FormikProvider} from "formik";
import eyeFill from "@iconify/icons-eva/eye-fill";
import eyeOffFill from "@iconify/icons-eva/eye-off-fill";
import {useNavigate} from "react-router-dom";
// material
import {
  Stack,
  TextField,
  IconButton,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import {LoadingButton} from "../../buttons";
import {URLAPI} from "../../../api/ApiMethods";
import {Post} from "../../../api/fetch";
import displayMsg from "../../../ui-component/Toast";
import {UserContext} from "../../../contexts/AuthContext";

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const {setIsLoggedIn} = useContext(UserContext);

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [data, setData] = useState({
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: ''
  // })

  const register = (data: any) => {
    setIsSubmitting(true);
    Post(data, URLAPI.Users.Register, onAfterRegister);
  };

  const onAfterRegister = (data: any) => {
    console.log(data);
    if (data.success) {
      displayMsg("success", data.message);
      sessionStorage.setItem("loggedIn", "true");
      sessionStorage.setItem("token", data.token);
      sessionStorage.setItem("user_id", data.data.user._id);
      sessionStorage.setItem("username", data.data.user.username);
      setIsLoggedIn(true);
      navigate("/", {replace: true});
    } else {
      displayMsg("error", data.message);
    }
    setIsSubmitting(false);
  };

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name required"),
    username: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Username is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name required"),
    email: Yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    state: Yup.string().required("State is required"),
    localGovt: Yup.string().required("Local Government is required"),
    gender: Yup.string().required("Gender is required"),
    dob: Yup.string().required("Date Of Birth is required"),
    phoneNumber: Yup.string()
      .min(11, "Too Short!")
      .max(15, "Too Long!")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      state: "",
      localGovt: "",
      username: "",
      gender: "",
      phoneNumber: "",
      dob: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values: any) => {
      console.log(values);
      register(values);
    },
  });

  const {errors, touched, handleSubmit, getFieldProps, handleChange} = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <input
          autoComplete="false"
          name="hidden"
          type="text"
          style={{display: "none"}}
        />
        <Stack spacing={3}>
          <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps("firstName")}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              onChange={handleChange}
              required
              value={formik.values.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps("lastName")}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
              onChange={handleChange}
              required
              value={formik.values.lastName}
            />
          </Stack>

          <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
            <TextField
              fullWidth
              label="State"
              required
              {...getFieldProps("state")}
              error={Boolean(touched.state && errors.state)}
              helperText={touched.state && errors.state}
              onChange={handleChange}
              value={formik.values.state}
            />

            <TextField
              fullWidth
              label="Local Govt"
              {...getFieldProps("localGovt")}
              required
              error={Boolean(touched.localGovt && errors.localGovt)}
              helperText={touched.localGovt && errors.localGovt}
              onChange={handleChange}
              value={formik.values.localGovt}
            />
          </Stack>

          <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
            <TextField
              // autoComplete="username"
              fullWidth
              label="Username"
              required
              {...getFieldProps("username")}
              error={Boolean(touched.username && errors.username)}
              helperText={touched.username && errors.username}
              onChange={handleChange}
              value={formik.values.username}
            />
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                {...getFieldProps("gender")}
                labelId="gender-label"
                id="gender"
                required
                value={formik.values.gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
          </Stack>

          <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
            <TextField
              fullWidth
              label="Date of Birth"
              {...getFieldProps("dob")}
              required
              type="date"
              error={Boolean(touched.dob && errors.dob)}
              helperText={touched.dob && errors.dob}
              onChange={handleChange}
              value={formik.values.dob}
            />

            <TextField
              fullWidth
              label="Phone Number"
              {...getFieldProps("phoneNumber")}
              required
              type={"tel"}
              error={Boolean(touched.phoneNumber && errors.phoneNumber)}
              helperText={touched.phoneNumber && errors.phoneNumber}
              onChange={handleChange}
              value={formik.values.phoneNumber}
            />
          </Stack>

          <TextField
            fullWidth
            // autoComplete="email"
            type="email"
            label="Email address"
            {...getFieldProps("email")}
            required
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
            onChange={handleChange}
            value={formik.values.email}
          />

          <TextField
            fullWidth
            // autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            label="Password"
            required
            {...getFieldProps("password")}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    onClick={() => setShowPassword(prev => !prev)}
                  >
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
            onChange={handleChange}
            value={formik.values.password}
          />

          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Register
          </LoadingButton>
        </Stack>
      </Form>
    </FormikProvider>
  );
}
// function values(values: any) {
//   console.log(values)
//   throw new Error('Function not implemented.');
// }
