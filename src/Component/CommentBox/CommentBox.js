import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Form, FormControl, FormLabel, InputGroup, Row } from 'react-bootstrap'
import img from "../../asset/img/comment.png"

const CommentBox = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()

    const coments = []

    const submit = (e) =>{
        e.preventDefault()
        console.log("clicked");
        coments.push({
            name:name,
            comment:comment,
            email:email
        })
    }
    return (
        <Container className='mt-5 shadow p-3'>
            <h3>Leave a Comment</h3>
            <Form className='mb-5' onSubmit={submit}>
                <Row className='align-items-center'>
                    <Col md="3">
                        <FormLabel>Email</FormLabel>
                        <InputGroup className="mb-3">
                            <FormControl
                                onChange={(e)=>setEmail(e.target.value)}
                                type='email'
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col md="3">
                        <FormLabel>Name</FormLabel>
                        <InputGroup className="mb-3">
                            <FormControl
                                onChange={(e)=>setName(e.target.value)}
                                type="text"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                    <Col className='text-end'>
                        <img src={img} alt="comment-box" className='w-50' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormLabel>Comment </FormLabel>
                        <InputGroup className="mb-3">
                            <FormControl
                                onChange={(e)=>setComment(e.target.value)}
                                as="textarea"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Button className="shadow btn-custom px-4" type="submit">Submit</Button>
            </Form>
            <div className='comment'>
                <h3>Comment</h3>
                <div className='p-3 border rounded border-bottom'>
                    <strong className='border-bottom'>Nizar<span className='text-muted fw-normal'> nizar@mail.com</span></strong> 
                    <p className='mb-0'>Mantap min</p>
                </div>
            </div>
        </Container>
    )
}

export default CommentBox
