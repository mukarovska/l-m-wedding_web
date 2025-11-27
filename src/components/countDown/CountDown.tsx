import './CountDown.scss';

export const CountDown = () => {
  return (
    <div className="countDown section">
      <div className="countDown__wrap section__wrap">
        <div className="countDown__fragment">
          <p className="countDown__value countDown__value--num">245</p>
          <p className="countDown__value countDown__value--text">dny</p>
        </div>
        <div className="countDown__fragment">
          <p className="countDown__value countDown__value--num">15</p>
          <p className="countDown__value countDown__value--text">hod</p>
        </div>
        <div className="countDown__fragment">
          <p className="countDown__value countDown__value--num">35</p>
          <p className="countDown__value countDown__value--text">min</p>
        </div>
        <div className="countDown__fragment">
          <p className="countDown__value countDown__value--num">10</p>
          <p className="countDown__value countDown__value--text">sec</p>
        </div>
      </div>
    </div>
  );
};
