import React from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required"),
    age: yup
        .number()
        .required()
        .integer()
        .min(10, "Age must be greater or equal to 10")
        .max(30, "Age must be less than or equal to 30")
});

function handleSubmit(event) {
    event.preventDefault();
    console.log("this worked");
    console.log(event);
    for (let item of event.target.elements) {
        console.log(item.name, item.value)
    }
}
export default function Contact() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
  return (
    <div className="Contact">
      <h1>Contact Page</h1>

      <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
              <Form.Label>First Name</Form.Label>
              <Form.Control name="firstName" placeholder="Enter your first name" ref={register} />
              {errors.firstName && <p>{errors.firstName.message}</p>}
          </Form.Group>
          <Form.Group>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name="lastName" placeholder="Enter your last name" ref={register} />
              {errors.lastName && <p>{errors.lastName.message}</p>}
          </Form.Group>
          <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" placeholder="Enter your email" ref={register} />
              {errors.email && <p>{errors.email.message}</p>}
          </Form.Group>

          <Form.Group>
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name="age" placeholder="Enter your age" ref={register} />
              {errors.age && <p>{errors.age.message}</p>}
          </Form.Group>
          <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
}