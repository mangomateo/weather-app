const Card = () => {
  return (
    <div className="weather-card border-white">
      <h3>DAY</h3>
      <i class="fas fa-sun fa-4x"></i>
      <h4>SUNNY</h4>
      <p className="temperature">23&deg;</p>
      <div className="temps">
        <p className="hi-temp">High: xx</p>
        <p className="lo-temp">Low: xx</p>
      </div>
    </div>
  );
};

export default Card;