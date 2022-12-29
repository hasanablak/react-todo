import Swal from "sweetalert2";

export function ModifidedSwal() {
	return Swal.mixin({
		customClass: {
			popup: 'dashed',
			confirmButton: 'form-control dashed',
			cancelButton: 'form-control dashed'
		}
	});
}