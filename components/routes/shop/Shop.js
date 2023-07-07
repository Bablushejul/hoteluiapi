import Link from "next/link";
import classes from "./shop.module.css";

function Shope() {
  return (
    <div className={classes.outer}>
      <div className={classes.inner1}>
        <img
          src="https://shopapi.intermiles.com/images/banner/Libas_1573x3341688560014328.jpeg"
          className={classes.imgs}
        />
        <img
          src="https://shopapi.intermiles.com/images/banner/JackJones_1573x3341687949079282.jpeg"
          className={classes.imgs}
        />
        <img
          src="https://shopapi.intermiles.com/images/banner/Lenskart_1573x3341688559867650.jpeg"
          className={classes.imgs}
        />
        <img
          src="https://shopapi.intermiles.com/images/banner/Nykaafashion_1573x3341687948956803.jpeg"
          className={classes.imgs}
        />
        <img
          src="https://shopapi.intermiles.com/images/banner/FirstCry_1573x3341687948775109.jpeg"
          className={classes.imgs}
        />
      </div>
      <h1>How Its Work</h1>
      <div className={classes.inner2}>
        <div className={classes.icons}>
          <div className={classes.icon1}>
            <div>
              <img
                src="https://shopapi.intermiles.com/images/partner/Login1652414710691.jpg"
                className={classes.images1}
              />
            </div>
            <h2>Login/Sign Up</h2>
            <span>
              Read Terms &amp; Conditions before proceeding with your purchase
            </span>
          </div>
          <div className={classes.icon2}>
            <div>
              <img
                src="https://shopapi.intermiles.com/images/partner/Deals1652414750217.jpg"
                className={classes.images1}
              />
            </div>
            <h2>Select Deals You Like</h2>
            <span>
              Miles will not be awarded for Product already in cart when
              redirected to partner site
            </span>
          </div>
          <div className={classes.icon3}>
            <div>
              <img
                src="https://shopapi.intermiles.com/images/partner/partner1652414781827.jpg"
                className={classes.images1}
              />
            </div>
            <h2>Shop at Partner</h2>
            <span>
              Read Terms &amp; Conditions before proceeding with your purchase
            </span>
          </div>
          <div className={classes.icon4}>
            <div>
              <img
                src="https://shopapi.intermiles.com/images/partner/credit1652414814876.jpg"
                className={classes.images1}
              />
            </div>
            <h2>Miles Credited</h2>
            <span>
              InterMiles will be credited to your Intermiles account within 75
              days
            </span>
          </div>
        </div>
      </div>
      {/* <h1>Shop and Earn InterMiles on 200+ Brands</h1>
      <div className={classes.inner3}></div> */}
      <h1>Shop by Categories</h1>
      <div className={classes.inner4}>
        <div className={classes.imgsection}>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Electronics.jpg"
              className={classes.imgs1}
            />
            <h3>Electronics and Appliances</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Personal%20Care.jpg"
              className={classes.imgs1}
            />
            <h3>Personal Care</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Apparels.jpg"
              className={classes.imgs1}
            />
            <h3>Apparels</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Mobile.jpg"
              className={classes.imgs1}
            />
            <h3>Mobile</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Mobile%20Accessories.jpg"
              className={classes.imgs1}
            />
            <h3>Mobile Accessories</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Grocery.jpg"
              className={classes.imgs1}
            />
            <h3>Grocery</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Desktops.jpg"
              className={classes.imgs1}
            />
            <h3>Laptop and PC's</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Beauty.jpg"
              className={classes.imgs1}
            />
            <h3>Beauty</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/BabyCare1650950546587.jpg"
              className={classes.imgs1}
            />
            <h3>Kids</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Fashion%20Accessories.jpg"
              className={classes.imgs1}
            />
            <h3>Fashion Accessories</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Kitchen%20Appliances%20and%20supplies.jpg"
              className={classes.imgs1}
            />
            <h3>Kitchen Appliances And Suppliers</h3>
          </div>
          <div className={classes.imgsection1}>
            <img
              src="https://shopapi.intermiles.com/images/category/Home%20Improvement.jpg"
              className={classes.imgs1}
            />
            <h3>Home Improvement</h3>
          </div>
        </div>
      </div>
      <h1>Buy Voucher for 200+ brands</h1>
      <div className={classes.inner5}>
        {" "}
        <div className={classes.voucher}>
          <div className={classes.voucherblock}>
            <img src="https://shopapi.intermiles.com/images/voucher/webimg21663695429106.jpg" className={classes.voucherimg} />
         <Link href='/'>Amazon online Shoping</Link>
          </div>
          <div className={classes.voucherblock}>
            <img src="https://shopapi.intermiles.com/images/voucher/webimg1811663695755876.jpg" className={classes.voucherimg} />
         <Link href='/'>Flipkart Shopping</Link>
          </div>
          <div className={classes.voucherblock}>
            <img src="https://shopapi.intermiles.com/images/voucher/1626782256637webimg4081663696206723.jpg" className={classes.voucherimg} />
          <Link href='/'>Myntra shoping</Link>
          </div>
          <div className={classes.voucherblock}>
            <img src="https://shopapi.intermiles.com/images/voucher/Swiggy_G_C_303X2041674109160654.png" className={classes.voucherimg} />
         <Link href='/'>Swiggy Shoping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shope;
