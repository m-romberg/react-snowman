import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";

describe("End Game display", function () {
  test("it stops when maxGuess is reached", function () {
    const snowmanGame = render(<Snowman words={["apple"]} />);

    console.log("snowmanGame out of loop", snowmanGame);
    console.log("snowmanGame-text", snowmanGame.getByText("z"));

    const wrongGuesses = ["n", "b", "c", "q", "z", "t"];
    //click  wrong guesses
    for (const guess of wrongGuesses) {
      console.log("snowmanGame in loop", snowmanGame);
      const ltrButton = snowmanGame.getByText(guess);
      fireEvent.click(ltrButton);
    }

    expect(snowmanGame.queryByText("You lose! apple")).toBeInTheDocument();
    expect(
      snowmanGame.container.querySelector('img[alt="6"]')
    ).toBeInTheDocument();
    expect(snowmanGame.queryByText("z")).not.toBeInTheDocument();
  });
});

it("matches snapshot", function () {
  const { container } = render(<Snowman />);
  expect(container).toMatchSnapshot();
});
