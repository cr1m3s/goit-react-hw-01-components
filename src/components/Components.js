import PropTypes from 'prop-types';
import styles from './Components.module.css';

export default function Components({ items }) {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statlist}>
        {items.map(item => (
          <DrawList key={item.id} label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

function DrawList({ id, label, percentage }) {
  var color = getRandomHexColor();
  return (
    <li className={styles.item} key={id} style={{ backgroundColor: color }}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  );
}

DrawList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
