"use client";
import styles from "./page.module.css";

const services = [
  { title: "Therapeutic Massage", price: "$140", duration: "50 min", description: "Customized work to relieve muscle tension, reduce pain, and promote overall wellness. Each session targets your specific concerns." },
  { title: "Joint Massage", price: "$130", duration: "50 min", description: "Improves elasticity of periarticular tissues, blood circulation, reduces joint pain, and increases range of motion to anatomical norm." },
  { title: "Lymphatic Drainage", price: "$120", duration: "50 min", description: "Manual lymphatic drainage relieves swelling caused when medical treatment or illness blocks your lymphatic system." },
  { title: "Trigger Point Massage", price: "$120", duration: "50 min", description: "Targeted pressure on specific points to release muscles and blood flow. Best for injuries, chronic pain, and muscle tension." },
  { title: "Neuromuscular Massage", price: "$120", duration: "50 min", description: "Firm, sustained pressure over painful taut bands of muscle — myofascial trigger points — to release tension and facilitate blood flow." },
  { title: "Deep Tissue Massage", price: "$130", duration: "50 min", description: "Addresses underlying causes of pain and tension at the body's deeper muscular levels. Lengthens and relaxes muscles, increases blood flow." },
];

const benefits = [
  { num: "01", text: "The therapist uses feedback from the body's responses to guide technique, aiming for comfort and relaxation." },
  { num: "02", text: "Many clients experience a sense of relief and improvement after their first session." },
  { num: "03", text: "The approach is adaptive — adjustments are made based on the client's feedback during the session." },
  { num: "04", text: "This form of therapy supports the body's natural processes and promotes a sense of well-being." },
  { num: "05", text: "Initial pain relief is often a direct benefit, with potential for further positive effects on overall health." },
  { num: "06", text: "Each session is fully customized to meet the individual need of the client." },
];

const conditions = [
  "Alleviating various types of pain",
  "Easing discomfort in the back and lower back, including shooting pains",
  "Helping with muscle tension, spasms, and tightness",
  "Assisting those experiencing stiffness and restricted movements",
  "Supporting symptoms related to stress, chronic fatigue and sleep disturbances",
  "Improving circulation issues, numbness or pins and needles in limbs",
  "Enhancing emotional well-being",
];

const videoIds = [
  "8OIbYAKD73k","qdvyyI6pUfw","7Yakr7oGplc","jHc9mhFYdVw",
  "hkFUTGV0YTw","ow5285rcLmE","6gmsskBcFB4","Mh40RQdSB7Y",
  "hWSimh5PFxs","DBrCzCiiRAY","SsW8da82I0o","r1RMRwJqid0",
  "vOXAndsGFJ0","Ezm5l1vpbJU","FeyAYO97np0","Zw3GbM9Kccc",
  "jDAO7UGO8Hk","5XAPsR-Rm28","XBECTe_KQU8","A6cXwY91pUI",
  "R5INGVGWGZw","CjB01XZOwrY",
];

export default function Home() {
  return (
    <main className={styles.main}>

      {/* TOP INFO BAR */}
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

      {/* NAV */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <span className={styles.navName}>Sapar Therapy</span>
          <span className={styles.navSub}>Naples, FL</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#approach" className={styles.navLink}>Approach</a>
          <a href="#services" className={styles.navLink}>Services</a>
          <a href="#videos" className={styles.navLink}>Reviews</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </div>
        <a href="sms:+12392720598" className={styles.navCta}>Book Now</a>
      </nav>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>Licensed Massage Therapist · LMT MA 104946 · APTA Member</div>
          <h1 className={styles.heroTitle}>Therapeutic massage<br />that actually works.</h1>
          <p className={styles.heroSubtitle}>
            Individualized treatment built on kinesiological assessment, targeted techniques,
            and measurable results — not a generic spa session.
          </p>
          <div className={styles.heroActions}>
            <a href="sms:+12392720598" className={styles.btnPrimary}>Book a Session</a>
            <a href="#services" className={styles.btnSecondary}>View Services & Pricing</a>
          </div>
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
              <p>Licensed Massage Therapist · 10 years experience</p>
              <p>Education: Bugai University · Physical & Occupational Therapy</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className={styles.trustBar}>
        <div className={styles.trustItem}><strong>10</strong><span>Years of experience</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>APTA</strong><span>International affiliate member</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>LMT</strong><span>License MA 104946</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>In-home</strong><span>Visits available</span></div>
        <div className={styles.trustDiv} />
        <div className={styles.trustItem}><strong>Free</strong><span>Consultations for 65+ and under 16</span></div>
      </div>

      {/* APPROACH */}
      <section id="approach" className={styles.section}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>How it works</p>
            <h2 className={styles.h2}>Individualized Therapeutic Approach</h2>
          </div>
        </div>
        <div className={styles.approachGrid}>
          <div className={styles.approachSteps}>
            {[
              { n: "01", title: "Kinesiological muscle testing", body: "The key advantage of this system is the use of kinesiological muscle testing to assess the functional condition of the entire body." },
              { n: "02", title: "Individualized protocol", body: "Based on test results, a personalized protocol incorporating various massage techniques is developed, tailored to the client's specific needs." },
              { n: "03", title: "Precise, targeted treatment", body: "This approach allows for precise, conscious, and targeted treatment, promoting the restoration of balance, mobility, and movement quality." },
              { n: "04", title: "Retesting & kinesiology taping", body: "At session end, the affected area is retested to confirm improvements. Kinesiology taping helps maintain results and supports optimal performance." },
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

      {/* BENEFITS */}
      <section className={`${styles.section} ${styles.sectionCream}`}>
        <p className={styles.label}>Benefits</p>
        <h2 className={styles.h2}>We work hard every day to make life of our clients better and happier</h2>
        <div className={styles.benefitsGrid}>
          {benefits.map(b => (
            <div key={b.num} className={styles.benefitCard}>
              <span className={styles.benefitNum}>{b.num}</span>
              <p className={styles.benefitText}>{b.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BAND */}
      <div className={styles.quoteBand}>
        <img
          src="/treatment.jpg"
          alt="Therapeutic manual massage — hands-on treatment"
          className={styles.quoteBandBg}
        />
        <div className={styles.quoteBandOverlay} />
        <blockquote className={styles.quoteBandText}>
          "In the vast majority of cases, full functional restoration is achieved."
        </blockquote>
      </div>

      {/* CONDITIONS */}
      <section className={styles.section}>
        <div className={styles.twoColSection}>
          <div className={styles.twoColLeft}>
            <p className={styles.label}>Who it helps</p>
            <h2 className={styles.h2}>Particularly beneficial for</h2>
            <p className={styles.bodyText}>Massage therapy can address a wide range of physical and stress-related conditions. Free consultations are available for children under 16 and adults aged 65 and older.</p>
            <p className={styles.bodyText} style={{marginTop: '12px'}}>In-home visits available for clients with limited mobility — <a href="mailto:sapartherapy@gmail.com" className={styles.inlineLink}>sapartherapy@gmail.com</a></p>
          </div>
          <div className={styles.twoColRight}>
            {conditions.map((c, i) => (
              <div key={i} className={styles.condRow}>
                <span className={styles.condNum}>{String(i+1).padStart(2,"0")}</span>
                <p className={styles.condText}>{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className={`${styles.section} ${styles.sectionCream}`}>
        <div className={styles.sectionHead}>
          <div>
            <p className={styles.label}>Services & pricing</p>
            <h2 className={styles.h2}>Every session is personalized to your needs.</h2>
          </div>
          <a href="sms:+12392720598" className={styles.btnPrimary}>Book Now</a>
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

      {/* VIDEOS */}
      <section id="videos" className={styles.section}>
        <p className={styles.label}>What people say about us</p>
        <h2 className={styles.h2}>See the work in practice.</h2>
        <div className={styles.videoGrid}>
          {videoIds.map(id => (
            <div key={id} className={styles.videoCard}>
              <div className={styles.videoEmbed}>
                <iframe
                  src={`https://www.youtube.com/embed/${id}`}
                  title="Sapar Therapy video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={`${styles.section} ${styles.sectionDark}`}>
        <div className={styles.contactGrid}>
          <div>
            <p className={styles.labelLight}>Get in touch</p>
            <h2 className={styles.h2Light}>Ready to book<br />or have a question?</h2>
            <p className={styles.contactSub}>Reach out by text or email. Borys responds quickly.</p>
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

    </main>
  );
}
