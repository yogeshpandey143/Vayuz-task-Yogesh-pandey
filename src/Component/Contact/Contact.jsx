import React from 'react'

const Contact = () => {
  return (
      <div className="contact-form">
      <h3>Connect With Us</h3>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Phone Number" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact