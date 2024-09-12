import React, { useState, useEffect } from "react";
import { firebaseApp } from "../../utils/firebase/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, addDoc, collection } from "firebase/firestore";
import {
  FormGroup,
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Stack,
} from "@mui/material";

import Link from "next/link.js";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userData = {
          name: name,
          email: email,
          userId: userCredential.user.uid,
        };

        return userData;
      })
      .then((userData) => {
        setData(userData);
      })

      .then(() => {
        window.location.href = "/board";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error: ${errorCode}, Message: ${errorMessage}`);
      });
  };

  const textfields = [
    { id: "name", label: "Name", value: name, type: "text", setter: setName },
    { id: "email", label: "Email", value: email, type: "email", setter: setEmail },
    { id: "password", label: "Password", value: password, type: "password", setter: setPassword },
  ];
  
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
          Sign up
        </Button>
      </Stack>
    </div>
  );
  
};


