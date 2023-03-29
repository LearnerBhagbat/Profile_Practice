import React from 'react';
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedinIn, FaGithub, FaFacebook } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>Bindekhapur</p>
                            <p>soul society</p>
                        </div>
                        <div className="phone">
                            <h4>
                                <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                                7894561230
                            </h4>
                        </div>
                        <div className="email">
                            <h4>
                                <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                                soulripper@gmail.com
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h2>About the Page</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi, libero ratione,
                        quod repellendus asperiores odio illum, quis delectus in rerum! Quaerat atque, accusantium eos
                        neque qui soluta repellat veniam.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: '4rem' }} ></FaFacebook>
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: '4rem' }}></FaTwitter>
                        <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: '4rem' }}></FaLinkedinIn>
                        <FaGithub size={30} style={{ color: "#fff", marginRight: '4rem' }}></FaGithub>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;