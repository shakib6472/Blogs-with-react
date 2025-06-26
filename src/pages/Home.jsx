import React from 'react';
import style from '../assets/css/Home.module.scss';

const Home = () => {
  return (
    <div className={style.home}>

      {/* Hero Section */}
      <section className={style.hero} id="home">
        <div className={style.hero__content}>
          <h1 className={style.hero__title}>Welcome to DevTalks Blog</h1>
          <p className={style.hero__subtitle}>
            Latest articles on web development, tech tips, and tutorials
          </p>
          <a href="#blogs" className={style.hero__btn}>Explore Posts</a>
        </div>
        <div className={style.hero__image}>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/934/622/original/social-media-marketing-expert-website-hero-section-design-free-vector.jpg"
            alt="Hero Illustration"
          />
        </div>
      </section>

      {/* Blogs Section */}
      <section className={style.blogs} id="blogs">
        <h2 className={style.section_title}>Latest Articles</h2>
        <div className={style.blogs__grid}>
          {[1, 2, 3, 4].map((_, idx) => (
            <div className={style.blog_card} key={idx}>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=180"
                alt={`Blog ${idx + 1}`}
                className={style.blog_card__image}
              />
              <div className={style.blog_card__body}>
                <h3 className={style.blog_card__title}>Understanding React Hooks</h3>
                <p className={style.blog_card__excerpt}>
                  A beginner's guide to useState and useEffect—with real examples and best practices.
                </p>
                <a href="/blog/react-hooks" className={style.blog_card__link}>
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className={style.about}>
        <h2 className={style.section_title}>About This Blog</h2>
        <p className={style.about__text}>
          DevTalks is a blog created by developers for developers. We share practical tutorials,
          code walkthroughs, and personal stories from the world of programming.
        </p>
      </section>
    </div>
  );
};

export default Home;
