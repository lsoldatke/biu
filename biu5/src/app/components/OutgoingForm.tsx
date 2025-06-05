"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

type Outgoing = {
  title: string;
  amount: number;
  category: string;
  date: string;
  description: string;
};

type Props = {
  isEditing?: boolean;
  initialValues?: Partial<Outgoing>;
  onSubmit: (outgoing: Outgoing) => void;
  onClose: () => void;
};

const OutgoingForm = ({
  isEditing = false,
  initialValues = {},
  onSubmit,
  onClose,
}: Props) => {
  const defaultValues: Outgoing = {
    title: "",
    amount: 0,
    category: "",
    date: "",
    description: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    amount: Yup.number()
      .positive("Amount must be grearter than 0")
      .required("Amount is required"),
    category: Yup.string().required("Category is required"),
    date: Yup.string().required("Date is required"),
    description: Yup.string(),
  });

  const handleSubmit = (values: Outgoing, { resetForm }: any) => {
    onSubmit(values);

    if (!isEditing) {
      resetForm();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="outgoing-form">
          <h2>{isEditing ? "Edit outgoing" : "Add new outgoing"}</h2>

          <Formik
            initialValues={{ ...defaultValues, ...initialValues }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            <Form className="outgoing-formik">
              <label>
                Title:
                <Field name="title" type="text" />
                <ErrorMessage name="title">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                Amount:
                <Field name="amount" type="number" />
                <ErrorMessage name="amount">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                Category:
                <Field name="category" as="select">
                  <option value="">ALL CATEGORIES</option>
                  <option value="Jedzenie">Food</option>
                  <option value="Rachunki">Bills</option>
                  <option value="Rozrywka">Entertainment</option>
                </Field>
                <ErrorMessage name="category">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                Date:
                <Field name="date" type="date" />
                <ErrorMessage name="date">
                  {(msg) => <div className="error">{msg}</div>}
                </ErrorMessage>
              </label>

              <label>
                Description:
                <Field name="description" as="textarea" />
              </label>

              <button type="submit">
                {isEditing ? "Save changes" : "Add outgoing"}
              </button>
            </Form>
          </Formik>
        </div>

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OutgoingForm;
