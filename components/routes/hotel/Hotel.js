import HotelBookingForm from "./HotelBookingForm";
import classes from "./hotel.module.css";

function Hotel() {
  return (
    <div>
      <div className={classes.hotelsource1}>
        <HotelBookingForm />
      </div>
      <h1>Luxury And Premium Hotels In India</h1>
      <div className={classes.hotelsource2}>
        <div className={classes.available}>
          <div className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629904915739MumbaiHotel.jpg" />
            </div>
            <div>
              <h3>Premium Hotel In Mumbai</h3>
              <p>67 Premium Hotel In Mumbai</p>
            </div>
          </div>
          <div  className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629905038931DelhiHotel.jpg" className={classes.hotelimg}/>
            </div>
            <div>
              <h3>Premium Hotel In Chennai</h3>
              <p> 93 Premium Hotel In Chennai</p>
            </div>
          </div><div className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629905125445BangaloreHotel.jpg" />
            </div>
            <div>
              <h3>Premium Hotel In kolkata</h3>
              <p> 72 Premium Hotel In kolkata</p>
            </div>
          </div><div className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629905467436ChennaiHotel.jpg" />
            </div>
            <div>
              <h3>Premium Hotel In Hydrabad</h3>
              <p> 82 Premium Hotel In Hydrabad</p>
            </div>
          </div><div className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629905784772HyderabadHotel.jpg" />
            </div>
            <div>
              <h3>Premium Hotel In Delhi</h3>
              <p> 56 Premium Hotel In Delhi</p>
            </div>
          </div><div className={classes.availablehotel}>
            <div>
              <img src="https://interbook.intermiles.com/static/images/1629905972429KolkataHotel.jpg" />
            </div>
            <div>
              <h3>Premium Hotel In Bengluru</h3>
              <p> 59 Premium Hotel In Bengluru</p>
            </div>
          </div>
        </div>
      </div>
    {/* <div className={classes.hotelsource3}>pell</div> */}
    </div>
  );
}

export default Hotel;
