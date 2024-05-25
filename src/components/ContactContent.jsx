import { useRef, useState } from "react";
import "../css/contact.scss";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactContent() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    //got this from emailjs, this will allow anyone who inserts information into my web application to be able to contact me
    e.preventDefault();

    emailjs
      .sendForm("service_2lqgb8h", "template_ykbjlb2", formRef.current, {
        publicKey: "thL5vwGX_OWlBKT15",
      })
      .then(
        () => {
          setSuccess(true); //if there is an error, set state to false
        },
        (error) => {
          setError(true); //otherwise if all went good, set the state to true
        }
      );
  };
  //variants will allow me to create animations with ease using framer motion, here i will slow down the way in wich the text that shows contact informations comes onto the screen
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.9,
        staggerChildren: 0.8,
      },
    },
  };

  return (
    <motion.section //This is the main container that will animate from the initial to the animate state.
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.section className="txtContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's know each other</motion.h1>
        <motion.section className="item" variants={variants}>
          <h2>Mail</h2>
          <span>l.k.monawe@gmail.com</span>
        </motion.section>
        <motion.section className="item" variants={variants}>
          <h2>Address</h2>
          <span>Johannesburg</span>
        </motion.section>
        <motion.section className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+27763742603</span>
        </motion.section>
      </motion.section>

      <aside className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 3 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="text" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error"}
          {success && "Success"}
          {/*another debugging to ensure that all went well with no error */}
        </motion.form>
      </aside>
    </motion.section>
  );
}

export default ContactContent;
