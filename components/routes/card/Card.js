import classes from "./card.module.css";

function Card() {
  return (
    <div>
      <h1 className={classes.card1}>Payment Method</h1>
      <div className={classes.container}>
      <div className={classes.card2}>
        <button className={classes.content1}>Credit Card</button>
        <h1 className={classes.content2}>Debit Card</h1>
        <h1 className={classes.content3}>Prepaid Card </h1>
        <h1 className={classes.content4}>UPI</h1>
        <h1 className={classes.content5}>Wallet</h1>
      </div>

      <div className={classes.card3}>
        
        <form className={classes.form}>

          <label>Card Number</label>
          <div>
            <input type="number" />
          </div>
<div className={classes.form1}>
          <label>
            CVV
            <div>
              <input type="number" />
            </div>
          </label>
          </div>
          <div className={classes.form1}>
          <label>
          
            Expiry date
            <div>
              
              <input type="month" max="2019-12" step="12"></input>
            </div>
          </label>
          </div>
          <div className={classes.form1}>
          <label>
            Password
            <div>
              <input type="password" />
            </div>
          </label>
          </div>
          <div className={classes.form1}>
          <label>
            <div>
              <button>Pay now</button>
            </div>
          </label>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Card;
