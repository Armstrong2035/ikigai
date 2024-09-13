import React, { useState, useEffect } from "react";
import { firebaseApp, db } from "../../utils/firebase/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import {
  TextField,
  Button,
  Stack,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";

export const Signup = () => {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const [isSignupComplete, setIsSignupComplete] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (isSignupComplete) {
      router.push('/board');
    }
  }, [isSignupComplete, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Create user data object
      const userData = {
        name: formData.name,
        email: formData.email,
        userId: user.uid,
      };
      
      // Create a new document in the "users" collection
      await setDoc(doc(db, "users", user.uid), userData);
      
      setIsSignupComplete(true);
    } catch (error) {
      console.error("Error: ", error.code, error.message);
      // Handle the error (e.g., show an error message to the user)
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const textfields = [
    { id: "name", label: "Name", value: formData.name, type: "text" },
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
        padding: isMobile ? "20px" : "0",
      }}
    >
      <Stack 
        direction="column" 
        spacing={2} 
        sx={{ 
          width: isMobile ? "100%" : "300px",
          maxWidth: "100%",
        }}
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
          Sign Up
        </Button>
      </Stack>
    </div>
  );
};
