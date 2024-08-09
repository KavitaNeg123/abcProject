import styles from "./header.module.scss";

export default function Header() {
  return (
       <>
       <div className={styles.header}>
         <div className="container">
            <div className="row align-items-center justify-content-between">
               <div className="col-lg-2">
                  <div className={styles.logo}>
                    <img className={styles.companylogo} src="/assets/images/companylogo.png"  alt="logo"/>
                  </div>
               </div>
               <div className="col-lg-6">
                   <ul className="d-flex p-0 mb-0 justify-content-between list-unstyled">
                    <li><span>DESTINATIONS</span></li>
                    <li><span>FOOD</span></li>
                    <li><span>WELL BEING</span></li>
                    <li><span>SPORT</span></li>
                    <li><span>FAMILY</span></li>
                    <li><span>LIFESTYLE</span></li>
                   </ul>
               </div>
               <div className="col-lg-3 d-flex justify-content-end">
                <div className={styles.button_col}>
                <img className={styles.searchicon} src="/assets/images/search.png" alt="search"/>
                <button className={styles.buttonStyle}>
                        Get your 120$ christmas gift
                    </button>
                </div>
               </div>
            </div>
         </div>
         </div>
       </>
  );
}