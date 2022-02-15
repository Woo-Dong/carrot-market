import { FieldErrors, useForm } from "react-hook-form";

interface LoginForm {
  username: string;
  password: string;
  email: string;
  errors?: string;
}

export default function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    reset,
    resetField,
  } = useForm<LoginForm>({ mode: "onBlur" });

  const onValid = (data: LoginForm) => {
    console.log(data);
    console.log("I'm valid bby");
    // setError("errors", { message: "Backend is offline sorry!" });
    setError("username", { message: "The username is already in use" });
    // reset();
    resetField("password");
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  console.log("errors: ", errors);

  const { username, email, password } = watch();
  console.log(username, email, password);

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars",
            value: 5,
          },
        })}
        type="text"
        placeholder="Username"
      />
      <input
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) =>
              !value.includes("@gmail.com") || "Gmail is not allowed",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${Boolean(errors.email) ? "border-red-500" : ""}`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "Password is required" })}
        type="password"
        placeholder="Password"
      />
      <input type="submit" value="Create Account" />
      {errors.errors?.message}
    </form>
  );
}
