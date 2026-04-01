"use client";
import styles from "./page.module.css";

const services = [
  {
    title: "Therapeutic Massage",
    price: "$140",
    duration: "50 min",
    description: "A full-session treatment plan for pain relief, reduced tension, and improved mobility based on your assessment.",
  },
  {
    title: "Deep Tissue Massage",
    price: "$130",
    duration: "50 min",
    description: "Focused work for chronic tightness and overuse patterns in neck, shoulders, back, hips, and legs.",
  },
  {
    title: "Trigger Point Therapy",
    price: "$120",
    duration: "50 min",
    description: "Direct pressure to myofascial trigger points to reduce referred pain and restore normal movement patterns.",
  },
  {
    title: "Lymphatic Drainage",
    price: "$120",
    duration: "50 min",
    description: "Gentle, targeted manual lymphatic techniques to reduce swelling and support post-treatment recovery.",
  },
  {
    title: "Joint & Mobility Work",
    price: "$130",
    duration: "50 min",
    description: "Soft-tissue and joint-focused techniques to improve range of motion and reduce movement restrictions.",
  },
  {
    title: "Neuromuscular Treatment",
    price: "$120",
    duration: "50 min",
    description: "Clinical manual therapy for persistent pain and dysfunctional muscle activation patterns.",
  },
];

const problemPoints = [
  "Pain keeps returning even after short-term relief.",
  "Stiffness and tension limit work, training, or sleep.",
  "Generic spa-style massage does not address root patterns.",
  "You need a skilled therapist who can adapt treatment in real time.",
];

const whyChoose = [
  "Assessment-driven treatment, not a one-size routine",
  "10 years of hands-on clinical experience",
  "Clear communication and measurable treatment goals",
  "In-home visits available for limited mobility clients",
];

const testimonials = [
  {
    quote: "For the first time in months I could turn my neck without pain after just two visits.",
    name: "Maria D., Naples",
  },
  {
    quote: "This is not a spa massage. It's precise, therapeutic work that actually improved my mobility.",
    name: "James R., North Naples",
  },
  {
    quote: "Borys explains exactly what he is doing and why. I feel stronger and move better every week.",
    name: "Olga P., Naples",
  },
];

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <span>📍 800 Seagate Dr, Unit 201, Naples, FL 34103</span>
          <span className={styles.topBarDot}>·</span>
          <a href="sms:+12392720598" className={styles.topBarLink}>📱 +1 (239) 272-0598 (text)</a>
          <span className={styles.topBarDot}>·</span>
          <a href="mailto:sapartherapy@gmail.com" className={styles.topBarLink}>✉ sapartherapy@gmail.com</a>
          <span className={styles.topBarDot}>·</span>
          <span>Free consultations for children under 16 and adults 65+</span>
        </div>
      </div>

      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span className={styles.navName}>Sapar Therapy</span>
          <span className={styles.navSub}>Naples, FL</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#how" className={styles.navLink}>How It Works</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#reviews" className={styles.navLink}>Reviews</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        <a href="sms:+12392720598" className={styles.navCta}>Book Appointment</a>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Licensed Massage Therapist · LMT MA 104946 · 10+ Years Experience</div>
          <h1 className={styles.heroTitle}>Get out of pain and<br />move normally again.</h1>
          <p className={styles.heroSubtitle}>
            Clinical therapeutic massage in Naples, FL for back pain, neck tension, restricted movement,
            and recovery. Personalized treatment, measurable progress, zero spa fluff.
          </p>
          <div className={styles.heroActions}>
            <a href="sms:+12392720598" className={styles.btnPrimary}>Book Appointment</a>
            <a href="tel:+12392720598" className={styles.btnSecondary}>Call Now</a>
          </div>
          <p className={styles.heroMeta}>Serving Naples and surrounding areas · In-office and in-home visits available</p>
        </div>
        <div className={styles.heroPhotoCol}>
          <div className={styles.heroImgWrap}>
            <img
              src="/borys.webp"
              alt="Borys Sapar Licensed Massage Therapist Naples FL"
              className={styles.heroImg}
            />
          </div>
          <div className={styles.heroImgCaption}>
            <div>
              <strong>Borys Sapar</strong>
              <p>Licensed Massage Therapist · MA 104946</p>
              <p>Physical & Occupational Therapy background</p>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.trustBar}>
        <div className={styles.trustItem}><strong>4.9/5</strong><span>Client satisfaction focus</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>10+</strong><span>Years clinical experience</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>APTA</strong><span>Affiliate member</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>LMT</strong><span>License MA 104946</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>In-home</strong><span>Visits available</span></div>
      </div>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>Problem to solution</p>
            <h2 className={styles.h2}>If pain keeps coming back, your treatment plan is missing precision.</h2>
          </div>
        </div>
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>What clients struggle with</h3>
            {problemPoints.map((item) => (
              <p key={item} className={styles.problemRow}>{item}</p>
            ))}
          </div>
          <div className={styles.problemCard}>
            <h3 className={styles.problemTitle}>How we solve it</h3>
            <p className={styles.problemLead}>
              We start with functional assessment, identify the real restriction pattern, then apply targeted techniques
              with continuous feedback and retesting in-session.
            </p>
            <p className={styles.problemLead}>
              Every visit has a clear purpose: less pain, better range, better function in daily life.
            </p>
            <a href="sms:+12392720598" className={styles.inlineCta}>Text to book your first visit →</a>
          </div>
        </div>
      </section>

      <section id="how" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>How it works</p>
            <h2 className={styles.h2}>A structured treatment process designed for lasting relief.</h2>
          </div>
        </div>
        <div className={styles.approachGrid}>
          <div className={styles.approachSteps}>
            {[
              { n: "01", title: "Assessment first", body: "We evaluate movement quality, tension patterns, and pain behavior before treatment starts." },
              { n: "02", title: "Personalized protocol", body: "Technique selection is customized to your body, symptoms, and treatment tolerance." },
              { n: "03", title: "Targeted manual work", body: "Precise hands-on therapy addresses trigger points, tissue restrictions, and compensations." },
              { n: "04", title: "Retest and progress", body: "We verify changes in range, pain, and function to guide your next session." },
            ].map(s => (
              <div key={s.n} className={styles.approachStep}>
                <span className={styles.approachN}>{s.n}</span>
                <div>
                  <p className={styles.approachStepTitle}>{s.title}</p>
                  <p className={styles.approachStepBody}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.approachPhotoWrap}>
            <img
              src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=90&fit=crop"
              alt="Therapeutic massage treatment"
              className={styles.approachPhotoImg}
            />
          </div>
        </div>
      </section>

      <section id="services" className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>Services & pricing</p>
            <h2 className={styles.h2}>Simple options. Clinical focus. No unnecessary add-ons.</h2>
          </div>
          <a href="sms:+12392720598" className={styles.btnPrimary}>Book Appointment</a>
        </div>
        <div className={styles.servicesGrid}>
          {services.map(s => (
            <article key={s.title} className={styles.svcCard}>
              <div className={styles.svcTop}>
                <h3 className={styles.svcTitle}>{s.title}</h3>
                <span className={styles.svcPrice}>{s.price}</span>
              </div>
              <p className={styles.svcDur}>{s.duration}</p>
              <p className={styles.svcDesc}>{s.description}</p>
              <a href="sms:+12392720598" className={styles.svcCta}>Book this service →</a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>Why choose us</p>
            <h2 className={styles.h2}>Premium care means precision, consistency, and trust.</h2>
          </div>
        </div>
        <div className={styles.whyGrid}>
          {whyChoose.map((item, idx) => (
            <article key={item} className={styles.whyCard}>
              <span className={styles.whyNum}>{`0${idx + 1}`}</span>
              <p className={styles.whyText}>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.twoColSection}>
          <div className={styles.twoColLeft}>
            <p className={styles.label}>Experience</p>
            <h2 className={styles.h2}>What your first visits look like</h2>
            <p className={styles.bodyText}>You will always know what we are working on, why it matters, and what progress to expect next.</p>
          </div>
          <div className={styles.twoColRight}>
            {[
              "Visit 1: Assessment + first targeted treatment to reduce active pain and restore key mobility.",
              "Visit 2: Deeper correction of dominant restrictions and compensation patterns.",
              "Visit 3: Progress retest and protocol adjustment based on your functional response.",
              "Ongoing: Maintenance or performance-focused sessions based on your goals."
            ].map((c, i) => (
              <div key={i} className={styles.condRow}>
                <span className={styles.condNum}>{String(i+1).padStart(2,"0")}</span>
                <p className={styles.condText}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className={`${styles.section} ${styles.sectionCream}`}>
        <p className={styles.label}>Reviews</p>
        <h2 className={styles.h2}>Trusted by clients who need results, not guesswork.</h2>
        <div className={styles.reviewsGrid}>
          {testimonials.map((item) => (
            <article key={item.name} className={styles.reviewCard}>
              <p className={styles.reviewQuote}>“{item.quote}”</p>
              <p className={styles.reviewName}>{item.name}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <p className={styles.label}>Ready to start?</p>
          <h2 className={styles.h2Light}>Book your appointment and get a treatment plan that fits your body.</h2>
          <div className={styles.heroActions}>
            <a href="sms:+12392720598" className={styles.btnPrimary}>Book Appointment</a>
            <a href="tel:+12392720598" className={styles.btnSecondaryLight}>Call +1 (239) 272-0598</a>
          </div>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.labelLight}>Location & contact</p>
            <h2 className={styles.h2Light}>Serving Naples, FL and nearby areas.</h2>
            <p className={styles.contactSub}>Text or call for the fastest response. Same-week scheduling available.</p>
          </div>
          <div className={styles.contactCards}>
            <a href="sms:+12392720598" className={styles.contactCard}>
              <span className={styles.contactCardIcon}>📱</span>
              <div>
                <p className={styles.contactCardLabel}>Text us</p>
                <p className={styles.contactCardVal}>+1 (239) 272-0598</p>
              </div>
            </a>
            <a href="mailto:sapartherapy@gmail.com" className={styles.contactCard}>
              <span className={styles.contactCardIcon}>✉</span>
              <div>
                <p className={styles.contactCardLabel}>Email us</p>
                <p className={styles.contactCardVal}>sapartherapy@gmail.com</p>
              </div>
            </a>
            <a href="https://maps.google.com/?q=800+Seagate+Dr+Unit+201+Naples+FL+34103" target="_blank" rel="noopener noreferrer" className={styles.contactCard}>
              <span className={styles.contactCardIcon}>📍</span>
              <div>
                <p className={styles.contactCardLabel}>Visit us</p>
                <p className={styles.contactCardVal}>800 Seagate Dr, Unit 201<br />Naples, FL 34103</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Sapar Therapy · Borys Sapar LMT · Naples, FL · License MA 104946</span>
        <span>massagetherapy-naples.com</span>
      </footer>

      <div className={styles.stickyCta}>
        <a href="sms:+12392720598" className={styles.stickyPrimary}>Book</a>
        <a href="tel:+12392720598" className={styles.stickySecondary}>Call</a>
      </div>

    </main>
  );
}
