function more() {
        let name = prompt("What is your first name?");
        let age = prompt("What is your age?");
        let email = prompt("What is your email?");
        let h3 = document.querySelector("h3");
        let emoji = document.querySelector("p");
        let h1 = document.querySelector("h1");
        if (age < 16) {
          emoji.innerHTML = "😔";
          h3.innerHTML = "Sorry " + name + ", you cannot join our team!";
          h1.innerHTML = "Oh no !";
        } else {
          h3.innerHTML = "Thanks " + name + ", We'll be in touch!";
          emoji.innerHTML = "🙌";
          h1.innerHTML = "Yay ! !";
        }
        alert("Your email is " + email);
      }
      let hearMore = document.querySelector("button");
      hearMore.addEventListener("click", more);