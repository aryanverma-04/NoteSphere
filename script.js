// document.addEventListener("DOMContentLoaded", function() {
//     const submitButton = document.getElementById('submit');
//     const nameInput = document.getElementById('fname');
//     const resultContainer = document.querySelector('.result-container');
//     submitButton.addEventListener('click', function(event) {
//         const name = nameInput.value.trim(); // Get the input name value
// Send a GET request to the Agify API
//         fetch(`https://api.genderize.io/?name=${name}`)
//             .then(response => response.json())
//             .then(data => {
// Update the result container with the name and guessed age
//                 resultContainer.innerHTML = `
//                     <div class="bd">
//                         <div id="name">Name: ${data.name}</div>
//                         <div id="age">Guessed Gender: ${data.gender}</div>
//                         <div id="age">Probability: ${data.probability}</div>
//                     </div>
//                 `;
//             })
//             .catch(error => {
//                 console.error('Error fetching data:', error);
//                 resultContainer.innerHTML = `<div>Error fetching data. Please try again later.</div>`;
//             });
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  const titleInput = document.getElementById("title");
  const textInput = document.getElementById("note");
  const submitButton = document.getElementById("submit-button");
  const displayContainer = document.getElementById("display-container");
  const removeButton = document.getElementById("");

  submitButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    const title = titleInput.value.trim();
    const text = textInput.value.trim();

    if (title !== "" && text !== "") {
      localStorage.setItem(title, text);
      displayNotes(); // Call the function to display notes
      // Clear input fields after adding note
      titleInput.value = "";
      textInput.value = "";
    } else {
      alert("Please enter both title and note.");
    }
  });

  // Function to display notes from local storage
  function displayNotes() {
    // Clear existing content in display container
    displayContainer.innerHTML = "";

    // Loop through local storage and create card elements for each note
    for (let i = 0; i < localStorage.length; i++) {
      const title = localStorage.key(i);
      const text = localStorage.getItem(title);

      // Create card elements
      const card = document.createElement("div");
      card.classList.add("card");

      const cardTitle = document.createElement("h3");
      cardTitle.textContent = title;
      card.appendChild(cardTitle);

      const cardText = document.createElement("p");
      cardText.textContent = text;
      card.appendChild(cardText);

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-button");
      removeButton.textContent = "Remove Note!";
      removeButton.addEventListener("click", function () {
        // Remove the note from local storage
        localStorage.removeItem(title);
        // Remove the card from the display container
        displayContainer.removeChild(card);
      });
      card.appendChild(removeButton);
      // Append card to display container
      displayContainer.appendChild(card);
    }
  }

  displayNotes();
});
