import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from '@testing-library/user-event'

describe('Greeting component', () => {
  test('renders hello world', () => {
    render(<Greeting />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });

  test('renders good to see you id button was not cliked', () => {
    // Arrange
     render(<Greeting />);
    //Act
    //Assert
    expect(screen.getByText(/good to see you/i)).toBeInTheDocument();
  });

  test('renders good to see you when button was cliked', () => {
    // Arrange
    render(<Greeting />);
    // Act 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //Assert
    expect(screen.getByText(/good to see you again/i)).toBeInTheDocument();
  });

   test('donot renders good to see you was button was cliked', () => {
    // Arrange
    render(<Greeting />);
    // Act 
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    //Assert
    const outputElement = screen.queryByText(/It's good to see you !/i, {exact: false});
    expect(outputElement).toBeNull();
  });
  
});

