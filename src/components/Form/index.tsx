import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TForm } from "../../types/form.types";
import ClientServices from "../../services/client.services";
import { validationSchema } from "../../schemas/formValidation";
import { ImEyeBlocked, ImEye } from "react-icons/im";

function Form() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: TForm) => {
    const response = await ClientServices.setSettings({
      password: data.password,
      pricePerKg: data.pricePerKg,
      currency: data.currency,
      token: token,
    });
    if (response.isSetup === true) {
      navigate("/success");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:w-6/12 px-8 w-full flex flex-col gap-4"
      >
        <div className="w-full relative ">
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={`absolute right-2 text-xl top-1/2 transform -translate-y-1/2 focus:outline-none`}
          >
            {showPassword ? (
              <ImEyeBlocked className="mr-4" />
            ) : (
              <ImEye className="mr-4" />
            )}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Mot de passe"
            {...register("password")}
            className="btn"
          />
        </div>
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
        <div className="w-full relative ">
          <button
            type="button"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={`absolute right-2 text-xl top-1/2 transform -translate-y-1/2 focus:outline-none`}
          >
            {showPassword ? (
              <ImEyeBlocked className="mr-4" />
            ) : (
              <ImEye className="mr-4" />
            )}
          </button>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirmer le mot de passe"
            className="btn"
            {...register("confirmPassword")}
          />
        </div>
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
        <input
          type="number"
          placeholder="Prix au Kg"
          {...register("pricePerKg")}
          min={0}
          className="btn"
        />
        {errors.pricePerKg && (
          <span className="text-red-500 text-sm">
            {errors.pricePerKg.message}
          </span>
        )}
        <select
          {...register("currency")}
          className="border-2 border-gray-300 rounded-md p-4 w-full bg-white focus:ring-2 focus:ring-orange-400 focus:outline-none"
        >
          <option className="text-lg" value="">
            Choisir une devise
          </option>
          <option className="bg-white text-lg" value="MAD">
            MAD
          </option>
          <option className="bg-white text-lg" value="EUR">
            EUR
          </option>
          <option className="bg-white text-lg" value="USD">
            USD
          </option>
        </select>
        {errors.currency && (
          <span className="text-red-500 text-sm">
            {errors.currency.message}
          </span>
        )}

        <button
          type="submit"
          className="bg-orange-400 text-white px-4 py-2 rounded-md"
        >
          Envoyer
        </button>
      </form>
    </>
  );
}

export default Form;
