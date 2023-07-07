import FlightBookingForm from "./FlightBookingForm";
import classes from "./flight.module.css";

function Flight() {
  return (
    <div>
      <div className={classes.section1}><FlightBookingForm /></div>
      <div className={classes.section2}>
        {" "}
        <div className={classes.icons}>
          <div className={classes.icon1}>
            <div>
              <img
                src="https://www.intermilesresources.com/iwov-resources/images/flights/featured-icons/free-cancellation.svg"
                className={classes.images1}
              />
            </div>
            <h2>Free Cancellation</h2>
            <span>
            Travel worry-free with Free Cancellation
            </span>
          </div>
          <div className={classes.icon2}>
            <div>
              <img
                src="https://www.intermilesresources.com/iwov-resources/images/flights/featured-icons/s-wi-m.svg"
                className={classes.images1}
              />
            </div>
            <h2>SAVE WITH INTERMILES</h2>
            <span>
            Book flights with us and save big every time
            </span>
          </div>
          <div className={classes.icon3}>
            <div>
              <img
                src="https://www.intermilesresources.com/iwov-resources/images/flights/featured-icons/flexi-fare.svg"
                className={classes.images1}
              />
            </div>
            <h2>Flexi fares</h2>
            <span>
              Free Date Change And Lower Cancellation Fee
            </span>
          
          </div>
        </div>
      </div>
      
      <h1> About InterMiles Flights</h1>
      <div className={classes.section5}>
        <div className={classes.para1}>
          <div>
            <h3>Flight Booking</h3>
            <p>
              Humans have always been curious about exploring the unexplored and
              this element of human nature has fuelled our need to indulge in
              vivid travel experiences. Our quest to discover and innovate has
              always motivated us to travel further than ever and explore more
              than ever. Today, the advancement in aviation technology has
              facilitated global travel, enabling us to look beyond geographical
              boundaries as we travel across the world. Talking of India, the
              country has evolved as a tourism hub, attracting international and
              local travellers who wish to experience the rich culture,
              tradition, heritage and history that the melting pot of diversity
              has to offer!
            </p>
          </div>
          <div>
            <h3>Booking Domestic Flights On InterMiles</h3>
            <p>
              Whether it's the heavenly beauty of Kashmir, enchanting beaches of
              Goa and Kerala, the mesmerising Thar desert or the breath-taking
              Sundarbans, India has an endless list of tourist destinations that
              every travel enthusiast must visit. To satisfy your wanderlust and
              explore the beauty of India, you've got to book your domestic
              flights for travel. And that's where every traveller's best friend
              - InterMiles steps in. InterMiles helps you make each trip
              rewarding, affordable, comfortable, memorable and so, truly lets
              you #MakeItCount. InterMiles is a Travel & Lifestyle programme,
              that rewards you for every spend on Flights, Hotels, Shop, Dine,
              Credit Cards, Fuel & more. It minimises any travel-related fuss
              while maximizing the joy of your travel experiences. Let
              InterMiles become your travel companion for life as it enables you
              to easily make your online flight bookings, hotel stays, tours and
              activities, restaurants and more. InterMiles has got your back at
              every step of your dream trip!{" "}
            </p>
          </div>
        </div>
        <div className={classes.para2}>
          <div >
            <h3>Book Domestic Flights Ticket Across Cities In India</h3>
            <p>
              Whether you wish to make a booking for a flight to Delhi, flight
              to Goa, flight to Mumbai, flight to Bangalore, flight to Kochi,
              flight to Chennai, flight to Kolkata, flight to Hyderabad or you
              wish to book flights from Delhi, flights from Goa, flights from
              Mumbai, flights from Bengaluru, flights from Hyderabad or any
              other city InterMiles is here for you. InterMiles, more than
              anything else, aims to give you an overall rewarding experience
              that is way beyond just getting the cheapest flight tickets, best
              discounts and deals on air tickets, lowest airfare, flight offers,
              cashback and more
            </p>
          </div>
          <div>
            <h3>Why Choose InterMiles For Flight Bookings</h3>
            <p>
              Making your domestic flight booking or international flight
              bookings with InterMiles gets you extremely valuable Miles on all
              the bookings that you make for yourself and your loved ones.
              Wondering how you can use InterMiles and get rewarded for every
              trip you take? InterMiles is the reward currency/points that you
              earn, every time you make a booking using our platform -
              InterMiles. Whether you make a domestic flight booking or an
              international flight booking, you earn Miles. You can then redeem
              your InterMiles to get free flights, hotel stays, shopping and
              dining vouchers, and even free fuel. InterMiles makes all of it -
              and much more, possible. Once you've got InterMiles, you'll never
              need another rewards programme
            </p>
          </div>
        </div>
        <div className={classes.paracontent1}>
          <div>
            <h3>Benefits Of Booking Flights On InterMiles</h3>
            <h4>Simple, Quick & Reliable Booking Process:</h4>
            <p>
              {" "}
              InterMiles helps you search for flights and make flight bookings
              with just a few clicks. We ensure your data is protected while you
              make hassle-free bookings for all your trips.
            </p>
            <h4>Wide Range of Airline Options:</h4>
            <p>
              If you're looking to book domestic flights to any destination in
              India, InterMiles gives you the freedom of choosing your desired
              airline, flight timing and more, from over 250+ airlines. Apart
              from domestic flights, you can also use InterMiles to book
              international flights. We have a range of domestic & international
              flights that you can choose from. Book your flights on InterMiles
              across multiple airlines such as Indigo, SpiceJet, GoAir, Air
              India, Etihad, Emirates, Qatar Airways, Singapore Airlines,
              Turkish Airways, Cathay Pacific, Air France, British Airways &
              many more. InterMiles offers you a plethora of options that you
              can pick from, enabling you to choose the airline and flight time
              that fits your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flight;
