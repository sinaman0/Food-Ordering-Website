// const About = () => {
//     return(
//         <h1>This is aman singh</h1>
//     )
// }

// export default About;

import React from "react";


const About = () => {
    return (
        <main className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="about-hero-content">
                    <span className="about-badge">ABOUT US</span>

                    <h1>
                        Good food.
                        <br />
                        <span>Good mood.</span>
                    </h1>

                    <p>
                        We make discovering great food simple, convenient,
                        and enjoyable. From your favorite classics to new
                        places waiting to be discovered, we're here to bring
                        it all closer to you.
                    </p>

                    <a href="#story" className="about-hero-btn">
                        Our Story ↓
                    </a>
                </div>

                <div className="about-hero-visual">
                    <div className="hero-circle">
                        🍕
                    </div>

                    <div className="floating-card card-one">
                        <span>⭐</span>
                        <div>
                            <strong>4.8/5</strong>
                            <small>Customer Rating</small>
                        </div>
                    </div>

                    <div className="floating-card card-two">
                        <span>🚴</span>
                        <div>
                            <strong>Fast Delivery</strong>
                            <small>Fresh at your door</small>
                        </div>
                    </div>
                </div>
            </section>


            {/* Story Section */}
            <section className="about-story" id="story">
                <div className="section-label">OUR STORY</div>

                <div className="story-grid">
                    <div className="story-heading">
                        <h2>
                            Built around one simple idea:
                            <span> food should bring people together.</span>
                        </h2>
                    </div>

                    <div className="story-content">
                        <p>
                            We started with a simple goal — make ordering food
                            feel effortless. No complicated menus, no endless
                            searching. Just discover, choose, and enjoy.
                        </p>

                        <p>
                            Our platform brings restaurants and food lovers
                            together in one place, making it easier to discover
                            something delicious whenever you're hungry.
                        </p>

                        <p>
                            Whether you're grabbing a quick lunch, planning
                            dinner with friends, or simply treating yourself,
                            we're here to make every order a little better.
                        </p>
                    </div>
                </div>
            </section>


            {/* Stats */}
            <section className="about-stats">
                <div className="stat">
                    <h3>500+</h3>
                    <p>Restaurants</p>
                </div>

                <div className="stat">
                    <h3>10K+</h3>
                    <p>Happy Customers</p>
                </div>

                <div className="stat">
                    <h3>50K+</h3>
                    <p>Orders Delivered</p>
                </div>

                <div className="stat">
                    <h3>4.8★</h3>
                    <p>Average Rating</p>
                </div>
            </section>


            {/* Values */}
            <section className="values-section">
                <div className="values-header">
                    <div className="section-label">WHAT WE BELIEVE</div>

                    <h2>
                        More than just
                        <span> food delivery.</span>
                    </h2>

                    <p>
                        Everything we build is guided by the experience
                        we want our customers to have.
                    </p>
                </div>

                <div className="values-grid">

                    <article className="value-card">
                        <div className="value-icon">🥗</div>
                        <h3>Quality First</h3>
                        <p>
                            Great experiences start with great food.
                            We focus on quality at every step.
                        </p>
                    </article>

                    <article className="value-card">
                        <div className="value-icon">⚡</div>
                        <h3>Simple & Fast</h3>
                        <p>
                            Finding and ordering your favorite food
                            should take just a few moments.
                        </p>
                    </article>

                    <article className="value-card">
                        <div className="value-icon">❤️</div>
                        <h3>Customer First</h3>
                        <p>
                            Every feature we build starts with one
                            question — does it make things better for you?
                        </p>
                    </article>

                    <article className="value-card">
                        <div className="value-icon">🌱</div>
                        <h3>Always Improving</h3>
                        <p>
                            We keep learning, improving, and finding
                            better ways to serve our community.
                        </p>
                    </article>

                </div>
            </section>


            {/* CTA */}
            <section className="about-cta">
                <div>
                    <span className="about-badge">READY TO EAT?</span>

                    <h2>
                        Your next favorite meal
                        <br />
                        is waiting.
                    </h2>

                    <p>
                        Explore restaurants, discover something new,
                        and order your favorite food.
                    </p>

                    <a href="/" className="cta-button">
                        Explore Restaurants →
                    </a>
                </div>
            </section>

        </main>
    );
};

export default About;