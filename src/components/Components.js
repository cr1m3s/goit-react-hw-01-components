import PropTypes from 'prop-types';
import './Components.css';

export default function Components({ items }) {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(item => (
          <DrawList key={item.id} label={item.label} percentage={item.percentage} />
        ))}
      </ul>
    </section>
  );
}

function DrawList({ id, label, percentage }) {
  return (
    <li
      className="item"
      key={id}
      style={{
        backgroundColor: 'lightcyan',
      }}
    >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

DrawList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
