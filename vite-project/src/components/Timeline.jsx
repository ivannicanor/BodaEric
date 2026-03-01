import './Timeline.css'

const Timeline = ({ events = [] }) => {
  return (
     <section className="section section-alt">
        <div className="container">
          <h2 className="text-center elvish-section-title">Cronograma del Día</h2>
          <div className="divider elvish-divider"></div>
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content card">
            <div className="timeline-time">{event.time}</div>
            <h4 className="timeline-title">{event.title}</h4>
            <p>{event.description}</p>
            {event.location && (
              <div className="timeline-location elvish-location">
                {event.location}
              </div>
            )}
          </div>
          <div className="timeline-marker"></div>
        </div>
      ))}
    </div>
            </div>
      </section>
  )
}

export default Timeline