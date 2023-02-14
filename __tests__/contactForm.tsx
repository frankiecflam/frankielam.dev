import ContactForm from "@/components/contact/contactForm";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

const renderComponent = () => {
  render(<ContactForm />);
};

describe("contactForm", () => {
  it("renders a form element", () => {
    renderComponent();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("renders an input element for name", () => {
    renderComponent();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  it("renders an input element for email", () => {
    renderComponent();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });
  it("renders a textarea element for message", () => {
    renderComponent();

    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("renders a button for form submission", () => {
    renderComponent();

    const submitBtn = screen.getByRole("button", {
      name: /send message/i,
    }) as HTMLButtonElement;

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.type).toBe("submit");
  });

  it("renders user input for name when typed in", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText("name"), "Frankie");

    expect(screen.getByLabelText("name")).toHaveValue("Frankie");
  });

  it("renders user input for email when typed in", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText("email"), "frankie@gmail.com");

    expect(screen.getByLabelText("email")).toHaveValue("frankie@gmail.com");
  });

  it("renders user input for message when typed in", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(
      screen.getByLabelText("message"),
      "Hi Frankie, nice to meet you!"
    );

    expect(screen.getByLabelText("message")).toHaveValue(
      "Hi Frankie, nice to meet you!"
    );
  });

  it("renders a text of required to remind users of invalid input if email input field is left empty upon form submission", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText("name"), "Frankie");
    await user.type(
      screen.getByLabelText("message"),
      "Hi Frankie, nice to meet you!"
    );
    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      })
    );

    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  it("renders a text of required to remind users of invalid input if message input field is left empty upon form submission", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText("name"), "Frankie");
    await user.type(screen.getByLabelText("email"), "frankie@gmail.com");
    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      })
    );

    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });

  it("renders a text of required to remind users of invalid input if name input field is left empty upon form submission", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText("email"), "frankie@gmail.com");
    await user.type(
      screen.getByLabelText("message"),
      "Hi Frankie, nice to meet you!"
    );
    await user.click(
      screen.getByRole("button", {
        name: /send message/i,
      })
    );

    expect(screen.getByText(/required/i)).toBeInTheDocument();
  });
});
