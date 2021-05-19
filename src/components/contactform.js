import React from "react";
import { useState, useEffect } from "react";
const ContactForm = (props) => {
  const initValues = {
    fullname: "",
    email: "",
    number: "",
    add: ""
  };
  useEffect(
    () => {
      if (props.currentId === "")
        setValues(()=>({
          ...initValues
        }));
      else {
        setValues(()=>({
          ...props.contactobj[props.currentId]
        }));
      }
    },
    [props.currentId, props.contactobj]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  );

  const handleInput = (e) => {
    console.log(e)
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };
  const [values, setValues] = useState(initValues);
  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleSubmit}
        className="container">
        <div className="row">
          <div className="form-group input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user "></i>
              </div>
            </div>

            <input
              className="form-control"
              placeholder="Full Name"
              name="fullname"
              value={values.fullname}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs form-group input-group ">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt "></i>
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Mobile Number"
              name="number"
              value={values.number}
              onChange={handleInput}
            />
          </div>
          <div className="form-group input-group col-xs">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope "></i>
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Email Address"
              name="email"
              value={values.email}
              onChange={handleInput}
            />
          </div>
          <div className="row">
            <div className="form-group col">
              <textarea
                className="form-control"
                placeholder="Address"
                name="add"
                value={values.add}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <input
                type="submit"
                value={
                  props.currentId === "" ? "Save" : "Update"
                }
                className="btn btn-primary btn-block"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
