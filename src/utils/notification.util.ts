import { toast } from "react-hot-toast";

const notification = {
  success: (message: string) => {
    toast.success(message, {
      style: {
        border: "1px solid #15803d",
        padding: "8px 12px",
        color: "#15803d",
      },
      iconTheme: {
        primary: "#15803d",
        secondary: "#FFFAEE",
      },
      position: "top-right",
    });
  },
  error: (message: string) => {
    toast.error(message, {
      style: {
        border: "1px solid #b91c1c",
        padding: "8px 12px",
        color: "#b91c1c",
      },
      iconTheme: {
        primary: "#b91c1c",
        secondary: "#FFFAEE",
      },
      position: "top-right",
    });
  },
};

export default notification;
