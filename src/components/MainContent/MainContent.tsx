// CSS
import styles from './MainContent.module.css';


function MainContent() {
  return (
    <main className={styles['main-container']}>
      <h1 className={styles['header']}>Fun facts about React</h1>
      <ul className={styles['list']}>
        <li className={styles['element']}>First release in 2013</li>
        <li className={styles['element']}>Creator Jordan Walke</li>
        <li className={styles['element']}>100k stars on github</li>
        <li className={styles['element']}>Facebook uses and contributes to React</li>
        <li className={styles['element']}>Used by thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default MainContent;