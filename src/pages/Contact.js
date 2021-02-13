import React from 'react';
import Logo from '../components/Logo';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SocialNetwork from '../components/SocialNetwork';
import ButtonsBottom from '../components/ButtonsBottom';
import ContactForm from '../components/ContactForm';
import { motion } from 'framer-motion';

const Contact = () => {
    const variants = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: 300,
        }
    }
    const transition = {
        ease: [.03, .87, .73, .9],
        duration: .6,
    }
    return (
        <main>
            <Mouse />
            <motion.div className="contact">
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>adresse</h4>
                            <p>12 rue du code</p>
                            <p>33000 Bordeau</p>
                        </div>
                    </div>

                <div className="phone">
                    <div className="content">
                        <h4>téléphone</h4>
                        <CopyToClipboard text="0773484244" className="hover">
                            <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                alert("Téléphone copié !");}}>07 73 48 42 44</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="email">
                    <div className="content">
                        <h4>email</h4>
                        <CopyToClipboard text="yildiz.ali.s1990@gmail.com" className="hover">
                        <p style={{cursor: 'pointer'}} className="clipboard" onClick={() => {
                                alert("Email copié !");}}>yildiz.ali.s1990@gmail.com</p>
                        </CopyToClipboard>
                    </div>
                </div>
                <SocialNetwork />
                
                <div className="credits">
                    <p>Yildiz - 2021</p>
                </div>
                </div>
                <ButtonsBottom left={'/project-4'} />
            </motion.div>
        </main>
    );
};

export default Contact;