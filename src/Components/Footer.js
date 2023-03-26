import React from 'react';
import './FooterStyles.css';
import { FaHome, FaPhone, FaMailBulk, FaTwitter, FaLinkedinIn, FaGithub, FaFacebook  } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>Footer
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaHome>
                        <div>
                            <p>Bindekhapur</p>
                            <p>soul society</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaPhone>
                        <p>7894561230</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }}></FaMailBulk>
                        <h2>soulripper@gmail.com</h2>
                    </div>
                </div>
                <div className="right">
                    <h2>About the Page</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi, libero ratione, quod repellendus asperiores odio illum, quis delectus in rerum! Quaerat atque, accusantium eos neque qui soluta repellat veniam.</p>
                <FaFacebook size={20} style={{color: "#fff", marginRight:'2rem'}}></FaFacebook>
                <FaTwitter size={20} style={{color: "#fff", marginRight:'2rem'}}></FaTwitter>
                <FaLinkedinIn size={20} style={{color: "#fff", marginRight:'2rem'}}></FaLinkedinIn>
                <FaGithub size={20} style={{color: "#fff", marginRight:'2rem'}}></FaGithub>

                </div>
            </div>
        </div>
    )
}

export default Footer