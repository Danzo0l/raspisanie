import React from "react";

import styles from './Timetable.module.scss';
import { Day } from '../Day';


interface TimetableProps {
  active: boolean;
}

export const Content: React.FC<TimetableProps> = props => {

  return (
    // className={TimetableActive ? styles.Timetable_active + ' ' + styles.Timetable : styles.Timetable}
    
    <main className={props.active ? styles.main : styles.main_active + ' ' + styles.main}>
      <div className={styles.weekSelector}>
        <button className={styles.selectDay}>Пн</button>
        <button className={styles.selectDay}>Вт</button>
        <button className={styles.selectDay}>Ср</button>
        <button className={styles.selectDay}>Чт</button>
        <button className={styles.selectDay}>Пт</button>
        <button className={styles.selectDay}>Сб</button>
      </div>
      <div className={styles.content}>
        <Day active={true}/>
        <Day active={true}/>
        <Day active={true}/>
        <Day active={true}/>
      </div>
      
    </main>
  )
}