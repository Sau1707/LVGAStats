import { Row, Col, Button, Container } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import style from './card.module.css'

export default function Cardbox(props) {
    return (
        <Card className={style.card}>
            <Card.Img
                className={style.image}
                variant="top"
                src={`/${props.image}`}
            />
            <Card.Body>
                <Card.Title> {props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Container>
                    <Row>
                        <Col>
                            <Button
                                className={style.button}
                                size="lg"
                                variant="warning"
                                href={props.root}
                            >
                                Go to the page
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}
