export default function Card(props) {
    
  return (
    <div className="container">
      <div className="card">
        <div className="card-img">
          <img src={`/assets/${props.item.image}`} alt="" className="card-img" />
        </div>
        <div className="card-details">
          <div className="location">
            <img
              src="/assets/location-icon.svg"
              alt=""
              className="location-icon"
            />
            <span className="location-name">{props.item.location}</span>
            <a href={props.item.googleMapsUrl} target="_blank">
              <span className="google-link">View on Google Maps</span>
            </a>
          </div>
          <h2 className="card-title">{props.item.title}</h2>
          <span className="dates">{props.item.startDate} - {props.item.endDate}</span>
          <p className="about-location">
            {props.item.description}
          </p>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}
