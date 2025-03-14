import { motion } from "framer-motion";

const AddEventModal = ({ newEvent, handleChange, addEvent }) => {
  return (
    <div className="modal fade" id="addEventModal" tabIndex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
      <motion.div 
        className="modal-dialog"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="modal-content border-0 rounded-4 modal-glass">
          <div className="modal-header">
            <h5 className="modal-title fw-bold text-dark">➕ Add New Event</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="closeModal"></button>
          </div>
          <div className="modal-body">
            <input type="text" name="title" className="form-control mb-2" placeholder="Event Title" value={newEvent.title} onChange={handleChange} />
            <input type="date" name="date" className="form-control mb-2" value={newEvent.date} onChange={handleChange} />
            <select name="category" className="form-select mb-2" value={newEvent.category} onChange={handleChange}>
              <option value="">Select Category</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
            </select>
            <input type="text" name="location" className="form-control mb-2" placeholder="Location" value={newEvent.location} onChange={handleChange} />
            <textarea name="description" className="form-control mb-2" placeholder="Event Description" value={newEvent.description} onChange={handleChange}></textarea>
          </div>
          <div className="modal-footer">
            <button type="button" id="closeModal" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary fw-bold" onClick={addEvent}>Add Event</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AddEventModal;
