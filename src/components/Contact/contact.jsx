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
            <div className="left">
                <form className='form' onSubmit={sendemail}>

                    <div className="name_form">
                        <label>name</label>
                        <input type='text' className='form-control' id='name' name='user_name'/>
                    </div>   
                    
                    <div className="email_form">
                        <label>E-mail</label>
                        <input type='email' className='form-control' id='email' name='user_email'/>
                    </div>
                    
                    <div className="message_form">
                        <label>message</label>
                        <input type='text' className='form-control' id='message'name='user_message'/>
                    </div>
                
                <div className="buttom">
                        <input type="submit" value="Send e-mail"></input>
                </div>
                </form>
            </div>

            <div className="right">
                
            </div>
        </div>
    )
}