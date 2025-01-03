import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Input from '../Input/Input'
const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 pe-4">
                            <div className="mb-4">
                                <h4>PassATPL Pro</h4>
                                <p style={{ fontSize: "14px" }}>Empowering future pilots with comprehensive ATPL exam preparation. Join our community of successful aviation professionals.</p>
                            </div>
                            <div className="mb-4">
                                <div className="d-flex align-items-center justify-content-start">

                                    <div className="me-3">
                                        <Link href="#">
                                            <Image src="/Images/fb.svg" alt="Facebook" width={25} height={25} />
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link href="#">
                                            <Image src="/Images/insta.svg" alt="Facebook" width={25} height={25} />
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link href="#">
                                            <Image src="/Images/LinkedIn.svg" alt="Facebook" width={25} height={25} />
                                        </Link>
                                    </div>
                                    <div className="me-3">
                                        <Link href="#">
                                            <Image src="/Images/whtsapp.svg" alt="Facebook" width={25} height={25} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="mb-4">
                                <h4>Quick Links</h4>
                            </div>
                            <ul style={{ listStyle: "none" }} className='ms-0 ps-2'>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Home</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>About Us</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Study Materials</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Question Bank</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Success stories</Link></li>
                            </ul>


                        </div>
                        <div className="col-lg-2">
                            <div className="mb-4">
                                <h4>Resources</h4>
                            </div>
                            <ul style={{ listStyle: "none" }} className='ms-0 ps-2'>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>ATPL Subjects</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Mock Tests</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Study Tips</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>Blog</Link></li>
                                <li className='mb-3'><Link className={styles.footerlinks} href={"#"}>FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <div className="mb-2">
                                <h4>Stay Updated</h4>
                            </div>
                            <div className="mb-4">
                                <p style={{ fontSize: "14px" }}>Get the latest ATPL exam updates and study tips</p>
                            </div>
                            <div className="mb-2 d-flex align-items-center">
                                <Input type='email' placeholder='Enter you email' name={"email"} className={"me-3"} />
                                <button className='btn btn-warning ps-4 bg-outline-light pe-4'>Join</button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
