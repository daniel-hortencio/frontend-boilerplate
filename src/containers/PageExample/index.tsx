import React, { useCallback, useRef } from 'react';
import * as Yup from 'yup';

import Section from '../../components/Section';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { ValidationError } from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import {
  InputText,
  Select,
  TextArea,
} from '../../components/Forms/Unform/index';

const PageHome = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
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
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      //const errors = getValidationErrors(err);
      //formRef.current?.setErrors(errors);
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
