import './style.css';

const contactComponent = () => {
    const content = document.querySelector("#content");
    const contactContent = document.createElement('div');
    contactContent.setAttribute("id", "contact-content");

    // lazy
    contactContent.innerHTML= `
        <p>Visit us at (adress) or call us at 04XX XXX XXX</p>
        <p>We offer full-service catering for any event.</p>
        <br>
        <p><b>RESERVE A TABLE TODAY:</b></p>
        <form action="/action_page.php">
        <div class="row">
          <div class="col-25">
            <label for="name">Your Name</label>
          </div>
          <div class="col-75">
            <input type="text" id="name" name="name" placeholder="Your name...">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="npeople">Number of people</label>
          </div>
          <div class="col-75">
            <input type="number" id="npeople" name="npeople" placeholder="Number of people...">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="birthday">Date</label>
          </div>
          <div class="col-75">
            <input type="date" id="birthday" name="birthday">
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="smessage">Additional Note</label>
          </div>
          <div class="col-75">
            <textarea id="smessage" name="smessage" placeholder="Any additional message/special requirement" style="height:200px"></textarea>
          </div>
        </div>
        <br>
        <div class="row">
          <input type="submit" value="BOOK">
        </div>
        </form>
    `;

    content.appendChild(contactContent);
}

export default contactComponent;