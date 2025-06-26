import React from 'react';

const About = () => (
    <div style={{ maxWidth: 800, margin: '40px auto', padding: '24px', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h1>About Us</h1>
        <p>
            Welcome to our Blog App! We are passionate about sharing knowledge, ideas, and stories with the world.
        </p>
        <h2>Our Mission</h2>
        <p>
            Our mission is to create a platform where everyone can express themselves, learn from others, and connect through meaningful content.
        </p>
        <h2>What We Offer</h2>
        <ul>
            <li>Easy-to-use blogging tools</li>
            <li>Community-driven content</li>
            <li>Responsive and modern design</li>
            <li>Safe and supportive environment</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
            Have questions or feedback? Reach out at <a href="mailto:contact@blogapp.com">contact@blogapp.com</a>.
        </p>
    </div>
);

export default About;
