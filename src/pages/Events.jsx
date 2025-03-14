// import { useState } from "react";
// import "/Events.css";

// const eventImages = {
//   Religious: "",
//   Social: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61AS7kUa1bYNRSGSdnLI0vYyPYQsHT2hTUg&s",
//   Charity: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR586JEbs7ew2fY_nHo_0JbSxwMQkORSqGIA&s",
// };

// const Events = () => {
//   const [events, setEvents] = useState([
//     { title: "Charity Drive", date: "2025-03-20", category: "Charity", location: "New York" },
//     { title: "Interfaith Dialogue", date: "2025-04-05", category: "Religious", location: "Los Angeles" },
//     { title: "Community Meetup", date: "2025-04-10", category: "Social", location: "San Francisco" },
//   ]);

//   const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "" });
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleChange = (e) => setNewEvent({ ...newEvent, [e.target.name]: e.target.value });

//   const addEvent = () => {
//     if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location) return;
//     setEvents([...events, newEvent]);
//     setNewEvent({ title: "", date: "", category: "", location: "" });
//     document.getElementById("closeModal").click();
//   };

//   const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);

//   return (
//     <div className="container mt-4">
//       {/* Header with GIF */}
//       <div className="text-center p-4 mb-4 rounded shadow header-bg">
//         <h2 className="fw-bold text-white">🎉 Discover Meaningful Events</h2>
//         <p className="mb-0 text-white">Join hands with your community and make an impact.</p>
//       </div>

//       {/* Responsive Header & Filter */}
//       <div className="row align-items-center mb-3">
//         <div className="col-md-6 col-12">
//           <h3 className="fw-bold text-primary">📅 Upcoming Events</h3>
//         </div>
//         <div className="col-md-6 col-12 text-md-end text-start mt-2 mt-md-0">
//           <div className="dropdown">
//             <button className="btn btn-outline-primary dropdown-toggle fw-bold w-100 w-md-auto" type="button" data-bs-toggle="dropdown">
//               Filter: {selectedCategory}
//             </button>
//             <ul className="dropdown-menu">
//               {["All", "Religious", "Social", "Charity"].map((category) => (
//                 <li key={category}>
//                   <button className="dropdown-item" onClick={() => setSelectedCategory(category)}>
//                     {category}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Add Event Button */}
//         <div className="col-12 d-md-none mt-3">
//           <button className="btn btn-success w-100 fw-bold shadow-sm btn-demo" data-bs-toggle="modal" data-bs-target="#addEventModal">
//             ➕ Add Event
//           </button>
//         </div>
//       </div>

//       {/* Desktop Add Event Button */}
//       <div className="text-end d-none d-md-block pb-3">
//         <button className="btn btn-success px-4 py-2 fw-bold shadow-sm add-event-btn" data-bs-toggle="modal" data-bs-target="#addEventModal">
//           ➕ Add Event
//         </button>
//       </div>

//       {/* Event List */}
//       {filteredEvents.length === 0 ? (
//         <div className="text-center">
//           <img src="https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif" alt="No Events GIF" className="mb-3" style={{ width: "200px" }} />
//           <p className="text-muted">No events found! Try a different category.</p>
//         </div>
//       ) : (
//         <div className="row">
//           {filteredEvents.map((event, index) => (
//             <div key={index} className="col-md-4">
//               <div className="card mb-4 shadow-lg border-0 rounded-4 event-card">
//                 <img src={eventImages[event.category] || "https://source.unsplash.com/300x200/?event"} className="card-img-top rounded-top-4" alt="Event" />
//                 <div className="card-body">
//                   <h5 className="card-title fw-bold">{event.title}</h5>
//                   <p className="card-text text-muted"><b>Date:</b> {event.date}</p>
//                   <p className="card-text"><b>Category:</b> <span className="badge bg-info text-dark">{event.category}</span></p>
//                   <p className="card-text"><b>Location:</b> {event.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Add Event Modal */}
//       <div className="modal fade" id="addEventModal" tabIndex="-1" aria-labelledby="addEventModalLabel" aria-hidden="true">
//         <div className="modal-dialog">
//           <div className="modal-content border-0 rounded-4 modal-glass">
//             <div className="modal-header">
//               <h5 className="modal-title fw-bold text-dark">➕ Add New Event</h5>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">
//               <input type="text" name="title" className="form-control mb-2" placeholder="Event Title" value={newEvent.title} onChange={handleChange} />
//               <input type="date" name="date" className="form-control mb-2" value={newEvent.date} onChange={handleChange} />
//               <select name="category" className="form-select mb-2" value={newEvent.category} onChange={handleChange}>
//                 <option value="">Select Category</option>
//                 <option value="Religious">Religious</option>
//                 <option value="Social">Social</option>
//                 <option value="Charity">Charity</option>
//               </select>
//               <input type="text" name="location" className="form-control mb-2" placeholder="Location" value={newEvent.location} onChange={handleChange} />
//             </div>
//             <div className="modal-footer">
//               <button type="button" id="closeModal" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" className="btn btn-primary fw-bold" onClick={addEvent}>Add Event</button>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Events;




import { useState } from "react";
import "/Events.css";
import { motion } from "framer-motion";
import EventList from "../components/EventList";
import EventFilter from "../components/EventFilter";
import AddEventButton from "../components/AddEventButton";
import AddEventModal from "../components/AddEventModal";

const eventImages = {
    Religious: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDQ0NDxAPDw8NDQ8ODQ0OEBANDg4PFREWFhURFRUYHSggGBoxGxYVIjIhJSkrLi4uFx8zODMsOCgtLisBCgoKDg0OGRAQGislHx8wLi0tLSstLS0tKysvLS0vLS0tLS0tLS0tLTErLS0wKy0tLS0tLS0vLS0tLS0rLS0tK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA6EAABAwMBBgQFAwEHBQAAAAABAAIDBBESBQYTITFBURQiYXEHMkKBkSNSsaEzQ2KCo8HRFXOSwvD/xAAZAQACAwEAAAAAAAAAAAAAAAAAAQIDBAX/xAApEQACAgICAgEDAwUAAAAAAAAAAQIRAxIEIRMxQRRR8CJhcQUygbHB/9oADAMBAAIRAxEAPwD1IJ1kAJbLnWdEEIQmIE4JEqABCVCYAhCEAKhF0qYgQhCYhUJEIAVCEIAEiEIAEIQkAIQlQAhTUpSJDBCEIGCEiEgFSXSEpLpWFClIUXSFKx0CEl0JWSFBS3SAIKdiHISApUCAJUl0J2AqVIhOxCoRdCLAEIQiwFBVHX6t0FFWVDLZw000rL8Rk2MkX+4TdefUtpJ3UTWPqgz9BslsC64vzIF7Xtc87LyrVq3aY01QKiEinMEgqDhRi0WJzPB1+V+SshGyuUqOy+FOuVFZQSvqpN7JFVPiEha1rnNwY4XxAHNx6dl2i8C2KqdaZTyjSoy+AzkyENp3WlwbcfqEH5cV6rsJPqr4pjqrGMcHt3FhGJC2xyyEZLbcrdealkjXZGEr6OoSphcua2lp3NmZPvalsUmEUjYJpm7t4JxLGNda7r48rlzYwPmJVce3ROTpWW9p9WfA1kcN98/z8GbwtjbcklvW+LuHPFshHFoB1NPq2zQsmbyeOVwSxwNnMJHC4II+y5rSNn3TRtnlmqI5Dlg9k0plLCR8z8rkcABY4+XIfMVR1TTzSPLN5Ush3BMTqeSZpc5oa0Zta6x5Y3ABP6Q4lys1T6T7K9mu2d2hZugUjoacCV0jpJHGWQSSyT7ou/umueSbNFh6kE9Vo3VTastQt0iEhKVjBIhCVjFSISJWAEpuSCmKLZJIekQEtwixipCE0vCaZErCmPshNyQjYKI/EBHiAsLfnuk3x7qryGv6dG94gJRUBc+Znd0CZ3dHlD6dHRCYJwlC59tS5TNqyn5SL4zNreBNNQO6xnVZUMtQ4g24GxsT0KPLboPpurZvxOlkvuWB1jYve7dxg9RlYkn2B9bLL2g1qTTxHLWQgU0kjYjVU73Tthe75d6wtaWtPK4y49l1E00FJTl0r2QwQsAdJI4Ma0crlx63/qV45tvtJpcOjO0fTZn1W/mbI57nSTNibvRK4mR/M3bYAXte59eksEa7OU80r6PS4Kxr2texzXMeA5rmkOa5pFwQRzCnEgXl3wp1N5opYXEkU85bH6Mc0Ox/OX5XbmsK5+SWknF/B0ceHeKkvk2TOAsbaypB03UB3oqgf6TlGaglUdda6SirI2AufJSzMa0c3OMZAAUFm/UicuNUWYfwZnx0+pHetcf9GNd94tec/C2B8dBLvGPZnUuc0PBaS3dsF7HjzB/C6/eqWfI1kdC4+BPGmzaZLdYG0VdeVkGMxji3cspiDQ57yTuwxziAcccjxuHGI8eIVltSVJ4sqMM6i7Hk4rkqRn6RtIYYWxTRSvc0uDAw04eGAm2TTILXHmFrgA4/Txz9a1g1MgIZPuWQ3ayJ9OX7x2Lmted5ZptZ3C9v0iLEEK1rcEkmE0IBmZ5LF5jD2O4cXDla5PfEvAsXXGrpMIghZE05Y3LnkAOkeTd7zbhcuJP3V/1MEtl7Mz4009X6RY0WudNCHO/tGOdHKcS1rnt4ZtH7TwcPe3RajSqXiQFBLXLO8yu0WrDJ9HNfEHa6WCam0uiIbV1bo2vnsH+HZI/BpAPAuPE+gHqF2EFmMZGC5wY0Nye4ve6w5uJ4k+q8K1quttG6eQ8I66C5PJrGhjQfa3FewueXMezJ7cmkZsOL2+rT0KvzPWMf3K8ONycn9jWjqGkvDXAlhxeAQS1xaHWPY2IPsQlNQvNNh9E1CCsknq5ZhHOwzFu+bJvZbhoE4H1Y9uHC1+Fl2s0vHmqcs9HSdluLG5+1RqOqgo/FhZDpCmhyh5WaFxkbJq001YWZdRuuovKxrBE1vFhMfV8FlhKXI8jJLBEtms4qWGovzWUSnCQhGzJPEja8QELG3pQnuyH06G2S4qYRJ24Kq2LtkQYoxU+4KeKdLYW6K2KUMVjcKaOBGxF5EinimvjuCO4IP3Wl4ZBpkWyPlRx/xflmq9Lpd2HOfTVGdVE0Ekjdua2cNHzNBPHnjlx7ry3VBBUVQGm0s8cTmsYync51TKZfqdlc8CfXpfhyH0D4YHgQCOxF1NS0EbOLGMZfmWNa0n8BdCP9QetOPZy58WKfT6OQ2M2bdR0bY3230jjLNY3DXEABoPWwAHvdbL4yF0QpwoZaQFYZuUpOT+TZizqCUfhGDZLZapoE5lAq7Zf9REyLIxW2dNUUmnkJWxLkwZkYosr5pCk8IUtizyxKQKXMq0+nUDo7I2GppkZce6E/FOxTslaPKfibo7mVIrA0mKoa1sh5hsrRjY9gWgW9itzY/biJ0LIKuQRTRtDRM/yxytHAEu5NdbnddnVUzJWOikY18bxZ7HgOa4eoXEah8NIXOLqed8IJ/s3t3zR6A3B/N1vhnx5Mahk6r0zBPDkhkc8fd+0dZNtBSNbk6qpgP+9Gb+wB4qDSNYbVukfC1xp4/IJ3At30nXAH6R1J6n0K5vT/AIbQMcHTzPmsb4MaIWH3NyfwQu0p4GxsbHG1rGMAaxjQGtaByAAVOTxR6g7NGN5ZO5JIehLZLiqNjQJklukxRilsgAphKdijdp7IdoYUik3aME9gtDLIT8EI2Do0gxPDUt0XUTFbAMCeGpoKXJMiLilaE3JY20mvOpmxRwRGpq6lxbTUzTjlj80jj9LBcXPqFKKcnSIydK2bMdSwyPhv+oxrXlnXBxIDh6Xa4e4VSm16kkikmZUQmKKUwySF4axkgt5STbuFxkGoVNTXR0VdH4CvZE+ehrKR7XgsPzxuaS4PacTdpPHDoQCm7QPfQUj46uppWU1U6QSw6fQ7iprMh+oLmQtZccC+3Xney0LCrSb7ZQ5v38Ho1k9hWDsxtJT18G9p8hgQySJ4AfGbXF7Egi3IgkfhbIes07i6fssX6lZbujJVhIntkS8hDQnBUjAoGuClEgSjkV9lckWAEu7uoGzDupWzha4ZMb9lbix3hgopKYKbfBMfMFKawUJOZUkpQqslEFeknVd8652TS/0s0wlMpOpAo3U6tvnUTplXZpjKZW8Ol3AUm8SGRSsnciJ8YALibAAkk8gBzKps1KmNOKsTxeHIuJy8NjPG3M9bgiyv7xeSM0w1U9VqUNNHNSQVz2t03IxsnDWgPlYL45cnWtxuR0sdODEsl7Oq/KK8mWUao6rRdraaStr45KyLc7yAUWYbE0tMfnxefm8/f7c+HSvrYWzx0xe3fSxulji4lzo283egXAVFC21W8aaJWao+n/6S2Wn8NG1gphm/Ow3QHmNuBNiRcElWtiKfwFfU6fK5kr5KaKohqhwc6NoxMfEmwBvYehPtozceNN9ppev8fllOPNJtL9/Z3+CMAmCW4uLEHkRxCTeLBRtpkmCMVEZEhegerJcU0tUe8SF6BpMkxQo80JjplrNJmq+8SGROyOhZzS5qpvUb1Kw8ZbzVWd1jM+JjHVIhs3LyZfMWMc+xIblf+qN4sXVK2WmqfEiGWogkhZFK2AB8sT2Oe5rgz6mkPINuWIU4Jt0QnGlZyr6+rotUbXanTuqJJoHQ0vgiHtiAN3Maw8zYnmb8XHj06LRaOSsqv+p10QjxZu9Oo5OLoI73dM8H6ybewAUdPNNW1lNUOglpqaiMkkfiAGTzzuYWDyfS0AnnzJCpza9NRVlc2Wkqag1EzZKSWFubXRiNrRET9IBB4epNup2Sk5KopbV8f6X/AEyqCj271svaRE2LaDUGRANZLRQTStbwaJc7Xt04XP3K6/eLk9k6CZhqa2rAbVVz2vewG4hiaLMj/H+3ZdBvFkzu5V9kkaMWJ62/ku71LvlQMiN4szLfEaIqEeIWdvEbxRYvCjSE6lbOspsimjkVUp0QlhRrNnQ6VRUjb26krQNC63IKWGGbPFuCtIxzcYumZkkqrPmUta3EkHhbos6SRUwyNtp/BrxQUlZYdKozIqzpEwyLQrZoWMtbxJvFV3iTNTSJ+Mr6votLVujdURmQxNkazzyMsHgBw8pF+QXm8Wn08MlTQS0Qqa7xJFDvHPbHJE9vBzyCBYNF/W9ui9QzXNv2Rp5GP8Q6Sad8hkNWXYTg/SBbgABYWtbgt3GzaJqTdfn4zNn4zk04rsrarXV1VBLQztp6uPRnUpfC6Mw+MBpjk4vytk3I2sAORPS2Xs5pFFW1000VM1tBDTsjbE8ECSod5i8i97gXH4Kfp2ybJKuuilmrHxRPg+ZxYKkGO/ndbz25cLWXT0WhQwTtmp8oW7sxyQRm0Uv7XuHVw48ea1ZuR01s7r8/Pgow8Vtp69WbFHAyGJkMTQyONoaxg5Nb2Uuar5pC9c12zpLHXRYzSZqvmkzRRLQs5pM1XySZI1HoWM0KvkhOg0J94jeKDJGaeo9CfeI3igyRklqGhPmjNQZIyRqGhPmjeKDJGSNQ1Js0ZqHJGSNQ1Jc1j7W1s8NDNNTW3keLiSMsWX8xA72Wlkh4DgWniHAgjuCiMakm0KULTSPK9L24q2TCSWUysuN7E4NsW9Syw4Fb2o7fSw1skRhY6BjhjYuEjmEAh4N7cQbgW6rhNb080lZLTnkx14z+6M8Wn8fwrmqkS0lJUD5oR4SY9wLuid/45N/yrqz4+KTTrpnJhlyR2jfaPaKSrbJGyVhuyRoe0+hF1YbKuI+HWpiSk8OT56cmw67txuD+bj8K1X7Wsgqn074n2YQDICONwDcN7ce642Tiy2cUvR0ouMoKX3PTdmpA5z78w24/K6JecabqRYWTROBBAIP0uaVvv2uDWEmOxAuSXWaPVa/6dy8XHxPHPqm369nL5fCyyybQVpj9q3hrmG4F2ku9gea8s2r2vLAxtG9hJLt5JjkW2tYAOFu/HjyXSV2ssrTKzegvkY5oHFtgRbyg9F4/Xkhz2u4EEtcOxBsQqsOKOXPLK17d0bY43gwqL9nomx+0/iw6GUgVEYvw8okZ+4DuOv2VH4oMkNJE9pO7ZNaZoPA5Dyk9xcW/zLgNPrn088U7PmieHW5ZDq0+hFx916zU7vUKB4YbsqYTgerXdL+ocP6LVLCsWSM0ughPzY5Q+TkvhvtCQ/wEriWuu6mJ44uAuY/a3Eex7r0TJeC0lU+nmZKzyywvuAejgeIP9Qva9M1FlRBFUM+WVgdbq08i0+oNx9lLl4FtsvkODl2i4P2i+XKOWoaxpc9zWNHNznBrR9ym5rzD4i6wZKrwovu6a1x0dKRcn7AgflU4ePvKjRyMyww2PUmShwDmkOaRcOBuCO4KdkuT2Brmv06Jg+aFz43j1yLgfw4Lot4iWLWTRLHljOKl9yyXpuaqmRJvEvGS8iLZemmRVTIml6l4xeVFzepu9VPeJN4n4yLzF3eoVHeIUvGLzF/eI3iqZIzS8YeUt71IZVVzSZI0Dylzeo3qqZIzRoHlLe8RvFVzRmloPylreo3iq5pckaB5C1vEbxVskuaWhLyHE/FGguIKxo+U7mT2PFpP3uPuuLpqsiKWH6ZcD7Oa64P4yH3Xr2r0Tammlp3cBI0gG18XdHfleQ6vpM1HLu5Rz4se3iyQdwf9luwNOOr+DlcyDjPdemaGz+qmjqWzDzAAtewH5mHmP4P2W5tRqsFY2KohJbKzySRuFnFh4gjvY3/K4fJPjlIPNTnhTe3yV4+Q4x0+D07YbWg5vhHnzNu6Ik828y3+T+V1k0Ye1zHcWuBBHovFqHUHRyMlYcXscHNPS69U0TXI6mNrg5okt+pHfiD3HcLn5+PTtI6fF5CmtX7OH1qKWjqcbuFjnDKOGTb8D79CFlaxViaV0wGJks6Ro+USW8xb6E8fuV6lrOnx1ULoZBz4sePmjf0c0/8A115NqdFJTTOhlFi0+V1vK9vRzfRacFP+Sjl7R/hlKQ8V1nw+1zcyupZH2im4x5GwZN2v0v8AyB3XKFt+SaGd1plBSVMwQyvHNSRr7Y6cYK+cW8kzjPGe4ebkfZ2Q/C3vhxquO8o3H5iZYfe3nb/B+xXI1tdLNjvZHyYNxbmS7Edgo6d7mObI0lpYQ5rhzBCbx7Q1ZGObTLvE9qlmDQXOIaBzLjYD7ryjawRurZpIpGyNlIfk03ANgCP6KHV9emqCN47gOTRwb727rJL0sODTslyeX5Vql0d18N5QPFMvxO6db0GQJ/qF2pevNNgGPNY57fkZC4SHp5iMR+Rf7L0QuVOeP6zTxZvxJExeml6hzSF6qUS9zJc0heoS9GaepFyJckmSiySZJ0RcibJChzQnQti3dGShzSZqOpLYnyRkoM0ZooexYzSZqDJLklqGxPklyVfJGSNR7FjJGSgzRkjUe5PmgPUGSXJLUamTh6q6nQRVMRimaHNPEHk5p7tPQp+SXJFV6ByT6Z5jtJs0+jIe0mSBxsH28zD2d/ysEle0VETZGOjeA5jwQ5p5ELzjaXZZ9PeWHKSHmer4vfuPVa8WW+n7MGbDr3H0c+16sQ1RaQQSD3BsqV0ZK5xM6kdLQbT1MVrSEj9r/MP6rbqNapq+HcVH6Mg4xTDi1j+/t3C4DJPbJZQeJXZYs8kq9ovVlM+GR0Ugs5vbiHN6OaeoKjEg5LX01orYTTPdaeFpdSvPVvWJx7fwsGdjmPcx4LXtNnNPMFSX2K5L5Xos5t7KGWS/soc00uU0ipgSmkpUWUiJ6ps1p4p6WNg4veBJK7u8jl7AcPstTJZWgV4mponA+ZrQx46h4Fj/AMq/dYJJ32dWLWqokySFyZdNLkUNseXIyUZKTJFEbJLouo7oToVkl0Jl0ICyfJJkm3SXSodj8kt1Gluih2Pui6ZdF0qCyTJGSjukugdk2SMlFdF0UFkuSMlFdF0UOyXJGaiui6VDslyS5KK6LoodnM67shHKXS05EUh4ln924/8AquGrqOSF5jlaWOHfkR3B6hevXVDWdLjqoix4sR8jx8zCroZWumZsuFS7j7PKEoU+oUT4JXRSCzmnh2cOhHoq4WkxO10XtMqzDNFMP7t4cR3HUfi67/VNHgro2yjyvcwFkzedugcOoXmwXZ7EapwNK88rui9urVVkT/uRdhkv7X6ZzGraVLTPxkb5T8kg4sf7HofRUV61W0rJo3RSNDmuFiOo9R2K8w1WgdTzPhdxx4td+5p5FSxz2I5cWva9FO6LpEK0oNjZ/WXU0t+cbuEjfTv7r0aCobIxr2EOa4XBC8iBW9szrhgfu33MTzx/wH9wVWSF9ovw5den6PQboUbXggEG4IuCORCW6zmyx5KTJMJQgjY66UFMuhFBY66Ey6E6FZYDkt1CHJwKRKyS6CUxF0h2OulumIugLHEoBTEoKB2Pui6ZdF0qCx90Jl0AooLHpLpt0IoLH3SXTbpLoodjrpbpt0IoLKGt6XHUxFrgMwDu39Wn/heYSRlrnNIsWkgj1C9duvOtr6PdVTnW8svnHv1V+J/Bl5EerMa6npah0b2SNNnMcHD7KsE4FX0ZEz1XTa5s8LJW/UOI6td1CzNq9I8RDmwfqxAlndzerFzGzermCXFx/SkNnD9p/cvQA8EXHEHiCFmacJWbYyWSNM8hKQFdPtlo2D/FRjyPP6oH0vP1ex/lcwtMXasySjq6FSgpoSpkDqdl9dwIglPkJ8jj9B7ey7O68kBXXbMa5yglPpG89P8ACVTkh8o0YsvwzrLoukSqmjQKkJQSmEpgLdCZdCBWSgp4KEJDFyRdCEhhdF0IQAXSXSoQAXS3QhAwui6EIALpbpEIGKhIhIVghCExgsTa6g3tK5w+aHzg+nUIQnH2Qn3FnnSVCFsMA5pXZbI6sXDwzySWi8bvT9pQhQyLonjdSOkmja9rmOAc1wIc08iCvNdd00005j5td5oz1xJ5H1QhV4vZdmXVmehCFeZWKnschCAOs2f2g+WGa55Bj+ZHoV1N0IWfIqZpxSbQl00lCFEsGoQhMR//2Q==",
    Social: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS61AS7kUa1bYNRSGSdnLI0vYyPYQsHT2hTUg&s",
    Charity: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR586JEbs7ew2fY_nHo_0JbSxwMQkORSqGIA&s",
  };
  
  const Events = () => {
    const [events, setEvents] = useState([
      { title: "Charity Drive", date: "2025-03-20", category: "Charity", location: "New York", description: "A drive to support local charities." },
      { title: "Interfaith Dialogue", date: "2025-04-05", category: "Religious", location: "Los Angeles", description: "An event to promote understanding among different faiths." },
      { title: "Community Meetup", date: "2025-04-10", category: "Social", location: "San Francisco", description: "Meet and connect with people in your community." },
    ]);
  
    const [newEvent, setNewEvent] = useState({ title: "", date: "", category: "", location: "", description: "" });
    const [selectedCategory, setSelectedCategory] = useState("All");
  
    // Handle input change in the form
    const handleChange = (e) => {
      setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };
  
    // Add new event
    const addEvent = () => {
      if (!newEvent.title || !newEvent.date || !newEvent.category || !newEvent.location || !newEvent.description) {
        alert("Please fill in all fields before adding the event.");
        return;
      }
  
      setEvents([...events, newEvent]);
      setNewEvent({ title: "", date: "", category: "", location: "", description: "" });
  
      // Close the modal after adding event
      document.getElementById("closeModal").click();
    };
  
    const filteredEvents = selectedCategory === "All" ? events : events.filter(event => event.category === selectedCategory);
  
    return (
      <motion.div 
        className="container mt-4"
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="text-center p-4 mb-4 rounded shadow header-bg"
          initial={{ scale: 0.9 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <h2 className="fw-bold text-white">🎉 Discover Meaningful Events</h2>
          <p className="mb-0 text-white">Join hands with your community and make an impact.</p>
        </motion.div>
  
        <EventFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <AddEventButton />
        <EventList events={filteredEvents} eventImages={eventImages} />
        <AddEventModal newEvent={newEvent} handleChange={handleChange} addEvent={addEvent} />
      </motion.div>
    );
  };
  
  export default Events;