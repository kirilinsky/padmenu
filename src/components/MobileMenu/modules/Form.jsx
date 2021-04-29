import { useAtom } from "jotai";
import React from "react";
import { useForm } from "react-cool-form";
import { loginAtom } from "../../../Atoms";
import "./from.module.scss";

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

const Form = () => {
  const [login, setLogin] = useAtom(loginAtom);
  const { form, mon, submit } = useForm({
    defaultValues: login,
    onStateChange: ({ values }) => {
      setLogin(values);
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [errors, values] = mon(["errors", "values"], {
    errorWithTouched: true,
  });
  return (
    <div>
      <form ref={form} noValidate>
        <Field
          id="url"
          label="Адрес (URL)"
          name="url"
          required
          error={errors.name}
        />
        <Field
          id="user"
          label="Пользователь"
          name="user"
          type="user"
          required
          error={errors.name}
        />
        <Field
          id="password"
          label="Пароль"
          name="password"
          type="password"
          required
          error={errors.password}
        />
        <div className="btn">
          <button type="button" onClick={submit}>
            загрузить
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
