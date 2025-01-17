import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join The Adventure Newsletter To Recive Our Best Deals
            </p>
            <p className='footer-subscription-text'>
                You Can Unsubscribe At Any Time.
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' 
                    name='email' 
                    placeholder='Your Email' 
                    className='footer-input'/>
                    <Button buttonStyle='btn--outline'>
                        Subscribe
                    </Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>ABOUT US</h2>
                    <Link to='/sign-up'>How It Works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Service</Link>
                </div>

                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>

            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>

                <div class='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
     </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        !INDIAN EXPLORER
                    <i class='fab fa-typo3' />
                    </Link>
                </div>
                <small className='website-rights'>!NDIAN EXPLORER @ 2022</small>
                <div className='social-icons'>
                    <Link className='social-icon-link facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'
                    >
                        <i className='fab-fa-facebook-f'></i>
                    </Link>

                    <Link className='social-icon-link instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'
                    >
                        <i className='fab-fa-instagram'></i>
                    </Link>
                    
                    <Link className='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='YouTube'
                    >
                        <i className='fab-fa-youtube'></i>
                    </Link>

                    <Link className='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                        <i className='fab-fa-Twitter'></i>
                    </Link>

                    <Link className='social-icon-link linkedin'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <i className='fab-fa-linkedin'></i>
                    </Link>
                </div>
            </div>
        </section>
</div>
  )
}

export default Footer