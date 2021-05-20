import React from "react";
import { useState, useEffect } from "react";
import ContactForm from "./contactform";
import firebaseDb from "../firebase";

const Contact = () => {
  const addOrEdit = (obj) => {
    if (currentId === "") {
      firebaseDb.child("contact").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    } else {
      firebaseDb
        .child(`contact/${currentId}`)
        .set(obj, (err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
    }
  };
  const onDelete = (key) => {
    if (
      window.confirm("Are you want to delete the contact?")
    ) {
      firebaseDb.child(`contact/${key}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };
  const [contactobj, setContactobj] = useState({});
  const [currentId, setCurrentId] = useState("");
  const data = () => {
    firebaseDb.child("contact").on("value", (snapshot) => {
      if (snapshot.val() != null)
        setContactobj({ ...snapshot.val() });
      else {
        setContactobj({});
      }
    });
  };
  useEffect(() => {
    data();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col ">
            <div className="jumbotron align-left">
              <h1 className="display-5">
                Contact Registration
              </h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ContactForm
              {...{ currentId, addOrEdit, contactobj }}
            />
          </div>
        </div>

        <table className="table table-borderless table-stripped">
          <thead className="theade-light">
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(contactobj).map((id) => (
              <tr key={id}>
                <td>{contactobj[id].fullname}</td>
                <td>{contactobj[id].email}</td>
                <td>{contactobj[id].number}</td>
                <td>{contactobj[id].add}</td>
                <td>
                  <div className="">
                    <button className="btn text-primary">
                      <i
                        className="fas fa-pencil-alt"
                        onClick={() => {
                          setCurrentId(id);
                        }}
                      />
                    </button>
                    <button className="btn text-danger">
                      <i
                        className="fas fa-trash-alt"
                        onClick={() => {
                          onDelete(id);
                        }}
                      />
                    </button>
                  </div>
                </td>
              </tr>
              // Here by means of Object.keys we take the keys that means id inside of the object that contain data then by that id we ittrate to the object
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Contact;
