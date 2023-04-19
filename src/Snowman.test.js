import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

describe("End Game display", function (){
  test("it stops when maxGuess is reached", function () {
    const snowmanGame = render(<Snowman />);

    console.log("snowmanGame out of loop", snowmanGame);

    const wrongGuesses = ["n", "b", "c", "q", "z", "t"];
    //click  wrong guesses
    for (const guess of wrongGuesses) {
      console.log("snowmanGame in loop", snowmanGame);
      const ltrButton = snowmanGame.getByText(guess);
      fireEvent.click(ltrButton);
    }

    expect(snowmanGame.getByText("You lose! apple")).toBeInTheDocument();
  });
})


