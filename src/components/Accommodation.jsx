import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import $ from 'jquery';
import 'daterangepicker/daterangepicker.css';
import 'daterangepicker';


function Accommodation() {
    const [adultQuantity, setAdultQuantity] = useState(1);
    const [childrenQuantity, setChildrenQuantity] = useState(0);
    const [roomQuantity, setRoomQuantity] = useState(1);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleQuantityChange = (type, value) => {
        switch (type) {
            case 'adult':
                // Ensure the adult quantity is always at least 1
                if (adultQuantity === 1 && childrenQuantity === 0 && value === -1) {
                    return; // Stop further decrease
                }
                setAdultQuantity(prev => Math.max(1, prev + value));
    
                // Adjust the price based on the button clicked
                const basePriceAdult = selectedRoom ? parseFloat(selectedRoom.price.replace('$', '')) : 0;
                const totalPriceAdult = basePriceAdult + (value === 1 ? 10 : -10);
                setSelectedRoom(selectedRoom ? { ...selectedRoom, price: `$${totalPriceAdult.toFixed(2)}` } : null);
                break;
            case 'children':
                // Ensure the adult quantity is always at least 1
                if (adultQuantity === 1 && childrenQuantity === 0 && value === -1) {
                    return; // Stop further decrease
                }
                setChildrenQuantity(prev => Math.max(0, prev + value));
    
                // Adjust the price based on the button clicked for children
                const basePriceChildren = selectedRoom ? parseFloat(selectedRoom.price.replace('$', '')) : 0;
                const totalPriceChildren = basePriceChildren + (value === 1 ? 5 : -5);
                setSelectedRoom(selectedRoom ? { ...selectedRoom, price: `$${totalPriceChildren.toFixed(2)}` } : null);
                break;
                case 'room':
                    // Ensure the room quantity is always at least 1
                    if (roomQuantity === 1 && value === -1) {
                        return; // Stop further decrease
                    }
                    setRoomQuantity(prev => Math.max(1, prev + value));
        
                    // Adjust the price based on the button clicked
                    const roomBasePrice = selectedRoom ? parseFloat(selectedRoom.price.replace('$', '')) : 0;
                    const roomTotalPrice = roomBasePrice + (value === 1 ? 100 : -100);
                    setSelectedRoom(selectedRoom ? { ...selectedRoom, price: `$${roomTotalPrice.toFixed(2)}` } : null);
                    break;
        
            default:
                break;
        }
    };

    const handleCheckAvailability = (roomTitle, roomPrice) => {
        // Calculate the total price, adjusting for the adult quantity
        const totalPrice = parseFloat(roomPrice.replace('$', '')) + (adultQuantity - 1) * 10;
        setSelectedRoom({ title: roomTitle, price: `$${totalPrice.toFixed(2)}` });
    };

    $(document).ready(function() {
        $('#dateRangePicker').daterangepicker({
          opens: 'left', // Adjust the calendar position
          locale: {
            format: 'YYYY-MM-DD', // Set your desired date format
          },
        });
      });

    return(
       <div className="container-room">
        <div className="row">
        <div className="col-md-4" id="leftside" style={{ position: "sticky", top: 0 }}>
    <h5>Summary</h5>
    <label>Your Room:</label>
    <br></br>
    <div style={{ display: 'flex', alignItems: 'center' }}>
  <input
    type="text"
    placeholder="Room Name"
    value={selectedRoom ? selectedRoom.title : ""}
    readOnly
    style={{ marginRight: '5px' }}
  />
  {selectedRoom && (
    <span style={{ color: 'green', fontSize: '20px' }}>✔️</span>
  )}
</div>
    <label>Check-in Date:</label>
    <br></br>
    <input type="text" id="dateRangePicker" name="dateRange" />
    <br></br>
    <br></br>
    <label>Adult:</label>
    <div className="quantity">
        <button className="clicker me-2" onClick={() => handleQuantityChange('adult', -1)}>-</button>
        <input className="numberCount me-2" type="number" placeholder="o" value={adultQuantity} readOnly />
        <button className="clicker" onClick={() => handleQuantityChange('adult', 1)}>+</button>
    </div>
    <label>Children:</label>
    <div className="quantity">
        <button className="clicker me-2 " onClick={() => handleQuantityChange('children', -1)}>-</button>
        <input className="numberCount me-2" type="number" placeholder="0" value={childrenQuantity} readOnly />
        <button className="clicker" onClick={() => handleQuantityChange('children', 1)}>+</button>
    </div>
    <label>Room:</label>
    <div className="quantity">
        <button className="clicker me-2" onClick={() => handleQuantityChange('room', -1)}>-</button>
        <input className="numberCount me-2" type="number" placeholder="1" value={roomQuantity} readOnly />
        <button className="clicker" onClick={() => handleQuantityChange('room', 1)}>+</button>
    </div>
    <hr />
    <h5 className="Price">Total: {selectedRoom ? selectedRoom.price : "00.00"}</h5>
    <NavLink className="readmore" to="/checkout">
    <button type="button" class="btn btn-primary mb-2">Book Now!</button>
    </NavLink>
    
</div>
            <div className="col-md-8" >
                

                <div className="row" id="rightside">
                    <div className="col-md-6">
                        <img className="room-img" src={require('./Deluxe.jpg')} />
                            <div className="row">
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h3 className="tittle">Deluxe Room</h3>
                        <p>Awake to stunning sunrise views, amid decor that blends regional textiles with modern design and local craftsmanship. Your 32-sq.</p>
                        <p><span class="material-symbols-outlined">desktop_windows</span> Tv</p>
                        <p><span class="material-symbols-outlined">wash</span> Clean Washroom</p>
                        <p><span class="material-symbols-outlined">wifi</span> Free Wifi</p>
                    </div>
                    <div className="col-md-2">
                    <a className="excellent">Excellent</a>
                        <a className="rate">9.5</a>
                        <br></br>
                        <hr></hr>
                        <label>Price:</label>
                        <h3>$120.00</h3>
                        <p className="taxes">Includes taxes and fees</p>
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckAvailability("Deluxe Room", "$120.00")}>Check Availability</button>
                    </div>
                </div>
               

                <div className="row" id="rightside">
                    <div className="col-md-6">
                        <img className="room-img" src={require('./Governor.jpg')} />
                            <div className="row">
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h3 className="tittle">Governor Suite</h3>
                        <p>Relax and enjoy the space to stretch out in your 96-sq. m suite. Awake in an elegant bedroom featuring a king-size bed. Enjoy stunning views over the Magellan Sea from your private balcony.</p>
                        <p><span class="material-symbols-outlined">desktop_windows</span> Tv</p>
                        <p><span class="material-symbols-outlined">wash</span> Clean Washroom</p>
                        <p><span class="material-symbols-outlined">wifi</span> Free Wifi</p>
                    </div>
                    <div className="col-md-2">
                    <a className="excellent">Excellent</a>
                        <a className="rate">9.3</a>
                        <br></br>
                        <hr></hr>
                        <label>Price:</label>
                        <h3>$115.00</h3>
                        <p className="taxes">Includes taxes and fees</p>
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckAvailability("Governor Suite", "$115.00")}>Check Availability</button>
                    </div>
                </div>

                <div className="row" id="rightside">
                    <div className="col-md-6">
                        <img className="room-img" src={require('./Executive.jpg')} />
                            <div className="row">
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h3 className="tittle">Executive Suite</h3>
                        <p>Treat yourself and your loved ones to the comforts of a 127-sq. m two-bedroom haven. Take in breathtaking views of Magellan Bay from your private balcony and enjoy the added space to relax with separate living.</p>
                        <p><span class="material-symbols-outlined">desktop_windows</span> Tv</p>
                        <p><span class="material-symbols-outlined">wash</span> Clean Washroom</p>
                        <p><span class="material-symbols-outlined">wifi</span> Free Wifi</p>
                    </div>
                    <div className="col-md-2">
                    <a className="excellent">Excellent</a>
                        <a className="rate">9.1</a>
                        <br></br>
                        <hr></hr>
                        <label>Price:</label>
                        <h3>$125.00</h3>
                        <p className="taxes">Includes taxes and fees</p>
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckAvailability("Executive Suite", "$125.00")}>Check Availability</button>

                    </div>
                </div>


                <div className="row" id="rightside">
                    <div className="col-md-6">
                        <img className="room-img" src={require('./Admiral.jpg')} />
                            <div className="row">
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h3 className="tittle">Admiral Suite</h3>
                        <p>Escape to a palatial 160-sq. m three-bedroom suite, elegantly appointed with all-modern amenities for family or friends.</p>
                        <p><span class="material-symbols-outlined">desktop_windows</span> Tv</p>
                        <p><span class="material-symbols-outlined">wash</span> Clean Washroom</p>
                        <p><span class="material-symbols-outlined">wifi</span> Free Wifi</p>
                    </div>
                    <div className="col-md-2">
                    <a className="excellent">Excellent</a>
                        <a className="rate">8.8</a>
                        <br></br>
                        <hr></hr>
                        <label>Price:</label>
                        <h3>$150.00</h3>
                        <p className="taxes">Includes taxes and fees</p>
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckAvailability("Admiral Suite", "$150.00")}>Check Availability</button>

                    </div>
                </div>


                <div className="row" id="rightside">
                    <div className="col-md-6">
                        <img className="room-img" src={require('./Captain.jpg')} />
                            <div className="row">
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                            <div className="col-md-4">
                            <img className="room-img1" src={require('./room1.jpg')} />
                            </div>
                    </div>
                </div>
                    <div className="col-md-4">
                        <h3 className="tittle">Captain Suite</h3>
                        <p>Luxuriate in the finest amenities and a grand sense of space in your 125-sq. m two-bedroom suite, with views over Magellan Bay. Enjoy the grandeur of separate living and dining areas and a fully appointed kitchenette.</p>
                        <p><span class="material-symbols-outlined">desktop_windows</span> Tv</p>
                        <p><span class="material-symbols-outlined">wash</span> Clean Washroom</p>
                        <p><span class="material-symbols-outlined">wifi</span> Free Wifi</p>
                    </div>
                    <div className="col-md-2">
                        <a className="excellent">Excellent</a>
                        <a className="rate">8.3</a>
                        <br></br>
                        <hr></hr>
                        <label>Price:</label>
                        <h3>$130.00</h3>
                        <p className="taxes">Includes taxes and fees</p>
                        <button type="button" className="btn btn-primary mb-2" onClick={() => handleCheckAvailability("Captain Suite", "$130.00")}>Check Availability</button>

                    </div>
                </div>
            </div>
        </div>
       </div>

    );
}

export default Accommodation;