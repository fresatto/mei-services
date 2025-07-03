import axios from "axios";
import { Platform } from "react-native";

const api = axios.create({
  baseURL: Platform.select({
    ios: "http://localhost:3001",
    android: "http://10.0.2.2:3001",
  }),
});

export default api;
