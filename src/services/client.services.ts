import { TSettings } from "../types/form.types";

const APIBASE = import.meta.env.VITE_API_URL;

export default class ClientServices {
  static async setSettings(settings: TSettings) {
    const API = `${APIBASE}/v1/app/set-settings`;
    const response = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(settings),
    });

    return response.json();
  }
}
