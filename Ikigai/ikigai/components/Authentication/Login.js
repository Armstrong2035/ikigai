import React, { useState } from "react";
import { firebaseApp } from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  Typography,
  FormGroup,
  Button,
  TextField,
  Container,
  Stack,
  Box,
} from "@mui/material";


export function Login() {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .then(() => window.location.href = '/board')
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const textfields =[
    { id: "email", label: "Email", value: email, type: "email", setter: setEmail },
    { id: "password", label: "Password", value: password, type: "password", setter: setPassword },
  ]

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "95vh",
        width: "95vw",
      }}
    >
      <Stack direction="column" spacing={2} sx={{ width: "20%" }}>
        {textfields.map(({ id, label, value, type, setter }) => (
          <TextField
            key={id}
            id={id}
            label={label}
            variant="outlined"
            value={value}  // Bind to the corresponding state variable
            type={type}
            onChange={(e) => setter(e.target.value)}  // Update the state
            InputProps={{
              style: {
                color: "#D6D6D6", // Text color
                backgroundColor: "#252525", // Background color
              },
            }}
            InputLabelProps={{
              style: { color: "#D6D6D6" }, // Label color
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D6D6D6", // Border color
                },
              },
            }}
          />
        ))}
  
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          Login
        </Button>
      </Stack>
    </div>
  );
}