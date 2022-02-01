import React from "react";
import {
    EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton
} from "react-share";
import '../CSS/nav.css';
export const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div>
                            <p className="thankyou-note">Thankyou for visting my profile</p>

                        </div>
                        <div className="d-felx">
                            <p>Let's connect. A great way to connect me is through Facebook, Gmail and LinkedIn.</p>
                        </div>
                    </div>


                    <div className="col-lg-5 col-md-5 col-md-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            < EmailShareButton onClick={() => window.location = 'mailto:khushbukumari29.1992@gmail.com'}
                                url=""
                            >
                                <EmailIcon className="max-3" size={36} />
                            </EmailShareButton>&nbsp;&nbsp;&nbsp;
                            <FacebookShareButton url="https://www.facebook.com/khushbu.kumari.3572" >
                                <FacebookIcon className="max-3" size={36} />
                            </FacebookShareButton>&nbsp;&nbsp;&nbsp;


                            <LinkedinShareButton url="https://www.linkedin.com/in/khushbu-kumari295">
                                <LinkedinIcon className="max-3" size={36} />
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;
                        </p>
                    </div>
                </div>
            </div>
        </div>



    )
}