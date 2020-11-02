import Link from 'next/link';

import styles from './Billboard.module.scss';

const Billboard = (props) => {
    console.log(props)
  return (
    <section className={styles.billboard}>
      <img src={props.billboard.image} />
      <div className={styles.intro}>
        <h2>{props.billboard.title}</h2>
        <p>
          {props.billboard.description}
        </p>
        <Link href={props.billboard.buttonLink}>
          <a className={`button ${props.billboard.buttonClass}`}>{props.billboard.buttonText}</a>
        </Link>
      </div>
    </section>
  );
};

export default Billboard;
