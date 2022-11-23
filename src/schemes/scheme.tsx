import * as Yup from 'yup';

export const signInScheme = Yup.object({
	email: Yup.string().email('E-pastam jābūt derīgam').required('Lūdzu ievadiet Jūsu e-pastu'),
	password: Yup.string()
		.min(8, 'Parolim jābūt vismaz no 8 simboliem')
		.max(40, 'Parolim jābūt mazāk par 40 simboliem')
		.required('Lūdzu ievadiet paroli'),
});
export const signUpScheme = Yup.object({
	email: Yup.string().email('E-pastam jābūt derīgam').required('Lūdzu ievadiet Jūsu e-pastu'),
	deviceID: Yup.string().required('Lūdzu ievadiet ierīces ID'),
	password: Yup.string()
		.min(8, 'Parolim jābūt vismaz no 8 simboliem')
		.max(40, 'Parolim jābūt mazāk par 40 simboliem')
		.required('Lūdzu ievadiet paroli'),
	confirm_password: Yup.string()
		.min(8, 'Parolim jābūt vismaz no 8 simboliem')
		.max(40, 'Parolim jābūt mazāk par 40 simboliem')
		.required('Lūdzu atkartojiet paroli')
		.oneOf([Yup.ref('password'), null], 'Paroliem jāsakrīt'),
});
