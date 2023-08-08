type TForm = {
  password: string;
  confirmPassword: string;
  pricePerKg: number;
  currency: string;
};

type TSettings = {
  password: string;
  pricePerKg: number;
  currency: string;
  token: string;
};

export type { TForm, TSettings };
