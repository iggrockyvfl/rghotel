import React from "react";
import { NavLink } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";


function Home(){


  const steps = [
    {
        id: 'Greet',
        message: 'Hello, Welcome to RG Hotel',
        trigger: 'Ask Name'
    },
    {
        id:'Ask Name',
        message: 'Please enter your full name',
        trigger: 'waiting'
    },
    {
        id: 'waiting',
        user: true,
        trigger: 'Name'
    },
    {
        id: 'Name',
        message: 'Hi {previousValue}, please select your problem. ',
        trigger: 'issues'
    },
    {
        id: 'issues',
        options: [
           {
            value: "Cancel Booking",
            label: "Cancel Booking",
            trigger: "Cancel Booking"
           },
           {
            value: "Nothing",
            label: "Nothing",
            trigger: "Nothing"
           } 
        ]
    },
    {
        id: 'Cancel Booking',
        message: 'Im Cancelling your booking now',
        trigger: 'cancel'
    },
    {
        id: 'Nothing',
        message: `Thank your then, Have a nice day! <3 `,
        end:true
    },
    {
        id: 'cancel',
        message: 'Your Booking Has been Canceled',
        end:true
    }
];
// document.querySelector("#chatbot-btn")
// .addEventListener("click",function(){
//   document.querySelector(".popup").classList.add("active");
// });
    return(
      
      <>
      <div class="popup">
      <Segment id="chatbot"><ChatBot steps={steps}/></Segment>
      </div>
      <button type="submit" value="Submit" id="chatbot-btn">RG Hotels</button>
      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={require('./1.jpg')} class="d-block w-100" alt="..." className="hero"/>
          <div class="carousel-caption d-none d-md-block text-start">
            <button type="button" class="btn btn-primary mb-2">Explore Now!</button>
            <p>A vibrant and inviting retreat blends Filipino warmth and Thai hospitality for a heavenly haven by the ocean at our hotel Mactan Cebu, Philippines resort.</p>
          </div>
        </div>
        <div class="carousel-item">
        <img src={require('./2.jpg')} class="d-block w-100" alt="..." className="hero"/>
        <div class="carousel-caption d-none d-md-block text-start">
            <button type="button" class="btn btn-primary mb-2">Explore Now!</button>
            <p>A vibrant and inviting retreat blends Filipino warmth and Thai hospitality for a heavenly haven by the ocean at our hotel Mactan Cebu, Philippines resort.</p>
          </div>
        </div>
        <div class="carousel-item">
        <img src={require('./3.jpg')} class="d-block w-100" alt="..." className="hero"/>
        <div class="carousel-caption d-none d-md-block text-start">
            <button type="button" class="btn btn-primary mb-2">Explore Now!</button>
            <p>A vibrant and inviting retreat blends Filipino warmth and Thai hospitality for a heavenly haven by the ocean at our hotel Mactan Cebu, Philippines resort.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
      <div className="container-fluid" id="introduction">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8"><hr></hr>
              <h1>R.G. Hotel & Resort</h1><br></br>
              <p>A vibrant and inviting retreat blends Filipino warmth and Thai hospitality for a heavenly haven by the ocean at our hotel Mactan Cebu, Philippines resort.</p>
              <br></br>
              <p>On northern tip of the Punta Engaño Peninsula, Dusit Thani Mactan Cebu is easily accessible from the Mactan-Cebu International Airport by land and sea transport. Surrounded by tropical islands, natural, cultural and historic treasures are all within reach.</p>
              <br></br>
              <p>Guests relax in stylish rooms and suites, with gracious service, innovative cuisine, luxurious amenities and stunning views all on hand.</p>
              <br></br>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
        

          <div className="container-fluid" id="introduction2">
          <div className="row">
          <h1 className="facilities">Accommodations</h1><hr></hr>
            <div className="col-md-4" id="home-room">
            <div className="scrollable-container">
              <img  id="room" src={require('./Deluxe.jpg')} alt="Deluxe" />
              <h1>Deluxe Room</h1>
              <p>Awake to stunning sunrise views, amid decor that blends regional textiles with modern design and local craftsmanship. Your 32-sq. m space features a choice of a king-size bed or two twins and a luxurious rain shower in the bathroom.Choose from a king-size or two twin beds.</p>
              <NavLink className="readmore" to="/gallery">
              Explore more
              </NavLink><br></br>
              
              <button id="chk-btn" type="button" class="btn btn-primary mb-2"><NavLink className="check text-white" to="/accommodation">Check Availability</NavLink></button>
            </div>
            </div>
            <div  className="col-md-4" id="home-room">
            <div className="scrollable-container">
            <img id="room" src={require('./Captain.jpg')} />
            <h1>Captain Suite</h1>
            <p>Luxuriate in the finest amenities and a grand sense of space in your 125-sq. m two-bedroom suite, with views over Magellan Bay. Enjoy the grandeur of separate living and dining areas and a fully appointed kitchenette. Elegant bedrooms are decorated with relaxation in mind. </p>
              <NavLink className="readmore" to="/gallery">
              Explore more
              </NavLink><br></br>
              <button id="chk-btn" type="button" class="btn btn-primary mb-2"><NavLink className="check text-white" to="/accommodation">Check Availability</NavLink></button>
              </div>
            </div>
            <div className="col-md-4" id="home-room">
            <div className="scrollable-container">
            <img id="room" src={require('./Governor.jpg')} />
            <h1>Governor Suite</h1>
            <p>Relax and enjoy the space to stretch out in your 96-sq. m suite. Awake in an elegant bedroom featuring a king-size bed. Enjoy stunning views over the Magellan Sea from your private balcony and entertain in the stylish living room. Unwind with a luxurious soak in the bathtub. </p>
              <NavLink className="readmore" to="/gallery">
              Explore more
              </NavLink><br></br>
              <button id="chk-btn" type="button" class="btn btn-primary mb-2"><NavLink className="check text-white" to="/accommodation">Check Availability</NavLink></button>
              </div>
            </div>
          </div>
          </div>

          <div className="container-fluid" id="introduction3">
          <div className="row">
          <h1 className="facilities">How to Get Here</h1><hr></hr>
            <div className="col-md-6">
            <p>Dusit Thani Mactan Cebu Resort</p>
            <p>Punta Engaño Road, Mactan Island, Lapu-Lapu City 6015, Cebu, Philippines</p>
            <p>dtmc@dusit.com</p>
            <p>+63 32 888 1388</p>
            </div>
            <div  className="col-md-6">
            <div class="rightcol" id="google-maps">
            <iframe className="map-container" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3872.000599053174!2d121.11191637077062!3d13.958569862562275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6d1a4e3d2c0f%3A0x9c20e8e31d524f80!2sMataas%20na%20Kahoy%20National%20High%20School!5e0!3m2!1sen!2sph!4v1700451283512!5m2!1sen!2sph"></iframe>                    
            </div>
            </div>
          </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Discover
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <h3>Location</h3>
        <p>Discover the fascinating culture and history of the area at the Lapu Lapu shrine, in honour of a past hero of Mactan.</p>
        <p>Take a tour with our local snorkelling experts and swim with the vibrant sea life that surrounds these beautiful islands.</p>
        <p>When in the guitar capital of the Philippines, a visit to the Alegre Guitar Factory is a must. Explore and learn how the locals carefully craft their stringed instruments.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Facilities and Services
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <p>Relax in five-star hotel luxury in Mactan, with the full-service amenities and gracious Thai hospitality for which Dusit is world-renowned. Relax by the beach or pool, unwind at the spa, let the kids loose in the Fun Zone and allow our dedicated team handle every request.</p>
        <h3>Recreational amenities:</h3>
        <li>100 m infinity swimming pool</li>
        <li>Boardwalk promenade</li>
        <li>Sandy beach</li>
        <li>DFiT Fitness Centre featuring TechnoGym equipment</li>
        <li>500 sq.m Fun Zone for kids</li>
        <li>Namm Spa</li>
        <h3>Facilities and services:</h3>
        <li>Wi-Fi</li>
        <li>24 hour in-room dining</li>
        <li>Gift shop</li>
        <li>Concierge service</li>
        <li>Event service centre</li>
        <li>Medical services</li>
        <li>Safety deposit boxes at Front Desk</li>
        <li>Car park</li>
        <li>Tour counter</li>
        <li>Limousine/transportation/car rental services</li>
        <li>Laundry and dry cleaning services</li>
        <li>Babysitting services</li>
        <li>Currency exchange</li>
      </div>
    </div>
  </div>
  </div>

          </>
          
);
}

export default Home;