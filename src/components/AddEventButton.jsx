const AddEventButton = () => {
    return (
      <div className="text-end pb-3">
        <button className="btn btn-success px-4 py-2 fw-bold shadow-sm add-event-btn" data-bs-toggle="modal" data-bs-target="#addEventModal">
          ➕ Add Event
        </button>
      </div>
    );
  };
  export default AddEventButton;