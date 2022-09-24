const game = ()=>{
    let pSore = 0;
    let cScore = 0;
    // start game
    const startGame = () =>{
        const playbtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match")
        playbtn.addEventListener("click", (j) => {
            j.preventDefault
            introScreen.classList.add(".fadeOut");
            match.classList.add("fadein");


        });

    };
    const playMatch = () =>{
        const options = document.querySelectorAll('. options button')

    }
    startGame();
};
game();