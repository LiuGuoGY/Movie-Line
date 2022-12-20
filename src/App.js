import styles from './App.module.css';
import { Divider } from 'antd';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.appBackgroud}>
        <div className={styles.ellipse1} />
        <div className={styles.ellipse2} />
        <div className={styles.ellipse3} />
        <div className={styles.ellipse4} />
        <div className={styles.ellipse5} />
        <div className={styles.ellipse6} />
        <div className={styles.ellipse7} />
      </div>
      <div className={styles.content}>
        <div className={styles.timeline}></div>
      </div>
      <div className={styles.dateBox}>
        <p>2022</p>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10L10.2929 12.2929C10.6834 12.6834 11.3166 12.6834 11.7071 12.2929L14 10M1 16L1 6C1 3.23858 3.23858 1 6 1L16 1C18.7614 1 21 3.23858 21 6V16C21 18.7614 18.7614 21 16 21H6C3.23858 21 1 18.7614 1 16Z" stroke="black" stroke-linecap="round" />
        </svg>
      </div>
      <div className={styles.footerBox}>
        <p>© Linger</p>
        <Divider type="vertical" className={styles.footerDivider}/>
        <p>免责声明</p>
      </div>
    </div>
  );
}

export default App;
