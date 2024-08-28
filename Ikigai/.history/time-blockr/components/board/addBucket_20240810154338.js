"use client";
import { useState } from "react";
import React from "react";

export default function NewBucket() {
  const handleSubmit = (formData) => {

    const bucketName = formData.get('bucketName')
  }


  }

  return (
    <div>
      <form action={bucketName}>
        <label htmlFor="name">Label this board:</label>
        <input type="text" id="name" bucketName="bucketName" required />
      </form>
    </div>
  );
}
