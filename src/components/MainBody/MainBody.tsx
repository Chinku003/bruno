import styles from './MainBody.module.css';
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
    FaWhatsapp,
} from 'react-icons/fa';

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
    <div className={styles.projectsHeader}>
        <h1 className={styles.projectsTitle}>Projects</h1>
        <p className={styles.projectsSubtitle}>A few things I’ve built—each one designed for clarity, performance, and real user value.</p>
    </div>

    <div className={styles.projectsGrid}>
        {[
            {
                title: 'Portfolio Website',
                description: 'A personal portfolio showcasing skills, projects, and experience. Built with React and modern styling.',
                tags: ['React', 'TypeScript', 'CSS Modules']
            },
            {
                title: 'E-commerce Platform',
                description: 'An online store with authentication, product browsing, and a shopping cart experience.',
                tags: ['Django', 'React', 'REST APIs']
            },
            {
                title: 'Task Management App',
                description: 'Create, update, and delete tasks with a clean workflow for everyday productivity.',
                tags: ['React', 'Node.js', 'CRUD']
            },
            {
                title: 'Blogging Platform',
                description: 'A content platform that supports creating, editing, and publishing blog posts.',
                tags: ['Python', 'React', 'CMS']
            },
            {
                title: 'Weather App',
                description: 'Fetches weather data from a REST API and displays current conditions and forecasts.',
                tags: ['JavaScript', 'REST API', 'UI/UX']
            },
            {
                title: 'Teaching Sourcing',
                description: 'A platform for discovering educational resources and connecting educators with students.',
                tags: ['Web App', 'Education', 'Community']
            }
        ].map((project) => (
            <article key={project.title} className={styles.projectCard}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                    ))}
                </div>
            </article>
        ))}
    </div>
</section>

<section className={styles.education}>
    <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Education</h1>
        <p className={styles.sectionSubtitle}>Academic background and training that shaped my teaching and development journey.</p>
    </div>

    <div className={styles.educationGrid}>
        <article className={styles.educationCard}>
            <h2 className={styles.educationCardTitle}>Bachelor of Science in Computer Science</h2>
            <p className={styles.educationCardText}>IT Masters University Australia</p>
        </article>

        <article className={styles.educationCard}>
            <h2 className={styles.educationCardTitle}>Degree of Education (Information Technology)</h2>
            <p className={styles.educationCardText}>Tom Mboya University</p>
        </article>
    </div>
</section>
 
<section className={styles.contact}>
    <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Contact</h1>
        <p className={styles.sectionSubtitle}>Send a message or reach out directly—I’ll respond as soon as possible or maybe not.</p>
    </div>

    <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
            <h2 className={styles.contactCardTitle}>Sema  wantam  kwanza</h2>
            <form className={styles.contactForm}>
                <input className={styles.contactInput} type="text" placeholder="Your Name" />
                <input className={styles.contactInput} type="email" placeholder="Your Email" />
                <textarea className={styles.contactTextarea} placeholder="Your Message"></textarea>
                <button className={styles.contactButton} type="submit">Send Message</button>
            </form>
        </div>

        <div className={styles.contactCard}>
            <h2 className={styles.contactCardTitle}>Social</h2>
            <div className={styles.contactHint}>
                <a className={styles.socialIcon} href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <FaFacebookF />
                </a>
                <a className={styles.socialIcon} href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <FaLinkedinIn />
                </a>
                <a className={styles.socialIcon} href="https://instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
                <a className={styles.socialIcon} href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <FaWhatsapp />
                </a>
                <a className={styles.socialIcon} href="https://tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
                    <FaTiktok />
                </a>
            </div>
        </div>
    </div>
</section>
</section>


    
)}
export default MainBody;

