import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Le mot de passe est obligatoire")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Le mot de passe doit contenir au moins une lettre et un chiffre"
    ),
  confirmPassword: Yup.string()
    .required("La confirmation est obligatoire")
    .oneOf(
      [Yup.ref("password")],
      "Les mots de passe ne correspondent pas"
    ),
  pricePerKg: Yup.number()
    .required("Le prix est obligatoire")
    .min(0, "Le prix doit être supérieur à 0"),
  currency: Yup.string().required("La devise est obligatoire"),
});
