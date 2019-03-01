import {toast} from "react-toastify";

class ToastService{
    toasts = toast;

    makeToast(text){
        this.toasts(text, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }
}

export default new ToastService()