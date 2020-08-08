import React, { useContext } from 'react'
import { GlobalContext } from '@/context/globalContext'
import AuthTemplate from '@/components/templates/auth'
import { Col, Card, Form, Button } from 'react-bootstrap'
import LanguageSelector from "@/components/templates/languageSelector"
import Link from 'next/link'

const Login = () => {
    const { app } = useContext(GlobalContext)

    return (
        <AuthTemplate title="Login">
            <Col xs={12} md={6}>
                <Card>
                    <Card.Header>
                        <div className="d-flex flex-row align-items-center">
                            <Col md={9} sm={9}>
                                <img src='/images/logo.png' className="w-100 d-none d-md-block" alt="rocketer" />
                                <img src='/images/small_logo.png' className="navbar-logo d-block d-md-none" alt="rocketer" />
                            </Col>
                            <Col md={3} sm={3} className="d-flex justify-content-end">
                                <LanguageSelector />
                            </Col>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="email">
                                <Form.Label className="small">Email</Form.Label>
                                <Form.Control type="email" placeholder={app.translate.auth.enter_email_address} />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label className="small">{app.translate.auth.password}</Form.Label>
                                <Form.Control type="password" placeholder={app.translate.auth.enter_password} />
                            </Form.Group>
                            <Form.Group controlId="remember">
                                <Form.Check className="small" type="checkbox" label={app.translate.auth.remember} />
                            </Form.Group>
                            <div className="d-flex justify-content-between flex-row align-items-center">
                                <Link href="#">
                                    <a className="small">{app.translate.auth.forgot_password}</a>
                                </Link>
                                <Button variant="primary" type="submit">
                                    {app.translate.auth.signin}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                    <div className="card-footer d-flex justify-content-center">
                        <Link href="#">
                            <a className="small">{app.translate.auth.need_an_account}</a>
                        </Link>
                    </div>
                </Card>
            </Col>
        </AuthTemplate>
    )
}
export default Login