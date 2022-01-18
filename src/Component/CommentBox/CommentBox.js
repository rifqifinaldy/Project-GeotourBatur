import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";
import img from "../../asset/img/comment.png";
import CommentOutput from "./CommentOutput";

const CommentBox = () => {
  const [update, setUpdate] = useState(false);
  const [comment, setComment] = useState([
    { name: "Nizar", email: "Nizar@mail.com", comment: "Mantap Min" },
    {
      name: "Rifqi",
      email: "rifqi@mail.com",
      comment:
        "Terima Kasih Informasinnya sangat bermanfaat buat saya yang mau berliburan ke bali",
    },
  ]);

  const submit = (e) => {
    e.preventDefault();
    setComment((prevComment) => {
      return [
        ...prevComment,
        {
          name: e.target.name.value,
          email: e.target.email.value,
          comment: e.target.comment.value,
        },
      ];
    });
    setUpdate(true);
    setTimeout(function () {
      setUpdate(false);
      document.getElementById("comment-form").reset();
    }, 5000);
  };

  return (
      <>
    <Container className="mt-5 shadow p-3">
      <h3>Leave a Comment</h3>
      <Form id="comment-form" className="mb-5" onSubmit={submit}>
        <Row className="align-items-center">
          <Col md="3">
            <FormLabel>Email</FormLabel>
            <InputGroup className="mb-3">
              <FormControl
                name="email"
                type="email"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
          </Col>
          <Col md="3">
            <FormLabel>Name</FormLabel>
            <InputGroup className="mb-3">
              <FormControl
                name="name"
                type="text"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
          </Col>
          <Col className="text-end">
            <img src={img} alt="comment-box" className="w-50" />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormLabel>Comment </FormLabel>
            <InputGroup className="mb-3">
              <FormControl
                name="comment"
                as="textarea"
                aria-describedby="inputGroup-sizing-default"
                required
              />
            </InputGroup>
          </Col>
        </Row>
        {update && (
          <Alert color="success">
            <FontAwesomeIcon icon={faCheckCircle}/> Your Comment Was Sent Successfully
          </Alert>
        )}
        <Button
          disabled={update}
          className="shadow btn-custom px-4"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
    <Container className="mt-5 shadow p-3">
         <CommentOutput comment={comment} />
    </Container>
    </>
  );
};

export default CommentBox;
