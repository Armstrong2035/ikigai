import React, { useState } from "react";
import { firebaseApp } from "../../utils/firebase/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import {
  Button,
  TextField,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import boardStore from "../board/store"; // Import the store

export function Login() {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Navigate to the board page
      router.push('/board');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`Error: ${errorCode}, Message: ${errorMessage}`);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const textfields = [
    { id: "email", label: "Email", value: formData.email, type: "email" },
    { id: "password", label: "Password", value: formData.password, type: "password" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
       
      }}
    >
      <Stack 
        direction="column" 
        spacing={2} 
        // sx={{ 
        //   width: isMobile ? "100%" : "300px",
        //   maxWidth: "100%",
        // }}
      >
        {textfields.map(({ id, label, value, type }) => (
          <TextField
            key={id}
            id={id}
            label={label}
            variant="outlined"
            value={value}
            type={type}
            onChange={handleChange}
            fullWidth
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
          onClick={handleSubmit}
          fullWidth
        >
          Login
        </Button>
      </Stack>
    </div>
  );
}