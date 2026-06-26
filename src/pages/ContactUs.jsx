import { useRef } from "react";
import "./ContactUs.css";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    const userData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    try {
      const response = await fetch(
        "https://ecommercecontact-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(userData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      alert("Data Stored Successfully!");

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type="text"
            required
            ref={nameRef}
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            required
            ref={emailRef}
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="tel"
            required
            ref={phoneRef}
          />
        </div>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;