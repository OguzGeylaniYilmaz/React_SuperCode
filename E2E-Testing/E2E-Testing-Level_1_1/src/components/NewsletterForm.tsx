import { useForm } from "react-hook-form";
import { FormValues } from "../types/newsLetter";

export default function NewsletterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitted },
  } = useForm<FormValues>({
    defaultValues: { email: "", agreed: false },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Subscribed:", data);
  };

  const email = watch("email");
  const agreed = watch("agreed");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        type="email"
        placeholder="Your email"
        data-testid="email-input"
      />

      <label>
        <input
          {...register("agreed")}
          type="checkbox"
          data-testid="agree-checkbox"
        />{" "}
        I agree to receive the newsletter
      </label>

      <button type="submit" data-testid="submit-button">
        Subscribe
      </button>

      {isSubmitted && email && agreed && (
        <p data-testid="success-message">Thank you! You are now subscribed.</p>
      )}
    </form>
  );
}
