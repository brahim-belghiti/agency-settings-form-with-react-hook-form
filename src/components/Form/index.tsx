import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TForm } from "../../../types/form.types";
import ClientServices from "../../../services/client.services";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Must contain at least one letter and one number"
    ),
  pricePerKg: Yup.number()
    .required("Price is required")
    .min(0, "Price must be at least 0"),
  currency: Yup.string().required("Currency is required"),
  token: Yup.string().required("Token is required"),
});

function Formik() {
  const navigate = useNavigate();
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get("token") || "";
    setToken(token);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    resolver: yupResolver(validationSchema) as any,
  });

  const onSubmit = async (data: TForm) => {
    const response = await ClientServices.setSettings({
      password: data.password,
      pricePerKg: 12,
      currency: "EUR",
      token: token,
    });
    if (response.isSetup === true) {
      navigate("/success");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <input
        type="password"
        placeholder="Password"
        {...register("password")}
        className="border-2 border-gray-300 rounded-md p-2 w-full"
      />
      <input type="number" placeholder="Price" {...register("pricePerKg")} />
      <select {...register("currency")}>
        <option value="MAD">MAD</option>
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
      </select>
      <input type="hidden" value={token} {...register("token")} />

      {errors.password && (
        <span className="text-red-500 text-sm">{errors.password.message}</span>
      )}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Envoyer
      </button>
    </form>
  );
}

export default Formik;
