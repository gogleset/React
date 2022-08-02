import React from 'react';
import styles from '../styles/footer.module.scss';
const footer = () => {
    return (
        <footer className={styles.container}>
            <span>Copyright &copy; gogleset</span>
            <span>활용 API</span>
            <span>기상청 단기예보, 중기예보, 레이더영상, 기상특보 조회서비스 </span>
            <span>한국천문연구원 출몰시각정보</span>
            <span>에어코리아 대기오염정보</span>
            <span>카카오 맵, 로컬 API</span>
        </footer>
    );
};

export default footer;