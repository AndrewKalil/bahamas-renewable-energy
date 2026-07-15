import { useCallback, useState } from "react";
import cn from "classnames";

import { FAQ_ITEMS, SectionId } from "../HomePage.constants";
import styles from "./FaqSection.module.scss";

export const FaqSection = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id ?? "");

  const onToggleHandler = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;
    if (id) setOpenId((prev) => (prev === id ? "" : id));
  }, []);

  return (
    <section id={SectionId.Faq} className={styles.root}>
      <div className={styles.wrap}>
        <div className={styles.kicker}>Common Questions</div>
        <div className={styles.sectionHead}>
          <h2>Answered before you ask</h2>
        </div>
        <div className={styles.list}>
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  data-id={item.id}
                  onClick={onToggleHandler}
                >
                  {item.question}
                  <span className={cn(styles.plusIcon, isOpen && styles.open)} aria-hidden="true">
                    +
                  </span>
                </button>
                {isOpen && <div className={styles.answer}>{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
