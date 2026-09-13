
// const Contact = () => {
//   return (
//     <div>Contact us</div>
//   )
// }

// export default Contact 



const Contact = () => {
    return (
        <div className="contact-page">

            <section className="contact-hero">
                <div className="contact-hero-content">
                    <span className="contact-badge">GET IN TOUCH</span>

                    <h1>
                        Let's talk about
                        <span> food.</span>
                    </h1>

                    <p>
                        Have a question, feedback, or just want to say hello?
                        We'd love to hear from you.
                    </p>
                </div>
            </section>

            <section className="contact-section">

                <div className="contact-info">
                    <span className="section-label">CONTACT US</span>

                    <h2>
                        We're here to
                        <span> help.</span>
                    </h2>

                    <p>
                        Whether you have a question about an order, need help
                        with something, or simply want to share your feedback,
                        feel free to reach out.
                    </p>

                    <div className="contact-details">

                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div>
                                <h3>Email</h3>
                                <p>hello@foodie.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div>
                                <h3>Location</h3>
                                <p>New Delhi, India</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="contact-form-container">

                    <form className="contact-form">

                        <h3>Send us a message</h3>

                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                            />
                        </div>

                        <div className="form-group">
                            <label>Message</label>
                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                            ></textarea>
                        </div>

                        <button type="submit">
                            Send Message →
                        </button>

                    </form>

                </div>

            </section>

        </div>
    );
};

export default Contact;