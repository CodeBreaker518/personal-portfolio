import './Contact.css'
import { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faEnvelope, faInbox } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'

export const Contact = () => {
  const form = useRef()

  const [focusedField, setFocusedField] = useState(null)
  const [isSending, setIsSending] = useState(0)

  const [inputValues, setInputValues] = useState({
    'contact-first-name': '',
    'contact-last-name': '',
    'contact-email': '',
    'contact-message': '',
  })

  const resetForm = () => {
    setInputValues({
      'contact-first-name': '',
      'contact-last-name': '',
      'contact-email': '',
      'contact-message': '',
    })
  }

  const handleFieldFocus = (fieldName) => {
    setFocusedField(fieldName)
  }

  const handleFieldBlur = (fieldName) => {
    setFocusedField(null)
    if (!inputValues[fieldName]) {
      setInputValues({
        ...inputValues,
        [fieldName]: '',
      })
    }
  }

  const handleInputChange = (fieldName, value) => {
    setInputValues({
      ...inputValues,
      [fieldName]: value,
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(1)

    // Lógica para enviar el correo
    emailjs.sendForm('service_qcmxnfo', 'template_tjrja06', form.current, 'khTdG4CGyjtW0Z_PW').then(
      (result) => {
        console.log(result.text)
        setIsSending(2)
        setTimeout(() => {
          setIsSending(0)
        }, 2000)
        resetForm()
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  return (
    <div className='page'>
      <h1 className='title'>Contact</h1>

      <main>
        <section className='contact'>
          <div className='container'>
            <div className='left'>
              <div className='form-wrapper'>
                <div className='contact-heading'>
                  <h1>
                    Let&apos;s work together<span>.</span>
                  </h1>
                  <p className='text'>
                    Or reach me via: <a href='mailto:diegoperezperez518@gmail.com'>diegoperezperez518@gmail.com</a>
                  </p>
                </div>

                <form ref={form} onSubmit={sendEmail} className='contact-form' autoComplete='none'>
                  <div
                    className={`input-wrap ${focusedField === 'contact-first-name' ? 'focus not-empty' : ''} ${
                      inputValues['contact-first-name'] ? 'not-empty' : ''
                    }`}
                    onFocus={() => handleFieldFocus('contact-first-name')}
                    onBlur={() => handleFieldBlur('contact-first-name')}>
                    <input
                      className='contact-input'
                      name='contact-first-name'
                      autoComplete='none'
                      type='text'
                      required
                      onChange={(e) => handleInputChange('contact-first-name', e.target.value)}
                      value={inputValues['contact-first-name']}
                    />
                    <label htmlFor=''>First Name</label>
                    <FontAwesomeIcon className='icon' icon={faAddressCard} />
                  </div>
                  <div
                    className={`input-wrap ${focusedField === 'contact-last-name' ? 'focus not-empty' : ''} ${
                      inputValues['contact-last-name'] ? 'not-empty' : ''
                    }`}
                    onFocus={() => handleFieldFocus('contact-last-name')}
                    onBlur={() => handleFieldBlur('contact-last-name')}>
                    <input
                      className='contact-input'
                      name='contact-last-name'
                      autoComplete='none'
                      type='text'
                      required
                      onChange={(e) => handleInputChange('contact-last-name', e.target.value)}
                      value={inputValues['contact-last-name']}
                    />
                    <label htmlFor=''>Last Name</label>
                    <FontAwesomeIcon className='icon' icon={faAddressCard} />
                  </div>

                  <div
                    className={`input-wrap w-100 ${focusedField === 'contact-email' ? 'focus not-empty' : ''} ${
                      inputValues['contact-email'] ? 'not-empty' : ''
                    }`}
                    onFocus={() => handleFieldFocus('contact-email')}
                    onBlur={() => handleFieldBlur('contact-email')}>
                    <input
                      className='contact-input'
                      name='contact-email'
                      autoComplete='none'
                      type='text'
                      required
                      onChange={(e) => handleInputChange('contact-email', e.target.value)}
                      value={inputValues['contact-email']}
                    />
                    <label htmlFor=''>Email</label>
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                  </div>

                  <div
                    className={`input-wrap textarea w-100 ${focusedField === 'contact-message' ? 'focus not-empty' : ''} ${
                      inputValues['contact-message'] ? 'not-empty' : ''
                    }`}
                    onFocus={() => handleFieldFocus('contact-message')}
                    onBlur={() => handleFieldBlur('contact-message')}>
                    <textarea
                      className='contact-input'
                      name='contact-message'
                      autoComplete='none'
                      onChange={(e) => handleInputChange('contact-message', e.target.value)}
                      value={inputValues['contact-message']}
                      required></textarea>
                    <label htmlFor=''>Message</label>
                    <FontAwesomeIcon className='icon' icon={faInbox} />
                  </div>

                  <div className='contact-btn-container w-100'>
                    <div></div>
                    {isSending === 0 ? (
                      <button className='btn'>Send</button>
                    ) : isSending === 1 ? (
                      <button type='submit' className='btn'>
                        Sending...
                      </button>
                    ) : isSending === 2 ? (
                      <button type='submit' className='btn'>
                        Sent!
                      </button>
                    ) : null}
                  </div>
                </form>
              </div>
            </div>
            <div className='right'>
              <div className='image-wrapper'>
                <img className='contact-img' src='/assets/contact-image.png' alt='contact illustration' />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
