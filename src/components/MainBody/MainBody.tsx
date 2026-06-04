import styles from './MainBody.module.css';

function MainBody(){
    return(
<section className={styles.mainBody}>
<div className={styles.heroSection}>
    <h1 className={styles.heroTitle}>DANIEL MWANGI</h1>
</div>
<div className={styles.aboutMe}>
    <div className={styles.aboutHeader}>
        <div>
            <h1>About Me</h1>
            <p className={styles.aboutIntro}>
                I combine teaching, mentoring, and software development to create meaningful learning experiences and polished digital solutions.
            </p>
        </div>
        <div className={styles.aboutBadge}>Educator · Developer · Mentor</div>
    </div>

    <div className={styles.aboutGrid}>
        <div className={styles.aboutContent}>
            <p className={styles.aboutText}>
                I am a passionate educator and software developer with experience in both teaching and technology. As a teacher, I specialize in Mathematics, Computer Studies, Business Studies, Swimming, and Chess, helping students build confidence, discipline, and practical skills. As a software developer, I am proficient in HTML, CSS, Tailwind CSS, TypeScript, ShadCN, JavaScript, React, Python, and Django, creating modern, responsive, and user-friendly web applications.
            </p>

            <div className={styles.tagList}>
                <span className={styles.tag}>Mathematics</span>
                <span className={styles.tag}>Computer Studies</span>
                <span className={styles.tag}>Business Studies</span>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Django</span>
            </div>
        </div>

        <div className={styles.aboutCards}>
            <div className={styles.infoCard}>
                <h2>Teaching Focus</h2>
                <p>Supporting students with practical skills, confidence, and growth through tailored lessons in math, business, and computer studies.</p>
            </div>
            <div className={styles.infoCard}>
                <h2>Development Experience</h2>
                <p>Building modern web applications using responsive UI, clean code, and scalable tools like React, TypeScript, and Django.</p>
            </div>
            <div className={styles.statGrid}>
                <div className={styles.statItem}>
                    <strong>5+</strong>
                    <span>Years teaching</span>
                </div>
                <div className={styles.statItem}>
                    <strong>10+</strong>
                    <span>Projects built</span>
                </div>
                <div className={styles.statItem}>
                    <strong>50+</strong>
                    <span>Students mentored</span>
                </div>
            </div>
        </div>
    </div>
</div>

<section className={styles.skills}>
    <h1>Skills</h1>
    <div className={styles.skillsGrid}>
        <div className={styles.skillCard}>
            <h2>HTML</h2>
            <p>Semantic mark-up for accessible layouts.</p>
        </div>
        <div className={styles.skillCard}>
            <h2>CSS</h2>
            <p>Responsive styles, layout and animation.</p>
        </div>
        <div className={styles.skillCard}>
            <h2>Tailwind CSS</h2>
            <p>Utility-first styling for fast UI development.</p>
        </div>
        <div className={styles.skillCard}>
            <h2>ShadCN</h2>
            <p>Component-driven design with modern styling.</p>
        </div>
        <div className={styles.skillCard}>
            <h2>JavaScript</h2>
            <p>Interactive behavior and client-side logic.</p>
        </div>
        <div className={styles.skillCard}>
            <h2>React</h2>
            <p>Reusable UI components and app architecture.</p>
        </div>
    </div>
</section>


<section className={styles.projects}>
    <h1>projects/Experience</h1>
    <div>
        <ul>
            <li>Project 1: Portfolio Website - A personal portfolio website showcasing my skills, projects, and experience. Built with React and Tailwind CSS.</li>
            <li>Project 2: E-commerce Platform - An online store built with Django and React, featuring user authentication, product listings, and a shopping cart.</li>
            <li>Project 3: Task Management App - A task management application developed using React and Node.js, allowing users to create, update, and delete tasks.</li>
            <li>Project 4: Blogging Platform - A content management system built with Python and React, enabling users to create, edit, and publish blog posts.</li>
            <li>Project 5: Weather App - A simple weather application built with JavaScript and a REST API, displaying current weather conditions and forecasts.</li>
            <li>Project 6: Teaching Sourcing - A platform for sourcing educational resources and connecting educators with students.</li>
        </ul>
        
        
        </div>
        
        
</section>

<section className={styles.education}>
    <h1>Education</h1>
    <div>
        <ul>
            <li>Bachelor of Science in Computer Science at IT MASTERS UNIVRSITY AUSTRALIA</li>
            <li>Degree of Education with information technology at TOM MBOYA UNIVERSITY</li>
        </ul>
    </div>
</section>
 
<section className={styles.contact}>
    <h1>Contact</h1>
    <div>
        <h2>send your message</h2>
        <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
        </form>
        <ul>
            <li>kushpi@gmail.com</li>
        </ul>
    </div>
</section>
</section>


    
)}
export default MainBody;