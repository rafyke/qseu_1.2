// Inicialize o EmailJS com o seu User ID
emailjs.init("7LDdOo3-ibZImbAq-");

let selectedRating; // Variável para armazenar a avaliação selecionada

//Evitar atualização da página ao clicar no botão de avaliação
const ratingButtons = document.querySelectorAll(".rating-button");
ratingButtons.forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    ratingButtons.forEach(btn => btn.classList.remove("selected")); // Remove 'selected' de todos os botões
    button.classList.add("selected");
  });
});

document
  .getElementById("survey-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const selectedRating = form
      .querySelector(".rating-button.selected")
      .getAttribute("data-rating");
    const name = form.querySelector("#name").value;
    const comment = form.querySelector("#comment").value;

    const data = {
      rating: selectedRating,
      name: name,
      comment: comment,
    };

    emailjs
      .send("Rafaela_Costa", "Avalia_jogo", data)
      .then(function (response) {
        console.log("Avaliação enviada com sucesso!", response);
        alert("Avaliação enviada com sucesso! Obrigado pela sua avaliação.");
      })
      .catch(function (error) {
        console.error("Erro ao enviar a avaliação", error);
        alert(
          "Ocorreu um erro ao enviar a avaliação. Por favor, tente novamente mais tarde."
        );
      });
  });

// emailjs.init("seu_user_id_do_emailjs");

//     document.getElementById("survey-form").addEventListener("submit", function(event) {
//         event.preventDefault();

//         const form = event.target;
//         emailjs.sendForm("seu_service_id_do_emailjs", "seu_template_id_do_emailjs", form)
//             .then(function(response) {
//                 console.log("Avaliação enviada com sucesso!", response);
//                 alert("Avaliação enviada com sucesso! Obrigado pela sua avaliação.");
//             })
//             .catch(function(error) {
//                 console.error("Erro ao enviar a avaliação", error);
//                 alert("Ocorreu um erro ao enviar a avaliação. Por favor, tente novamente mais tarde.");
//             });
//     });
