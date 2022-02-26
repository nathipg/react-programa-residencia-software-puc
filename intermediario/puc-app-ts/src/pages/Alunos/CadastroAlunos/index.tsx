import { ChangeEvent, FormEvent, useReducer, useRef, useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

import { Aluno } from '../../../types/aluno';

const emailReducer = (
  state: { value: string; isValid: boolean },
  action: { type: string; value: string }
) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.includes('@'),
    };
  } else if (action.type === 'INPUT_BLUR') {
    return {
      ...state,
      isValid: state.value.includes('@'),
    };
  } else if (action.type === 'FORM_CLEANUP') {
    return {
      value: '',
      isValid: false,
    };
  }

  return state;
};

const telefoneReducer = (
  state: { value: string; isValid: boolean },
  action: { type: string; value: string }
) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.value,
      isValid: action.value.trim().length > 8,
    };
  } else if (action.type === 'INPUT_BLUR') {
    return {
      ...state,
      isValid: state.value.trim().length > 8,
    };
  } else if (action.type === 'FORM_CLEANUP') {
    return {
      value: '',
      isValid: false,
    };
  }

  return state;
};

interface AlunoProps {
  onCadastroAluno: (aluno: Aluno) => void;
}

export const CadastroAlunos = ({ onCadastroAluno }: AlunoProps) => {
  // Normal state declaration
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');

  // Complex state declaration
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const [telefoneState, dispatchTelefone] = useReducer(telefoneReducer, {
    value: '',
    isValid: false,
  });

  // Reference
  const nomeInput = useRef<HTMLInputElement>(null);

  const nomeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNome(event.target.value);
    console.log(nomeInput.current!.value);
  };

  const idadeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIdade(event.target.value);
  };

  const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({
      type: 'USER_INPUT',
      value: event.target.value,
    });
  };

  const telefoneChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatchTelefone({
      type: 'USER_INPUT',
      value: event.target.value,
    });
  };

  const validateTelefoneHandler = () => {
    dispatchTelefone({ type: 'INPUT_BLUR', value: '' });
  };

  const validateEmailHandler = () => {
    dispatchTelefone({ type: 'INPUT_BLUR', value: '' });
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const aluno: Aluno = {
      nome,
      idade: +idade,
      telefone: telefoneState.value,
      email: emailState.value,
    };

    onCadastroAluno(aluno);
    setNome('');
    setIdade('');
    dispatchEmail({ type: 'FORM_CLEANUP', value: '' });
    dispatchTelefone({ type: 'FORM_CLEANUP', value: '' });
  };

  return (
    <div className="pt-4">
      <h5>Cadastro de Alunos</h5>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                required
                name="nome"
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={nomeChangeHandler}
                ref={nomeInput}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="telefone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                required
                name="telefone"
                type="text"
                placeholder="Telefone"
                value={telefoneState.value}
                onChange={telefoneChangeHandler}
                isValid={telefoneState.isValid}
                onBlur={validateTelefoneHandler}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="idade">
              <Form.Label>Idade</Form.Label>
              <Form.Control
                required
                name="idade"
                type="number"
                placeholder="Idade"
                value={idade}
                onChange={idadeChangeHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="idade">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                name="email"
                type="text"
                placeholder="Email"
                value={emailState.value}
                isValid={emailState.isValid}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" type="submit" disabled={!emailState.isValid || !telefoneState.isValid}>
              Cadastrar
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
