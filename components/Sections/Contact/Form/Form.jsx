import { useSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import {
    ContactForm,
    FormInput,
    FormLabel,
    Message,
    SubmitMessage,
} from "./formStyles";

const Form = () => {
    const [loading, setLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const messageStatus = (status) => {
        const statusFunction = {
            success: () =>
                enqueueSnackbar("Mensagem enviada com sucesso!", {
                    variant: "success",
                }),
            error: () =>
                enqueueSnackbar("Não foi possível enviar sua mensagem!", {
                    variant: "error",
                }),
            warning: () =>
                enqueueSnackbar("Espere para enviar outra mensagem!", {
                    variant: "warning",
                }),
            info: () =>
                enqueueSnackbar("Enviando mensagem...", { variant: "info" }),
        };
        statusFunction[status]();
    };

    const buttonRef = useRef();

    async function sendForm(e) {
        const formData = [...new FormData(e.target).entries()];
        setLoading(true);
        try {
            const resp = await fetch(
                "https://formsubmit.co/53b639ee17ac76a153481d2688a2eed6",
                {
                    method: "POST",
                    body: new URLSearchParams(formData),
                }
            );
            messageStatus("success");
            setLoading(false);
            buttonRef.current.disabled = false;
            e.target.reset();
        } catch (e) {
            console.log(e);
            messageStatus("error");
        }
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        if (loading) {
            messageStatus("warning");
            buttonRef.current.disabled = true;
        } else {
            messageStatus("info");
            sendForm(e);
        }
    }

    return (
        <ContactForm method="POST" onSubmit={handleFormSubmit}>
            <input type="hidden" name="_template" value="box" />
            <input type="hidden" name="_captcha" value="false" />

            <FormLabel htmlFor="name">Nome completo</FormLabel>
            <FormInput type="text" name="name" id="name" required />

            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" name="email" id="email" required />

            <FormLabel htmlFor="subject">Assunto</FormLabel>
            <FormInput type="text" name="subject" id="subject" required />

            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <FormInput
                resize="none"
                as={Message}
                name="message"
                id="message"
                requireed
            />

            <SubmitMessage ref={buttonRef}>Enviar</SubmitMessage>
        </ContactForm>
    );
};

export default Form;
