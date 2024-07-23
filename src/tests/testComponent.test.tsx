import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignUp } from "../components";
import { Provider } from "react-redux";
import { store } from "../redux/store";

test("SignUp", async () => {
    const Wrapper = ({ children }: any) => (
        <Provider store={store}>{children}</Provider>
      )
    render(<Wrapper>
            <SignUp />
        </Wrapper>);

    const inputName = screen.getByPlaceholderText("Your name");
    const inputEmail = screen.getByPlaceholderText("Your email");
    const inputPassword = screen.getByPlaceholderText("Your password");
    const inputConfirmPassword = screen.getByPlaceholderText("Confirm your password");

    const errorName = screen.getByTestId("error-Your name");
    const errorEmail = screen.getByTestId("error-Your email");
    const errorPassword = screen.getByTestId("error-Your password");
    const errorConfirmPassword = screen.getByTestId("error-Confirm your password");

    expect(inputName).toHaveValue("");
    expect(errorName).toHaveTextContent("Enter your name");

    expect(inputEmail).toHaveValue("");
    expect(errorEmail).toHaveTextContent("Enter your email");

    expect(inputPassword).toHaveValue("");
    expect(errorPassword).toHaveTextContent("Enter your password");

    expect(inputConfirmPassword).toHaveValue("");
    expect(errorConfirmPassword).toHaveTextContent("Confirm your password");


    await userEvent.type(inputName, "Peter2");
    expect(inputName).toHaveValue("Peter2");
    expect(screen.queryByTestId("error-Your name")).toBeFalsy();

    await userEvent.type(inputEmail, "Peter@yandexby");
    expect(inputEmail).toHaveValue("Peter@yandexby");
    expect(screen.queryByTestId("error-Your email")).toBeFalsy();

    await userEvent.type(inputPassword, "123");
    expect(inputPassword).toHaveValue("123");
    expect(screen.getByTestId("error-Your password")).toHaveTextContent("Enter your password");

    await userEvent.type(inputConfirmPassword, "123");
    expect(inputConfirmPassword).toHaveValue("123");
    expect(screen.queryByTestId("error-Your password")).toBeFalsy();
    expect(screen.queryByTestId("error-Confirm your password")).toBeFalsy();

    await userEvent.click(screen.getByRole("button"));
    
    await waitFor(() => {
        expect(screen.getByTestId("error-Your email")).toBeTruthy();
    });

    await waitFor(async () => {
        await userEvent.clear(inputEmail)
        expect(inputEmail).toHaveValue('')
      })

    await userEvent.type(inputEmail, "Peter@yandex.by");
    expect(inputEmail).toHaveValue("Peter@yandex.by");
    
    await userEvent.click(screen.getByRole("button"));
    await waitFor(async () => {
        expect(screen.getByTestId("error-Your password")).toBeTruthy();
    });
});