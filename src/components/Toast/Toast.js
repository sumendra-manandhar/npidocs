import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './toast-theme.scss'

export const toastNotify = {
    ...toast,
    success(content) {
        toast.success(content, {toastId: content})
    },
    warn(content) {
        toast.warn(content, {toastId: content})
    },
    error(content) {
        !(content instanceof Object) && toast.error(content, {toastId: content})
    }
};
export default toast;
export const ToastNotiifcationContainer = ToastContainer;