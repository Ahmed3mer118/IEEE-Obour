import {BsFacebook, BsInstagram} from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import {TiSocialTwitter} from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={`container mx-auto pb-12 pt-24`}>
            <div className={`grid min-[400px]:grid-cols-2 lg:grid-cols-4 max-[1023px]:gap-y-4 sm:text-center` }>
                <div className={"flex flex-col items-center"}>
                    <div className={"w-44"}>
                        <img src="/images/footer_image.svg" alt="IEEE Logo" className={"object-cover"}/>
                    </div>
                    <p className={'text-base font-normal text-[#06052E] my-3 pl-4'}>Follow on social service</p>
                    <div className={'flex justify-start items-center gap-3 pl-4'}>
                        <Link to="https://www.facebook.com/share/19VPDmfp3L/?mibextid=wwXIfr" target="_blank">
                        <BsFacebook className={'hover:fill-primary h-6 w-6 cursor-pointer'}/>
                        </Link>
                        <Link to={"https://www.instagram.com/ieee_ocs?igsh=cXU4Mnhta3RuNXdw"} target="_blank">
                        <BsInstagram className={'hover:fill-red-800 h-6 w-6 cursor-pointer'}/>
                        </Link>
                        <Link to={"https://www.linkedin.com/company/ieee-obour-institute"} target="_blank">
                
                        <LiaLinkedin className={'hover:fill-[#1da1f2] h-8 w-8 cursor-pointer'}/>
                        </Link>
                    </div>
                </div>
                <div className={'w-fit justify-self-center'}>
                    <h3 className={'font-bold text-lg text-[#06052E] mb-3'}>Links</h3>
                    <div className="flex flex-col gap-2 text-[#6A6B6C] font-normal">
                        <a className={'text-base'} href="#">Home</a>
                        <a href="#">Help Center</a>
                        <a href="#">Services</a>
                    </div>
                </div>
                <div className={'w-fit justify-self-center'}>
                    <h3 className={'font-bold text-lg text-[#06052E] mb-3'}>Recourse</h3>
                    <div className="flex flex-col gap-2 text-[#6A6B6C] font-normal">
                        <a className={'text-base'} href="#">About us</a>
                        <a href="#">Carrier</a>
                        <a href="#">Legal Notice</a>
                    </div>
                </div>
                <div className={'w-fit justify-self-center'}>
                    <h3 className={'font-bold text-lg text-[#06052E] mb-3'}>Contacts</h3>
                    <div className="flex flex-col gap-2 text-[#6A6B6C] font-normal">
                        <a className={'text-base'} href="#">Obour University</a>
                        <a href="#">Support</a>
                        <a href="#">ieeeobour7@gmail.com</a>
                    </div>
                </div>
            </div>
            <hr className={'w-3/4 h-[3px] mx-auto mt-10 bg-gray-800'}/>
            <p className="text-center mt-4">Copyright 2020&copy; all right</p>
        </footer>
    );
};

export default Footer;
