import instamartimage from "/images/instamart.png";

const Instamart = () => {
    return (
        <>
            <div className="instamart-container"><h1>Try Instamart on FoodVilla</h1></div>
            <div className="about-container">
            <div className="about-left">
                <h1>Convenience grocery,</h1>
                <h1>powered by FoodVilla</h1>
                <br></br>
                <h4>Groceries delivered in minutes, just as fast as we deliver food!</h4>
                <br></br>
                <h4>Open 6AM to late night everyday</h4>
            </div>
            <div className="about-right">
                <img src={instamartimage} alt="instamart image" />
            </div>
            </div>
        </>
      
    )
  }
  
  export default Instamart;