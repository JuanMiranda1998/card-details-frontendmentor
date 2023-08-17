import Banner from './components/Banner'
import { useState } from 'react';
import './App.css';

function App() {
  const [submit,setSubmit] = useState(false);
  const [name,setName] = useState('');
  const [cardNumber,setCardNumber] = useState('');
  const [expMonth,setExpMonth] = useState('');
  const [expYear,setExpYear] = useState('');
  const [cvc,setCvc] = useState('');
  const [nameError,setNameError] = useState('');
  const [cardNumberError,setCardNumberError] = useState('');
  const [expMonthError,setExpMonthError] = useState('');
  const [expYearError,setExpYearError] = useState('');
  const [cvcError,setCvcError] = useState('');

  function handleClick(){
    setSubmit(!submit)
  }
  function handleSubmit(e){
    e.preventDefault()
    name === ''? setNameError("Can't be blank") : setNameError('')
    isNaN(parseInt(cardNumber))? setCardNumberError('Wrong format, numbers only') : setCardNumberError('')
    cardNumber === ''? setCardNumberError("Can't be blank") : setCardNumberError('')
    expMonth === ''? setExpMonthError("Can't be blank") : setExpMonthError('')
    expYear === ''? setExpYearError("Can't be blank") : setExpYearError('')
    cvc === ''? setCvcError("Can't be blank") : setCvcError('')
    isValidForm()? handleClick() : ''
  }
  function isValidForm(){
    const values = [name,cardNumber,expMonth,expYear,cvc]
    return (!anyEmptyField(values)) && (isCardNumValid())
  }
  function anyEmptyField(arr){
    return arr.some((value)=>{return value===''})
  }
  function isCardNumValid(){
    return !isNaN(parseInt(cardNumber))
  }

  return (
    <>
      <main className='main'>
        <Banner cardNumber={cardNumber} name={name} expMonth={expMonth} expYear={expYear} cvc={cvc}/>
        {
          submit ? (
          <div className='thankyouContainer'>
            <img src="/img/icon-complete.svg"/>
            <h1 className='thankyou__title'>Thank You</h1>
            <p className='thankyou__text'>We´ve added your card details</p>
            <button className='form__button' type='button' onClick={()=>handleClick()}>Confirm</button>
          </div>
          ) : (
            <form className='form' noValidate autoComplete='off' onSubmit={e=>handleSubmit(e)}>
              <div className='input-group'>
                <label className='form__label' htmlFor="name">Cardholder name</label>
                <input className={(nameError!='')?'form__input errorInput' : 'form__input'} type="text" id="name" onChange={e=>setName(e.target.value)} placeholder='e.g. Jane Appleseed' maxLength={25} value={name}/>
                <p className='errorMessage'>{nameError}</p>
              </div>
              <div className='input-group'>
                <label className='form__label' htmlFor="cardNumber">Card number</label>
                <input className={(cardNumberError!='')?'form__input errorInput' : 'form__input'} type="text" id="cardNumber" onChange={e=>setCardNumber(e.target.value)} placeholder='e.g. 1234 5678 9123 0000' maxLength={19} value={cardNumber.replace(/\s/g,"").replace(/(\d{4})/g,"$1 ").trim()}/>
                <p className='errorMessage'>{cardNumberError}</p>
              </div>
              <div className='form-row'>
                <div className='input-group'>
                  <label className='form__label'>Exp. date (mm//yy)</label>
                  <div className="input-row">
                    <input className={(expMonthError!='')?'form__input small errorInput' : 'form__input small'} type="text" id="expMonth" placeholder='MM' maxLength={2} value={expMonth} onChange={e=>setExpMonth(e.target.value)}/>
                    <input className={(expYearError!='')?'form__input small errorInput' : 'form__input small'} type="text" id="expYear" placeholder='YY' maxLength={2} value={expYear} onChange={e=>setExpYear(e.target.value)}/>
                  </div>
                  <p className='errorMessage'>{(expMonthError!='' || expYearError!='')? expMonthError||expYearError: ''}</p>
                </div>
                <div className='input-group'>
                  <label className='form__label' htmlFor="cvc">Cvc</label>
                  <input className={(cvcError!='')?'form__input medium errorInput' : 'form__input medium'} type="text" id="cvc" placeholder='e.g. 123' onChange={e=>setCvc(e.target.value)} maxLength={3} value={cvc}/>
                  <p className='errorMessage'>{cvcError}</p>
                </div>
              </div>
              <button className='form__button'>Confirm</button>
            </form>
          )
        }
      </main>
    </>
  )
}

export default App