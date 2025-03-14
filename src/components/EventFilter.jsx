const EventFilter = ({ selectedCategory, setSelectedCategory }) => {
    return (
      <div className="row align-items-center mb-3">
        <div className="col-md-6 col-12">
          <h3 className="fw-bold text-primary">📅 Upcoming Events</h3>
        </div>
        <div className="col-md-6 col-12 text-md-end text-start mt-2 mt-md-0">
          <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle fw-bold w-100 w-md-auto" type="button" data-bs-toggle="dropdown">
              Filter: {selectedCategory}
            </button>
            <ul className="dropdown-menu">
              {["All", "Religious", "Social", "Charity"].map((category) => (
                <li key={category}>
                  <button className="dropdown-item" onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  export default EventFilter;