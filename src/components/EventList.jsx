import { motion } from "framer-motion";

const EventList = ({ events, eventImages }) => {
  return (
    <div className="row">
      {events.length === 0 ? (
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif"
            alt="No Events GIF"
            className="mb-3"
            style={{ width: "200px" }}
          />
          <p className="text-muted">No events found! Try a different category.</p>
        </motion.div>
      ) : (
        events.map((event, index) => (
          <motion.div 
            key={index} 
            className="col-md-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="card mb-4 shadow-lg border-0 rounded-4 event-card">
              <img
                src={eventImages[event.category] || "https://source.unsplash.com/300x200/?event"}
                className="card-img-top rounded-top-4"
                alt="Event"
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{event.title}</h5>
                <p className="card-text text-muted"><b>Date:</b> {event.date}</p>
                <p className="card-text"><b>Category:</b> <span className="badge bg-info text-dark">{event.category}</span></p>
                <p className="card-text"><b>Location:</b> {event.location}</p>
                <p className="card-text"><b>Description:</b> {event.description}</p>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default EventList;
