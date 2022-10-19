import { toast } from 'react-toastify';
import './customToast.css';

const customToast = {
    success(msg, options = {}) {
      return toast.success(msg, {
        ...options,
        className: 'toast-success-containerr'
      });
    },
    error(msg, options = {}) {
      return toast.error(msg, {
        ...options,
        className: 'toast-error-container',
        progressClassName: {
            background: '#07F'
        }
      });
    },
    info(msg, options = {}) {
      return toast.info(msg, {
        ...options,
        className: 'toast-info-container',
      });
    },
  };

  export default customToast;