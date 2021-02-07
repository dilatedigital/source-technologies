import React, { useContext, useState } from "react"
import { MenuContext } from "../../context/MenuContext"
import { useForm } from "react-hook-form"
import axios from "axios"
import { CgArrowRight } from "react-icons/cg"
import { FiChevronDown } from "react-icons/fi"
import Close from "../../assets/close.svg"
import Loading from "../../assets/loading.svg"

const ModalForm = () => {
  const formLink = process.env.GATSBY_HOMEFORM

  const { register, handleSubmit, errors, formState } = useForm()

  const [isFormSubmitting, setFormSubmit] = useState(false)

  const [isFormSubmitted, setFormSubmitted] = useState(false)

  const { isSubmitting } = formState

  const { closeModal } = useContext(MenuContext)

  const onSubmit = data => {
    setFormSubmit(true)
    let bodyFormData = new FormData()

    bodyFormData.append("first-name", data.firstName)
    bodyFormData.append("last-name", data.lastName)
    bodyFormData.append("your-subject", "Enquiry")
    bodyFormData.append("your-email", data.email)
    bodyFormData.append("enquiry-type", data.enquiryType)
    bodyFormData.append("phone-number", data.phoneNumber)
    bodyFormData.append("enquiry-details", data.enquiryDetails)
    bodyFormData.append("company-name", data.companyName)

    axios
      .post(formLink, bodyFormData)
      .then(res => {
        if (res.data.status === "mail_sent") {
          console.log("Mail sent!")
          setFormSubmit(false)
          setFormSubmitted(true)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className="st-modal">
      <div className="flex items-start justify-between">
        <h2 className="green-line st-h2">Contact Us</h2>
        <button onClick={closeModal} aria-label="Close Modal">
          <Close />
        </button>
      </div>
      {!isFormSubmitted && (
        <form onSubmit={handleSubmit(onSubmit)} className="modal-form relative">
          <div className="st-full-name st-form-control">
            <div>
              <label htmlFor="firstName">First Name</label>
              <div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="What is your first name?"
                  className={`${errors.firstName ? "ring-2 ring-red-500" : ""}`}
                  ref={register({
                    required: "Name is required",
                    maxLength: {
                      value: 80,
                      message: "Name should not be more than 80 characters",
                    },
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters.",
                    },
                  })}
                  required
                />
                {errors.firstName && errors.firstName.message && (
                  <p className="st-error-msg">{errors.firstName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="What is your last name?"
                  className={`${errors.lastName ? "ring-2 ring-red-500" : ""}`}
                  ref={register({
                    required: "Last name is required",
                    maxLength: {
                      value: 80,
                      message:
                        "Last name should not be more than 80 characters",
                    },
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters.",
                    },
                  })}
                  required
                />
                {errors.lastName && errors.lastName.message && (
                  <p className="st-error-msg">{errors.lastName.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="st-company-email st-form-control">
            <div>
              <label htmlFor="companyName">Company Name</label>
              <div>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="What is your company name?"
                  className={`${
                    errors.companyName ? "ring-2 ring-red-500" : ""
                  }`}
                  ref={register({
                    required: "Company name is required",
                    maxLength: {
                      value: 80,
                      message:
                        "Company name should not be more than 80 characters",
                    },
                    minLength: {
                      value: 2,
                      message: "Company name must be at least 2 characters.",
                    },
                  })}
                  required
                />
                {errors.companyName && errors.companyName.message && (
                  <p className="st-error-msg">{errors.companyName.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@email.com"
                  className={`${errors.email ? "ring-2 ring-red-500" : ""}`}
                  ref={register({
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: "Invalid email address.",
                    },
                  })}
                  required
                />
                {errors.email && errors.email.message && (
                  <p className="st-error-msg">{errors.email.message}</p>
                )}
              </div>
            </div>
          </div>
          <div className="st-phone-enquiry st-form-control">
            <div>
              <label htmlFor="phoneNumber">Phone Number</label>
              <div>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="xx xxxx xxxx"
                  className={`${
                    errors.phoneNumber ? "ring-2 ring-red-500" : ""
                  }`}
                  ref={register({
                    required: "Phone number is required",
                  })}
                  required
                />
                {errors.phoneNumber && errors.phoneNumber.message && (
                  <p className="st-error-msg">{errors.phoneNumber.message}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="enquiryType">Enquiry Type</label>
              <div className="relative">
                <select
                  type="enquiryType"
                  id="enquiryType"
                  name="enquiryType"
                  ref={register({ required: "Please select an enquiry type." })}
                  className={`${
                    errors.enquiryType ? "ring-2 ring-red-500" : ""
                  }`}
                  required
                >
                  <option value="">Please select</option>
                  <option value="Audio">Audio</option>
                  <option value="Automation">Automation</option>
                  <option value="Intrusion">Intrusion</option>
                  <option value="Video">Video</option>
                  <option value="Accounts">Accounts</option>
                  <option value="Other">Other</option>
                </select>
                <FiChevronDown className="absolute" />
                {errors.enquiryType && errors.enquiryType.message && (
                  <p className="st-error-msg">{errors.enquiryType.message}</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="enquiryDetails">Enquiry Details</label>
            <div>
              <textarea
                name="enquiryDetails"
                id="enquiryDetails"
                placeholder="Write your message..."
                ref={register}
              />
            </div>
          </div>

          <button
            type="submit"
            aria-label="Submit"
            disabled={isSubmitting}
            className="st-btn"
          >
            SEND MESSAGE
            <CgArrowRight className="text-2xl ml-3" />
          </button>

          {isFormSubmitting && (
            <div className="absolute bg-white bg-opacity-50 w-full h-full top-0 st-spinner flex items-center justify-center">
              <Loading />
            </div>
          )}
        </form>
      )}
      {isFormSubmitted && (
        <div>Thank you! We will get back to you shortly.</div>
      )}
    </div>
  )
}

export default ModalForm
