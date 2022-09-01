import { useState } from 'react';
import styles from './Tourism.module.css';
// import tourData from '../../Data';

const Tourism = ({id, image, title, price, description, removeTour}) => {
 
  const [readMore, setReadMore] = useState(false)



  return (
    <div className={styles.container} key={id}>
          <div className={styles.tourList} >
            <img src={image} alt={title} />
            <div className={styles.heading}>
              <h3 className={styles.title}>{title}</h3>
              <h2 className={styles.price}>{price}</h2>
            </div>
            <div className={styles.para}>
              <p>{readMore ? description : `${description.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button></p>
          { <button className={styles.remove} onClick={() => removeTour(id)}>
          not interested
        </button>}
            </div>
           
          </div>
    </div>
  )
}

export default Tourism;