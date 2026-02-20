
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};


export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <div className="container">
            <Head>
                <title>AVynix Technologies - Dependable Digital Solutions</title>
                <meta name="description" content="AVynix Technologies - We engineer digital solutions that are reliable, efficient, and built to last." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <div className="logo-container">
                    <Image
                        src="/new_Avynix_light.png"
                        alt="AVynix Technologies Logo"
                        width={180}
                        height={60}
                        objectFit="contain"
                        priority
                    />
                </div>
                <button
                    className="mobile-menu-btn"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                </button>
                <nav role="navigation" aria-label="Main Navigation" className={mobileMenuOpen ? 'nav-open' : ''}>
                    <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
                    <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
                    <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                </nav>
            </header>

            <main>
                <motion.div
                    className="hero"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div variants={fadeInUp}>
                        <h1>Engineering Digital Solutions Built to Last</h1>
                    </motion.div>
                    <motion.p variants={fadeInUp}>
                        At AVynix Technologies, we combine engineering discipline with quality assurance to deliver dependable digital solutions.
                    </motion.p>
                    <motion.div variants={fadeInUp}>
                        <motion.a
                            href="#contact"
                            className="cta-button"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Start A Project
                        </motion.a>
                    </motion.div>
                </motion.div>

                <section id="about" className="about">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2>Who We Are</h2>
                        <div className="about-content">
                            <p>
                                Founded by professionals with real-world development and testing experience, we focus on building clean, scalable, and performance-driven technology that supports sustainable business growth.
                            </p>
                            <p>
                                We don’t just design websites — we engineer digital solutions that are reliable, efficient, and built to last.
                            </p>
                        </div>
                    </motion.div>
                </section>

                <section id="services" className="services">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2 variants={fadeInUp}>
                            Our Services
                        </motion.h2>
                        <div className="service-grid">
                            {[
                                { title: "Business Websites", desc: "Professional, robust websites designed to establish credibility and generate leads." },
                                { title: "Maintenance & Support", desc: "Ongoing updates, performance monitoring, bug fixes, and security checks." },
                                { title: "Custom IT Solutions", desc: "Designed to solve specific business challenges." }
                            ].map((service, index) => (
                                <motion.article
                                    key={index}
                                    className="card"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                                >
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </motion.article>
                            ))}
                        </div>
                    </motion.div>
                </section>

                <section id="contact" className="contact">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeInUp}
                    >
                        <h2>Get In Touch</h2>
                        <div className="contact-card">
                            <p><strong>Contact:</strong> Vinay Tiwari</p>
                            <p><strong>Call/WhatsApp:</strong> <a href="tel:+919137918782" style={{ color: 'var(--primary-color)' }}>+91 9137918782</a></p>
                            <p><strong>Location:</strong> Mumbai, India</p>
                        </div>
                    </motion.div>
                </section>
            </main>

            <footer>
                <p>&copy; {new Date().getFullYear()} AVynix Technologies. All rights reserved.</p>
            </footer>
        </div>
    )
}
