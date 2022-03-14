import emailjs from '@emailjs/browser';
import ('./contact.scss');

export default function Contact() {
    const sendemail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_8au44bn', 'template_f0ykppb', e.target, '5kJpBHtdASkT5SWIc')
        .then(res=>console.log(res))
        .catch(error=>console.log(error))
    };

    return (
        <div className='contact' id='contact'>
            <form className='form' onSubmit={sendemail}>
               
                <label>Name</label>
                <input type='text' className='form-control' id='name' name='nombre'/>
                
                
                <label>E-mail</label>
                <input type='email' className='form-control' id='email' name='correo'/> 
               
                <label>Message</label>
                <input type='text' className='form-control' id='message'name='mensaje'/>
                
                <input type="submit" value="Send e-mail"></input>
            </form>
        </div>
    )
}