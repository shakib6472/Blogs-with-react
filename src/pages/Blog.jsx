import React from 'react';
import style from '../assets/css/Home.module.scss';
function Blogs() {
  return ( 
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
                <a href={`/blog/react-hooks-${idx + 1}`} className={style.blog_card__link}>
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
}
 

export default Blogs;
