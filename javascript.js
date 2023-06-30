let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector("guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess() {
    const userGuess = Number(guessField.value); // " konstruktor Number upewnia nas, że wprowadzona wartość to liczba"
    
    if (guessCount === 1){ // sprawdzamy czy jest to pierwsza próba gracza, czy nie 
        guesses.textContent = "Previous guesses: "; // jeśli jest to pierwsza próba to pojawi się ten napis
    }
    guesses.textContent += '${userGuess}'; // dodajemy do tego liczbe jaką zgaduje/podaje gracz

    if (userGuess === randomNumber){ // sprawdzamy, czy zgadywana/podana przez gracza liczba jest równa z liczbą domyślną, gdy warunek jest true, kończymy i wyświetlamy komunikat, gdy nie jest true idziemy dalej ...
        lastResult.textContent = "Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = ""; // usunięcie pola z informacją o niski/wysoki poprzez dodanie samych "" 
        setGameOver();
    } else if (guessCount === 10){ // sprawdzamy, czy to była ostatnia próba gracza (10-ta), jeśli warunek nie jest true to idziemy niżej 
        lastResult.textContent = "!!! GAME OVER BRO !!!"; // jeśli tak to wyświetlamy komunikat
        lowOrHi.textContent = ""; // ponownie zerujemy pole z komunikatem niskim/wysoki
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!"; // gdy poprzedni warunek nie jest spełniony, czyli liczba prób nie jest === 10 to wyświetlamy komunikat i dalej sprawdzamy...
        lastResult.style.backgroundColor = "red";
        if (userGuess < randomNumber) { // ... sprawdzamy, czy liczba podana przez gracza jest mniejsza od randomowej i wyświetlamy komunikat
            lowOrHi.textContent = "Your number is too low!";
        } else if (userGuess > randomNumber) { // ...sprawdzamy, czy liczba podana przez gracza jest większa od randomowej i wyświetlamy komunikat
            lowOrHi.textContent = "Your number is to high!";
        }
    }

    guessCount++; // ponownie uruchamiamy funkcje, czyli gracz ma kolejną szansę póki guessCount nie będzie się równała 10-tej próbielub póki nie trafi odpowiedniej liczby
    guessField.value = "0"; // usunięcie danych z pola do zgadywania, aby gracz mógł ponownie wpisać swoją cyfrę 
    guessField.focus();


}
guessSubmit.