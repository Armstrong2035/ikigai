import React, { useState } from "react";
import { firebaseApp } from "../../utils/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  TextField,
  Button,
  Stack,
  Alert,
} from "@mui/material";
import { useRouter } from "next/router";
import boardStore from "../board/store";

export const Signup = () => {
 
  const updateUserData = boardStore((state) => state.updateUserData);
  const auth = getAuth(firebaseApp);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const userData = {
        name: formData.name,
        email: formData.email,
        userId: userCredential.user.uid,
      };

      updateUserData(userData);
      window.location.href = "/board";
    } catch (error) {
      setError(error.message);
    }
  };

  const textfields = [
    { id: "name", label: "Name", type: "text" },
    { id: "email", label: "Email", type: "email" },
    { id: "password", label: "Password", type: "password" },
  ];
  
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "95vh",
      width: "95vw",
    }}>
      <Stack component="form" onSubmit={handleSubmit} direction="column" spacing={2} sx={{ width: "20%" }}>
        {error && <Alert severity="error">{error}</Alert>}
        {textfields.map(({ id, label, type }) => (
          <TextField
            key={id}
            id={id}
            label={label}
            variant="outlined"
            value={formData[id]}
            type={type}
            onChange={handleChange}
            InputProps={{
              style: {
                color: "#D6D6D6",
                backgroundColor: "#252525",
              },
            }}
            InputLabelProps={{
              style: { color: "#D6D6D6" },
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#D6D6D6",
                },
              },
            }}
          />
        ))}
  
        <Button
          type="submit"
          variant="contained"
          color="secondary"
        >
          Sign up
        </Button>
      </Stack>
    </div>
  );
};