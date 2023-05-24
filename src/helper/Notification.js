import toastr from "toastr";
import "toastr/build/toastr.min.css";

export function createNotification(type, message, title = "") {
     switch (type) {
          case "info":
               toastr.info(message, title, {
                    timeOut: 2000,
                    closeButton: true,
                    showEasing: "swing",
                    progressBar: true,
                    newestOnTop: true,
               });
               break;
          case "success":
               toastr.success(message, title, {
                    timeOut: 2000,
                    closeButton: true,
                    showEasing: "swing",
                    progressBar: true,
                    newestOnTop: true,
               });
               break;
          case "warning":
               toastr.warning(message, title, {
                    timeOut: 2000,
                    closeButton: true,
                    showEasing: "swing",
                    progressBar: true,
                    newestOnTop: true,
               });
               break;
          case "error":
               toastr.error(message, title, {
                    timeOut: 2000,
                    closeButton: true,
                    showEasing: "swing",
                    progressBar: true,
                    newestOnTop: true,
               });
               break;
          default:
               break;
     }
}
