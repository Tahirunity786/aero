'use client';
import { motion, AnimatePresence } from "framer-motion";
import styles from "./page.module.css";
import Navbar from "@/component/Navbar/Navbar";
import Link from "next/link";
import Image from 'next/image';
import Slider from "@/component/Slider/Slider";
import MarqueeSlider from "@/component/MarqueeSlider/MarqueeSlider";
import Footer from "@/component/Footer/Footer";

export default function Home() {
  const data = [
    { id: 1, content: "Item 1" },
    { id: 2, content: "Item 2" },
    { id: 3, content: "Item 3" },
    { id: 4, content: "Item 4" },
    { id: 5, content: "Item 5" },
    { id: 6, content: "Item 6" },
  ];
  const items = [
    { content: "Slide 1" },
    { content: "Slide 2" },
    { content: "Slide 3" },
    { content: "Slide 4" },
    { content: "Slide 5" },
];
  return (
    <>
      <Navbar />
      <main className={`container p-2 ${styles.aerombmiddleXL}`}>
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.aerombmiddle}>
              <h1>Best ATPL Question Bank App</h1>
            </div>
            <div className={styles.aerombmiddleL}>
              <p className="ms-3">Ace your ATPL exams swiftly with the latest questions, organized by date and examining authority, all in one convenient resource.</p>
            </div>
            <div className={styles.aerombmiddleL}>
              <Link
                href={'#'}
                className="btn btn-warning rounded-2 ps-5 pe-5 pt-2 pb-2 fw-medium"
              >
                Explore
              </Link>
            </div>
            <div className={styles.aerombmiddleL}>
              <div className="row">
                <div className="col-lg-6 p-2">
                  <div className={styles.aerocontainer}>
                    <div className="me-3">
                      <Image
                        src="/Images/book-open.svg"
                        alt="airplane"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <h3 className="fs-5">Real Exam Question</h3>
                      <p>Practice with actual ATPL exam questions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-2">
                  <div className={styles.aerocontainer}>
                    <div className="me-3">
                      <Image
                        src="/Images/globe.svg"
                        alt="airplane"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <h3 className="fs-5">Country Selection</h3>
                      <p>Choose your examination authority.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 p-2">
                  <div className={styles.aerocontainer}>
                    <div className="me-3">
                      <Image
                        src="/Images/clock.svg"
                        alt="airplane"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <h3 className="fs-5">Last Seen Questions</h3>
                      <p>Track your recent activity and review questions</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 p-2">
                  <div className={styles.aerocontainer}>
                    <div className="me-3">
                      <Image
                        src="/Images/arrows-rotate.svg"
                        alt="airplane"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <h3 className="fs-5">Daily Updates</h3>
                      <p>Fresh question bank updates every day.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <Image
              src="/Images/Rectangle 1.svg"
              width={500}
              height={500}
              className={`${styles.aeromainImage} w-100 h-auto`}
              alt="airplane"
            />
          </div>
        </div>
      </main>
      <section className={`${styles.sectiondarkbg} ${styles.aerombmiddle} p-3 pt-5 pb-5`} >
        <div className={`container`}>
          <div className="mb-4">
            <h4 className="text-light text-center fw-medium">Your Path To ATPL Success</h4>
          </div>
          <div className="row">
            <div className="col-lg-4 p-2">
              <div className={styles.aerocontainerSimple}>
                <div className="me-3">
                  <Image
                    src="/Images/hourglass.svg"
                    alt="airplane"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="fs-5 mb-3">Real-Time Exam Intelligence</h3>
                  <p>Access our continuously updated question bank, verified by experienced ATPL instructors and recent test-takers.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className={styles.aerocontainerSimple}>
                <div className="me-3">
                  <Image
                    src="/Images/rocket.svg"
                    alt="airplane"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="fs-5 mb-3">Strategic Success Path</h3>
                  <p>Our exam experts identifies high-probability exam topics and creates a personalized study path. </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-2">
              <div className={styles.aerocontainerSimple}>
                <div className="me-3">
                  <Image
                    src="/Images/chart-pie.svg"
                    alt="airplane"
                    width={20}
                    height={20}
                  />
                </div>
                <div>
                  <h3 className="fs-5 mb-3">Performance Optimizer</h3>
                  <p>Every question in our bank comes with a dynamic Quality Score, calculated from recent exam appearances. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.aerombmiddle} p-3 pt-5 pb-5`} >
        <div className={`container`}>
          <div className="mb-5 text-center ">
            <h4 className="fw-medium">Our Database Contains Following Countries</h4>
            <p>Choose your aviation authority to access region-specific ATPL exam questions and study materials</p>
          </div>
          <div className="row">
            <div className="col-lg-3 p-2">
              <div className={styles.aerocontainerEffient}>
                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <Image
                      src="/Images/con1.svg"
                      alt="airplane"
                      width={70}
                      height={60}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ marginRight: '5px' }}
                        fill="#FFD700"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="fs-5 mb-1">Spain</h3>
                  <p>ATPL Exam Mock</p>
                </div>
                <p className="fw-medium" style={{ fontSize: "12px", fontWeight: "bold" }}>European Union Aviation Safety Agency</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/blank-book-open.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">15,000+ Questions</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/users.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">25K+ Active Users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2">
              <div className={styles.aerocontainerEffient}>
                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <Image
                      src="/Images/con2.svg"
                      alt="airplane"
                      width={70}
                      height={60}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ marginRight: '5px' }}
                        fill="#FFD700"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="fs-5 mb-1">Germany</h3>
                  <p>ATPL Exam Mock</p>
                </div>
                <p className="fw-medium" style={{ fontSize: "12px", fontWeight: "bold" }}>European Union Aviation Safety Agency</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/blank-book-open.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">15,000+ Questions</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/users.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">25K+ Active Users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2">
              <div className={styles.aerocontainerEffient}>
                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <Image
                      src="/Images/con3.svg"
                      alt="airplane"
                      width={70}
                      height={60}
                      className="rounded-4"
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ marginRight: '5px' }}
                        fill="#FFD700"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="fs-5 mb-1">UK CAA</h3>
                  <p>ATPL Exam Mock</p>
                </div>
                <p className="fw-medium" style={{ fontSize: "12px", fontWeight: "bold" }}>European Union Aviation Safety Agency</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/blank-book-open.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">15,000+ Questions</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/users.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">25K+ Active Users</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 p-2">
              <div className={styles.aerocontainerEffient}>
                <div className="d-flex justify-content-between mb-4">
                  <div>
                    <Image
                      src="/Images/con4.svg"
                      alt="airplane"
                      width={70}
                      height={60}
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        style={{ marginRight: '5px' }}
                        fill="#FFD700"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="fs-5 mb-1">Portugal</h3>
                  <p>ATPL Exam Mock</p>
                </div>
                <p className="fw-medium" style={{ fontSize: "12px", fontWeight: "bold" }}>European Union Aviation Safety Agency</p>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/blank-book-open.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">15,000+ Questions</p>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <span className="me-2">
                    <Image
                      src="/Images/users.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </span>
                  <p className="mb-0">25K+ Active Users</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className={`container ${styles.aerombmiddleXL}`}>

        <h4 className={styles.heading4dark}>YOUR JOURNEY TO THE SKIES</h4>
        <div className="row">
          <div className="col-lg-6">
            <div className={styles.aerombmiddleL}>
              <h2 className="mb-2">Transform Your ATPL <br />
                Dreams Into Reality</h2>
              <p className="mb-2">
                Navigate through your aviation journey with confidence. Our platform turns complex ATPL subjects into clear, achievable goals.
              </p>
            </div>
            <div className={styles.aerombmiddle}>
              <div className="mb-4">
                <div className="d-flex">
                  <div className="me-3">
                    <Image
                      src="/Images/plane.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="fs-5">Precision Learning</h3>
                    <p>Master complex ATPL subjects with our structured approach</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex">
                  <div className="me-3">
                    <Image
                      src="/Images/bullseye-pointer.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="fs-5">Real Exam Focus</h3>
                    <p>Practice with questions from recent ATPL examinations</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex">
                  <div className="me-3">
                    <Image
                      src="/Images/signal.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="fs-5">Performance Tracking</h3>
                    <p>Monitor your progress with detailed analytics</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="d-flex">
                  <div className="me-3">
                    <Image
                      src="/Images/globe.svg"
                      alt="airplane"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div>
                    <h3 className="fs-5">Global Standards</h3>
                    <p>Align with international aviation requirements</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <Link
                  className="btn btn-warning rounded-2 ps-5 pe-5 pt-3 pb-3 fw-medium"
                  href={'#'}
                >
                  Explore Your Path
                </Link>
              </div>
              <div className="mb-4">
                <p>Join 50,000+ aspiring pilots worldwide</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 ps-5">
            <Image
              src="/Images/image_1_1__1_.png"
              alt="airplane"
              width={400}
              height={500}
            />
          </div>

        </div>
      </section>
      <section className={`container ${styles.aerombmiddleXL}`}>
        <div className="text-center">
          <h2 className={styles.heading2dark}>Testimolish</h2>
          <p>Get to know what our students say about our platform database</p>
        </div>
        <div>
         <Slider items={data} itemsPerSlide={3} transitionDuration={0.5} />
        </div>
      </section>
      <section className={`${styles.aerombmiddleXL}`}>
        <div className="text-center">
          <h2 className={styles.heading2dark}>Featured In</h2>
          <p>Recognized by leading aviation and technology platform</p>
        </div>
        <div>
          <MarqueeSlider items={items} scrollSpeed={2}  />
        </div>
      </section>
      <Footer/>
    </>
  );
}
