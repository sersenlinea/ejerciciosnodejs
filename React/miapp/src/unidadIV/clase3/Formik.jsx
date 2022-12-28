import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BusinessAccountSchema = Yup.object().shape({
  businessName: Yup.string()
    .required('El nombre de la empresa es requerido'),
  businessAddress: Yup.string()
    .required('La dirección de la empresa es requerida')
});

function BusinessAccountForm({ initialValues, onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={BusinessAccountSchema}
      onSubmit={onSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Field name="accountType" as="select">
            <option value="personal">Cuenta personal</option>
            <option value="business">Cuenta empresarial</option>
          </Field>
          {values.accountType === 'business' && (
            <>
              <Field name="businessName" />
              <ErrorMessage name="businessName" />
              <Field name="businessAddress" />
              <ErrorMessage name="businessAddress" />
            </>
          )}
          <button type="submit">Enviar</button>
        </Form>
      )}
    </Formik>
  );
}

export default BusinessAccountForm;
