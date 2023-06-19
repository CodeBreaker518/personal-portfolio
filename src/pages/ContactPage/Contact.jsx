import './Contact.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export const Contact = () => {
  return (
    <div className='contact page'>
      <h1>Contact</h1>
      <form className='form-contact' action='mailto:diegoperezperez518@gmail.com'>
        <input type='text' name='name' placeholder='Name' />
        <input type='text' name='lastName' placeholder='Last Name' />
        <input type='text' name='email' placeholder='Email' />
        <textarea name='subject' placeholder='Reason for contact' />
        <div>
          <input type='submit' value='Send' />
        </div>
      </form>
    </div>
  )
}
