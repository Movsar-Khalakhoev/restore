import React from 'react'
import styles from './Spinner.module.sass'

const Spinner = () => {
  return (
    <div className={styles.loader_wrapper}>
      <div className={styles.loader} >
        <span/>
        <span/>
        <span>
          <span/>
        </span>
        <span>
          <span/>
        </span>
      </div>
    </div>
  )
}

export default Spinner