import styles from './section.module.css'
function Section(){
    return(
        <>
       <div className={styles.section1}>
        <div className={styles.title}>
           what do you want 
        </div>
        <span className={styles.changeText}>
            <div className={styles.foodName}>bollywood</div>
            <div className={styles.foodName}>hollywood</div>
            <div className={styles.foodName}>web series</div>
            <div className={styles.foodName}>k-drama</div>
             <div className={styles.foodName}></div>other
        </span>


       </div>
        </>
    )

}
export default Section