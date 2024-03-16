import React from 'react';
import Telegram from "./img/telegram.png"
import Instagram from './img/instagram.png';
import "./Footer.css"
import Phone from './img/telephone.png'
import Mail from './img/mail.png'

const Footer = () => {

    return (
        <div className="bg-[#112] flex flex-col items-center justify-center h-full mt-10">
            <div className="flex items-center">
                <img
                    src="http://matchow-001-site1.ltempurl.com/assets/Logo.png"
                    alt=""
                    className="w-20 h-20"
                />
                <p className="text-2xl font-medium text-white">MatchX</p>
            </div>
            <div className='mb-4 flex'>
                <div className='flex items-center gap-2'>
                    <img src={Mail} alt="" className='support'/>
                    <span className='text-white mr-8 text-xl'>e.l_sefa@gmail.com</span>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={Phone} alt="" className='support'/>
                    <span className='text-white text-xl'>+994 50 349 20 34</span>
                </div>

            </div>
            <div className='mb-4 flex gap-6'>
                <a href="https://www.instagram.com/matchx.az?igsh=dDVlMHR0ZzdweHkz">
                    <img src={Instagram} alt="" className="w-11 h-11" />
                </a>
                <a href="https://t.me/matchxaz">
                    <img src={Telegram} alt="" className='w-11 h-11' />
                </a>
            </div>
            <div className='mb-8'>
                <p className="text-white text-sm">2024 MatchX. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
