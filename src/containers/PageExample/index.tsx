import React, { useCallback } from 'react';
import * as Yup from 'yup';

import Section from '../../components/Section';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';
import {
  InputText,
  Select,
  TextArea,
} from '../../components/Forms/Unform/index';

const PageHome = () => {
  const handleSubmit = useCallback(async data => {
    console.log(data);
    try {
      const schema = Yup.object().shape({
        text: Yup.string().required('Texto obrigatório'),
        textArea: Yup.string().required('Descrição obrigatória'),
        select: Yup.string().required('Nenhuma opção foi escolhida'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const validationErrors: Errors = {};
        err.inner.forEach((error: any) => {
          validationErrors[error.path] = error.message;
        });

        console.log(validationErrors);
        //const errors = getValidationErrors(err);
        //formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Section>
      <Form onSubmit={handleSubmit}>
        <InputText name="text" type="text" placeholder="Texto aqui" />
        <TextArea name="textArea" placeholder="Área de texto aqui" />

        <Select
          name="select"
          placeholder="Escolha"
          options={[
            { label: 'Opção1', value: '1' },
            { label: 'Opção2', value: '2' },
          ]}
        />

        <a href="/">Link aqui</a>
        <button type="submit">Botão aqui</button>
      </Form>
    </Section>
  );
};

export default PageHome;
