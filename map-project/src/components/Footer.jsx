import React from 'react';
import styles from '../styles/footer.module.scss';
const footer = () => {
    return (
        <footer className={styles.container}>
            <span>Copyright &copy; gogleset</span>
            <span style={{ margin: "5px 0px", fontSize: "14px" }}>활용 API</span>
            <span className={styles.api_names}>기상청 단기예보, 중기예보, 레이더영상, 기상특보 조회서비스 </span>
            <span className={styles.api_names}>한국천문연구원 출몰시각정보</span>
            <span className={styles.api_names}>에어코리아 대기오염정보</span>
            <span className={styles.api_names}>카카오 맵, 로컬, 검색 API</span>
        </footer>
    );
};

export default footer;