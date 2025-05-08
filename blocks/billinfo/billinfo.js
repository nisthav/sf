export default async function decorate(block) {
  const [
    billInfoEl,
    cardImageEl,
    paypalImageEl,
    cardholderNameEl,
    cardNoEl,
    expirationDateEl,
    cvvEl,
    cardZipEl,
    billingAddressEl,
    addressInfoEl,
    firstNameEl,
    lastNameEl,
    countryEl,
    streetAddressEl,
    apartmentEl,
    optionalInfoEl,
    cityEl,
    stateEl,
    zipEl,
    mobileEl,
    orderButtonEl,
    orderInfoEl,
  ] = block.children;

  console.log(cardImageEl)
  const billInfo = billInfoEl?.textContent?.trim() || '';
  const cardImage = cardImageEl?.querySelector('img')?.src || '';
  console.log(cardImage)
  const paypalImage = paypalImageEl?.querySelector('img')?.src || '';
  console.log(cardImage);
  const cardholderName = cardholderNameEl?.textContent?.trim() || '';
  const cardNo = cardNoEl?.textContent?.trim() || '';
  const expirationDate = expirationDateEl?.textContent?.trim() || '';
  const cvv = cvvEl?.textContent?.trim() || '';
  const cardZip = cardZipEl?.textContent?.trim() || '';
  const billingAddress = billingAddressEl?.textContent?.trim() || '';
  const addressInfo = addressInfoEl?.textContent?.trim() || '';
  const firstName = firstNameEl?.textContent?.trim() || '';
  const lastName = lastNameEl?.textContent?.trim() || '';
  const country = countryEl?.textContent?.trim() || '';
  const streetAddress = streetAddressEl?.textContent?.trim() || '';
  const apartment = apartmentEl?.textContent?.trim() || '';
  const optionalInfo = optionalInfoEl?.textContent?.trim() || '';
  const city = cityEl?.textContent?.trim() || '';
  const state = stateEl?.textContent?.trim() || '';
  const zip = zipEl?.textContent?.trim() || '';
  const mobile = mobileEl?.textContent?.trim() || '';
  const orderButton = orderButtonEl?.textContent?.trim() || '';
  const orderInfo = orderInfoEl?.textContent?.trim() || '';

  block.innerHTML = `<section class="form-section" data-block-name="form">
<div class="billing-form">
<div class="bill-title">${billInfo}</div>
<div class="info-inputs">
<div class="billing-info">
<div class="form-group">
<div class="card-image">
<label class="card-option">
    <input type="radio" name="payment" value="card" class="custom-radio" checked>
    <img src="${cardImage}"/>
  </label>
  <label class="card-option">
    <input type="radio" name="payment" value="card" class="custom-radio">
    <img src="${paypalImage}"/>
  </label>
  </div>
 <label for="cardholder-name">${cardholderName}</label>
 <input type="text" id="cardholder-name" name="cardholder-name" checked>
</div>
<div class="form-group">
 <label for="card-number">${cardNo}</label>
 <input type="text" id="card-number" name="card-number" required>
 </div>
<div class="form-group card-details">
<div class="options">
  <label for="exp-date">${expirationDate}</label>
   <input type="text" id="exp-date" name="exp-date" required>
  </div>
  <div class="options">
   <label for="cvv"> ${cvv}</label>
  
   <input type="text" id="cvv" name="cvv" required>
    </div>
    <div class="options">
      <label for="zip-code">${cardZip}</label>
      <input type="text" id="zip-code" name="zip-code" required>
       </div>
       </div>
       </div>
      <h5>
        ${billingAddress}
         </h5>
        <p class="address-info">
          ${addressInfo}
           </p>
    
          <div class="form-group double">
              <label for="first-name">${firstName}</label>
              <input type="text" id="first-name" name="first-name" required>
             </div>
            <div class="form-group">
              <label for="last-name">${lastName}</label>
              <input type="text" id="last-name" name="last-name" required>
               </div>
              <div class="form-group">
              <label for="country"> ${country}</label>
              <select id="country" name="country" required>
               <option value=""> </option>
               </select>
                 </div>
                <div class="form-group">
                   <label for="street-address">${streetAddress}</label>
                    <input type="text" id="street-address" name="street-address" required>
                   </div>
                  <div class="form-group">
                   <label for="apartment"> ${apartment} <span class="optional-info">${optionalInfo}</span> </label>
                   <input type="text" id="apartment" name="apartment">
                     </div>
            
                      <div class="form-group">
                     <label for="city">${city}</label>
              <input type="text" id="city" name="city">
                         </div>
                        <div class="form-group">
                        <label for="state">${state}</label>
                          <select id="state" name="state" required>
  <option value=""></option>
</select>
                           </div>
                          <div class="form-group">
                            <label for="zip">${zip}</label>
                            <input type="text" id="zip" name="zip" required>
                             </div>
                            <div class="form-group">
                              <label for="mobile"> ${mobile}</label>
                              <input type="tel" id="mobile" name="mobile" required>
       </div>
       </div>
                               </div>
                               </div>
                               </div>
                               <div class="form-actions"> 
<button class="review-button">${orderButton}</button>

<div class="order-info">${orderInfo}</div>
<div>
</div>
 </div>
</section>`;

  return block;
}
