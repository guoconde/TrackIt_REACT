import * as yup from "yup";

const schema = yup.object().shape({
    email: yup.string().email('Por favor adicione um email válido.').required('Email é um campo obrigatório.'),
    password: yup.string().required('Senha é um campo obrigatório.'),
    name: yup.string().required('Nome é um campo obrigatório.'),
    image: yup.string().url().required('Foto é um campo obrigatório.'),
}).required();

export default schema