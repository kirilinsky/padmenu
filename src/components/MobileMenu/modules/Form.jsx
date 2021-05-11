import { useAtom } from "jotai";
import React from "react";
import { useForm } from "react-cool-form";
import { loginAtom, tokenAtom } from "../../../Atoms";
import { RiRefreshLine } from "react-icons/ri";
import "./from.scss";

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

const Form = ({ getOrgs }) => {
  const [login, setLogin] = useAtom(loginAtom);

  const { form, mon, submit } = useForm({
    defaultValues: login,
    onStateChange: ({ values }) => {
      setLogin(values);
    },
    onSubmit: (values) => {
      getOrgs();
    },
  });

  const [errors, values] = mon(["errors", "values"], {
    errorWithTouched: true,
  });
  return (
    <div>
      <form ref={form} noValidate>
        <div className="form-block">
          <Field
            id="url"
            label="Адрес (URL)"
            name="url"
            required
            error={errors.name}
          />
        </div>
        <div className="form-block">
          <div className="form-block-column">
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
          </div>
          <div className="form-block-action">
            <button onClick={submit}>
              <RiRefreshLine />
            </button>
          </div>
        </div>

        <div className="btn"></div>
      </form>
    </div>
  );
};

export default Form;
