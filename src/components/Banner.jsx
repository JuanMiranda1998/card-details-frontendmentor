import PropTypes from "prop-types";
import './Banner.css'

function Banner(props){
    return ( 
    <div className='imageContainer'>
          <picture>
            <source media='(min-width:675px)' srcSet='/img/bg-main-desktop.png'/>
            <img src="/img/bg-main-mobile.png"/>
          </picture>
          <img className='cardBackImage' src="/img/bg-card-back.png"/>
          <div className="bannerData data__cvc">{props.cvc}</div>
          <img className='cardFrontImage' src="/img/bg-card-front.png"/>
          <img className='cardLogo' src="/img/card-logo.svg"/>
          <div className="bannerData data__cardNumber">{props.cardNumber}</div>
          <div className="bannerData data__name">{props.name}</div>
          <div className="bannerData data__exp">{props.expMonth} / {props.expYear}</div>
        </div>
    )
}

Banner.propTypes = {
  cardNumber: PropTypes.string,
  name: PropTypes.string,
  expMonth: PropTypes.string,
  expYear: PropTypes.string,
  cvc: PropTypes.string
};

export default Banner;