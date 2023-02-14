import React from "react";
import { TextField, MenuItem } from "@mui/material";
import "../styles/contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particle from "../components/Particle";

function ContactForm() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  const projects = [
    {
      value: "project-1",
      label: "Project - 1",
    },
    {
      value: "project-2",
      label: "Project - 2",
    },
    {
      value: "project-3",
      label: "Project - 3",
    },
    {
      value: "project-4",
      label: "Project - 4",
    },
  ];

  return (
    <div>
      <Particle />
      <Navbar />
      <div className="container mt-5">
        <h1 className="mb-3">Contact Us</h1>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <TextField
              id="outlined-basic"
              className="text-field"
              label="Name"
              variant="outlined"
              required
              //   color="primary"
            />
          </div>
          <div className="mb-3">
            <TextField
              label="Email"
              className="text-field"
              type="email"
              required
            />
          </div>
          <div className="mb-3">
            <TextField
              select
              label="Select"
              className="text-field"
              defaultValue="Project-1"
              helperText="Please select your project"
            >
              {projects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="mb-3">
            <TextField
              label="Description"
              className="text-field"
              multiline
              rows={4}
              required
            />
          </div>
          <button className="btn-1 btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default ContactForm;
