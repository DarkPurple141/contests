function setup() {
  // Write your code here.
  const container = document.getElementById('card-container')

  const cards = document.getElementsByClassName('card')

  function toggleClick(e) {
     const text = e.target.innerText

     //e.target.innerText = text == "up" ? "down" : "up"

     for (let i = 0; i < cards.length; i++) {
        if (cards[i] == this) continue;
        cards[i].innerText = "down"
     }

     e.target.innerText = "up"
  }

  for (let i = 0; i < cards.length; i++) {
     cards[i].addEventListener('click', toggleClick, false)
  }
}

// Example case.
document.body.innerHTML = `
<table id="card-container">
  <tbody>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
    <tr>
      <td class="card">down</td>
      <td class="card">down</td>
    </tr>
  </tbody>
</table>`;

setup();

document.getElementsByClassName("card")[0].click();
console.log(document.body.innerHTML);
