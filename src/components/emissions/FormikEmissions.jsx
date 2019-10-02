import React from 'react';
import { Formik, Field, Form, FieldArray, ErrorMessage } from 'formik';

const initialValues = {
    numOfPeople: 0,
    naturalGas: 0,
    electricity: 0,
    fuelOil: 0,
    propane: 0,
    vehicles: [
        {
            mpg: 0,
            mpw: 0
        }
    ],
    aluminum: false,
    plastic: false,
    glass: false,
    newspaper: false,
    magazines: false,
}

function FormikEmissions() {
    console.log(initialValues)
    return (
        <div>
            <h1>Formik</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500);
                }}
            >
                {({ isSubmitting }) => <Form>

                    <div className="row">
                        <div className="col">
                            <Field name="numOfPeople" type="number" min="0" max="10000" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Field name="naturalGas" type="number" min="0" max="10000" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Field name="electricity" type="number" min="0" max="10000" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Field name="fuelOil" type="number" min="0" max="10000" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Field name="propane" type="number" min="0" max="10000" />
                        </div>
                    </div>
                    <FieldArray name="vehicles">
                        {({ push, remove }) =>
                            <>
                                <div className="row">
                                    <div className="col">
                                        <Field name="vehicles[0].mpg" />
                                        {({ field, form }) => (
                                            <input {...field} type="number" placeholder="Miles Per Gallon" />
                                        )}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <Field name="vehicles[0].mpg" />
                                        {({ field, form }) => (
                                            <input {...field} type="number" placeholder="Miles Per Gallon" />
                                        )}
                                    </div>
                                </div>
                            </>
                        }
                    </FieldArray>
                    <div className="col">
                        <button type="button">
                            Remove Vehicle
                        </button>
                    </div>
                    <button type="button" className="secondary">
                        Add Vehicle
                    </button>
                    <button type="submit" disabled={isSubmitting}>
                        submit
                    </button>
                </Form>}
            </Formik>
        </div >
    )
}
export default FormikEmissions