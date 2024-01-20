function Info({ field, value }) {
  return (
    <div className="info">
      <h3 className="info__field">{field}</h3>
      <span className="info__value">{value}</span>
    </div>
  );
}

export default Info;
