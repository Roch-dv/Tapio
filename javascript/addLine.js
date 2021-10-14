function addLine(item){
  item.parentNode.parentNode.parentNode.parentNode.parentNode.insertAdjacentHTML(
    'beforeend',
    `<div class="line">
      <div class="d-flex justify-content-between align-items-center">
        <div class="line-left d-flex">
          <div class="factor">
            <select name="Factor" required class="custom-select my-1 mr-sm-2">
              <option disabled selected hidden><i>Factor of emission</i></option>
              <option value="1">Factor 1</option>
              <option value="2">Factor 2</option>
              <option value="3">Factor 3</option>
              <option value="3">Factor 4</option>
            </select>
          </div>
          <div class="value">
            <input class="value-style mx-2 my-1 mr-sm-2" type="number" placeholder="Value" min="0" maxlength="5"  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);">
          </div>
          <div class="uncertainty ml-5">
            <select name="Uncertainty" required class="custom-select my-1 mr-sm-2">
              <option disabled selected hidden><i>Uncertainty</i></option>
              <option value="1">Uncertainty 1</option>
              <option value="1">Uncertainty 2</option>
              <option value="1">Uncertainty 3</option>
            </select>
          </div>
        </div>
        <div class="line-right d-flex">
          <div class="t-co2-e">
            <input class="t-co2-e-style" type="text" name="t-co2-e" placeholder="t CO2 e" maxlength="10">
          </div>
          <div class="icons d-flex align-self-center">
            <p onclick="addLine(this)"><i class="fas fa-plus add-line pr-2 pl-4"></i></p>
            <p onclick="deleteLine(this)"><i class="fas fa-trash-alt delete-line pr-2"></i></p>
            <p data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-comment-alt add-comment pr-2"></i></p>
          </div>
        </div>
      </div>
    </div>`
  )
}
