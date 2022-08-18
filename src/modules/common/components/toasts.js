import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

export const successToast = (message) => {createToast(message, {
		hideProgressBar: 'false',
		showIcon: 'true',
		position: 'top-center',
		type: 'success',
		transition: 'bounce',
    swipeClose: true,
		timeout: 2000
	});
};
export const errorToast = (message) => {createToast(message, {
		hideProgressBar: 'false',
		showIcon: 'true',
		position: 'top-center',
		type: 'danger',
		transition: 'bounce',
    swipeClose: true,
		timeout: 2000
	});
};
export const warnToast = (message) => {createToast(message, {
		hideProgressBar: 'false',
		showIcon: 'true',
		position: 'top-center',
		type: 'warning',
		transition: 'bounce',
    swipeClose: true,
		timeout: 2000
	});
};
export const infoToast = (message) => {createToast(message, {
		hideProgressBar: 'false',
		showIcon: 'true',
		position: 'top-center',
		type: 'info',
		transition: 'bounce',
    swipeClose: true,
		timeout: 2000
	});
};
export const spinnerToast = (message) => {createToast(message, {
		hideProgressBar: 'false',
		showIcon: 'true',
		position: 'top-center',
		type: 'info',
		transition: 'bounce',
    timeout: 'none',
	});
};
