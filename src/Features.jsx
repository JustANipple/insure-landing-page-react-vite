import styles from "./Features.module.css"

const Features = () => {

    // eslint-disable-next-line react/prop-types
    function IconTitleText({ icon, title, text }) {
        return (
            <div className={styles.feature}>
                <img 
                    src={icon} 
                    alt=""
                    aria-hidden="true" 
                    className={styles.icon}
                />
                <p className={styles.subtitle}>{title}</p>
                <p className={styles.description}>{text}</p>
            </div>
        );
    }

    return (
        <section className={styles.features}>
            <h2 className={styles.title}>We're different</h2>
            <div className={styles.wrapper}>
                <IconTitleText 
                    icon={"images/icon-snappy-process.svg"}
                    title={"Snappy Process"}
                    text={
                        "Our application process can be completed in minutes. Don't get stuck filling in tedious forms."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-affordable-prices.svg"}
                    title={"Affordable Prices"}
                    text={
                        "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
                    }
                />
                <IconTitleText 
                    icon={"images/icon-people-first.svg"}
                    title={"People First"}
                    text={
                        "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
                    }
                />
            </div>
        </section>
    )
}

export default Features