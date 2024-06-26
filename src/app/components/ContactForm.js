'use client';

import  {useState} from 'react';
import styles from "@/app/contact/contact.module.css"
import { Mulish } from 'next/font/google'

const mulish = Mulish({
    weight: ['300','400','500','600','700','800','900'],
    subsets: ['latin'],
    display: 'swap',
})



const ContactForm = () => {

    const[user,setUser] = useState(
        {
            username:"",
            email:"",
            phone:"",
            message:""
        }
    )

 const[status,setStatus] = useState(null)
    function handleChange(e)
    {
        const name=e.target.name;
        const value=e.target.value;

        setUser((prevUser)=>({...prevUser,[name]:value}));
    }
    const handleSubmit =async (e) =>{
        e.preventDefault();
       try{
           const response = await fetch('/api/contact',{
               method:"POST",
               headers:{"Content-Type":"application/json"},
               body:JSON.stringify({
                   username:user.username,
                   email:user.email,
                   phone:user.phone,
                   message:user.message

               })
           })

           if(response.status === 200)
           {
               setUser({
                   username: "",
                   email: "",
                   phone:"",
                   message:""
               })
               setStatus('success');
           }else{
               setStatus('error');
           }

       }
       catch(e)
       {

       }
    }


    return (
        <form className={styles.contact_form} onSubmit={handleSubmit}>

            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Enter Your Name
                    <input type="text" name="username" id="username" placeholder="Enter your name"
                           className={mulish.className}
                           value={user.username}
                           required
                           onChange={handleChange}
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email" placeholder="Enter your Email"
                           className={mulish.className}
                           value={user.email}
                           required
                           onChange={handleChange}
                           autoComplete="off"
                    />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone number
                    <input type="number" name="phone" id="phone" placeholder="Enter your phone"
                           className={mulish.className}
                           value={user.phone}
                           required
                           onChange={handleChange}/>
                </label>
            </div>


            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                     Message
                    <textarea  name="message" id="message" rows={5} placeholder="Enter your Message"
                           className={mulish.className}
                               value={user.message}
                               required
                               onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                {status==='success' && <p className={styles.success_msg}>Thank you for your message</p>}
                {status==='error' && <p className={styles.error_msg}>There was an error submitting your message</p>}

                <button type="submit" className={mulish.className}>
                 Send Message
                </button>
            </div>

        </form>
    );
};

export default ContactForm;