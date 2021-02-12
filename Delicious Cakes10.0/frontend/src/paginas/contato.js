import '../estilo.css';
import { Container, Form, Button, Col } from 'react-bootstrap';
import { useState } from 'react';
import telefone from './Imagens/telefone.png';
import whatsapp from './Imagens/whatsapp.png';
import email from './Imagens/o-email.png';


export default function Contatos(){
    const [form, setForm] = useState({
        categoria: "",
        nome: "",
        sobrenome: "",
        telefone: "",
        celular: "",
        email: "",
        desc: ""
    });

    const ControleMudanca = (evento) => {
        console.log(evento.target.value)
        console.log(form)
        setForm({
            ...form,
            [evento.target.id]: evento.target.value})
        console.log(form);
    }

    const controleEnvio = async (evento) => {
        evento.preventDefault();
        const json = JSON.stringify(form);
        const opcoes = {
            method: 'POST',
            headers: {'Content-type': 'application/json', "Access-Control-Allow-Origin":"*"},
            body: json
        }
        const resposta = await fetch("http://localhost:8000/contato", opcoes);
        const dados = await resposta.json();
        console.log(dados);
    }

    return(
        <Container>
            <h2 className="titulo"> Fale Conosco </h2>
            <div className="titulo-contato">
                <strong>Central de Vendas</strong>
                <div className="contato">
                    <img src={telefone} title="Telefone" alt="Telefone" />  (11)5437-8859<br/>
                    <img src={whatsapp} title="whatsapp" alt="whatsapp" />  (11)96578-8759<br/>
                    <img src={email} title="Email" alt="Email" />  
                    <a href="mailto:atendimento@deliciouscakes.com" className="fonte">atendimento@deliciouscakes.com</a>
                </div>
            </div>
            <Form onSubmit={controleEnvio}>
            <div className="titulo-msg">
                <strong>Deixe seu Recado</strong>
                <div className="msg">
                    <p>Deixe aqui sua dúvida, elogio, sugestão ou crítica. Sua opinião é muito importante para nós.</p>
                    <div>
                        <Form.Group className="formulario">
                            <Form.Label><strong>Categoria: </strong></Form.Label><br/>
                            <Form.Control as="select" onChange={ControleMudanca} id='categoria' name='categoria'>
                                <option>-- Selecione a categoria --</option>
                                <option>Crítica</option>
                                <option>Dúvida</option>
                                <option>Elogio</option>
                                <option>Sugestão</option>
                            </Form.Control><br/>
                            <Form.Row>
                                <Col>
                                    <Form.Label><strong>Nome: </strong></Form.Label>
                                    <Form.Control onChange={ControleMudanca} placeholder="Primeiro nome" id='nome' name='nome' />
                                </Col>
                                <Col>
                                    <Form.Label><strong>Sobrenome: </strong></Form.Label>
                                    <Form.Control onChange={ControleMudanca} placeholder="Último nome" id='sobrenome' name='sobrenome' />
                                </Col>
                            </Form.Row><br/>
                            <Form.Row>
                                <Col>
                                    <Form.Label><strong>Telefone: </strong></Form.Label>
                                    <Form.Control onChange={ControleMudanca} placeholder="(00)0000-0000" id='telefone' name='telefone' />
                                </Col>
                                <Col>
                                    <Form.Label><strong>Celular: </strong></Form.Label>
                                    <Form.Control onChange={ControleMudanca} placeholder="(00)00000-0000" id='celular' name='celular' />
                                </Col>
                            </Form.Row><br/>
                            <Form.Label><strong>E-mail: </strong></Form.Label><br/>
                            <Form.Control onChange={ControleMudanca} placeholder="nome@example.com" id='email' name='Email' /><br/>
                            <Form.Label><strong>Descrição: </strong></Form.Label><br/>
                            <Form.Control as="textarea" onChange={ControleMudanca} rows={5} id='descricao' name='descricao'/><br/>
                            <Button className="btn btn-dark btn-lg btn-block" type="submit"> Enviar </Button>
                        </Form.Group>
                    </div>
                </div>
            </div>
            </Form>
        </Container>
    )
}