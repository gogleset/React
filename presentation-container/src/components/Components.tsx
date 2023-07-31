/**
 * @gogleset stateless presentation components
 */
import React from "react";
import { ContainerType } from "../container/Container";
import styles from "./style/components.module.css";

//container 에서 받은 props로 view만 관리한다.
const Components: React.FC<{ data?: ContainerType }> = ({ data }) => {

    // data가 없을 경우 no data리턴
  if (!data?.json) return <div>no data</div>;
  const { json } = data;
  return (
    <div className={styles.components}>
      <div>stateless presentation components</div>
      <span>{json?.completed}</span>
      <span>{json?.userId}</span>
      <span>{json?.title}</span>
      <span>{json?.id}</span>
    </div>
  );
};

export default Components;
