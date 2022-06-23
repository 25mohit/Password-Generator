import './Modal.css'
import { MdCancel } from 'react-icons/md'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { GrFacebook } from 'react-icons/gr';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineCodepen } from 'react-icons/ai';

export const Modal = ({setShowModal,colorChange}) => {
  return (
    <div className='main-modal-div' id={ colorChange==1 ? 'dark':'light' }>
            <div className="modal-container">
                    <div className="header-div"><MdCancel className='close-icon' onClick={() => {setShowModal(false)}}/> </div>
                    <div className="info-modal">
                        <h1 className="faq">FAQ</h1>
                        <ul>
                            <li>This is a Front-end-App, that means this app does not store Password ( which you generated ) any where on web or any where else.</li>
                            <li>This is a Opensource , free to use, free for everyone <strong>ReactJS</strong> App.</li>
                            <li>Is is cryptographically secure? No. It's uses javascript's That doesn't mean it's useless though, it's still better than using 'password123' for each of your passwords.</li>
                            <li>This App is Designed and developed by me, you can reach me out on my Social-Media Handels.</li>
                            <li>I am, as a developer not resposiable for your any kind of online security.</li>
                            <li>This is a simple <strong>ReactJS</strong> Project with using HTML, SCSS, JavaScript</li>
                            <li>You can also chekout my other projects also. <a href='https://agarwal-portfolio.herokuapp.com/' target='_blank'>Link</a></li>
                        </ul>
                        <div className="info-footer-modal">
                                    <a href="https://github.com/25mohit" target="_blank"> <BsGithub className='social-icon'/></a>
                                    <a href="https://www.linkedin.com/in/agarwal24/" target="_blank"> <BsLinkedin className='social-icon'/></a>
                                    <a href="https://twitter.com/mo_hit24/" target="_blank"> <BsTwitter className='social-icon'/></a>
                                    <a href="https://codepen.io/mohit24/" target="_blank"> <AiOutlineCodepen className='social-icon'/></a>
                                    <a href="https://www.facebook.com/mohit724agarwal" target="_blank">   <GrFacebook className='social-icon'/></a>
                                    <a href="https://www.instagram.com/im_hit_/" target="_blank"> <BsInstagram className='social-icon'/></a>
                        </div>
                    </div>
            </div>
    </div>
  )
}
