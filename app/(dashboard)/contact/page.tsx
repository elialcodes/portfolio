'use client';

import Image from 'next/image';
import { inria, montserrat } from 'fonts/fonts';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useMediaQuery } from '@mui/material';
import * as motion from 'framer-motion/client';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

type Form = {
  name: string;
  email: string;
  message: string;
};

export default function Contact(): JSX.Element {
  const [formData, setFormData] = useState<Form>({
    name: '',
    email: '',
    message: '',
  });

  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const idService: string = process.env.NEXT_PUBLIC_idService || '';
  const idTemplate: string = process.env.NEXT_PUBLIC_idTemplate || '';
  const userEmailJS: string = process.env.NEXT_PUBLIC_userEmailJS || '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    if (!form.checkValidity()) {
      form.reportValidity(); // Esto muestra los mensajes de error nativos del navegador
      return;
    }

    emailjs
      .sendForm(
        idService, // El ID de servicio que te da EmailJS
        idTemplate, // El ID de plantilla que creaste en EmailJS
        e.target as HTMLFormElement, // El formulario que estás enviando
        userEmailJS, // El ID del usuario que te da EmailJS
      )
      .then(
        (result) => {
          setResult('Mensaje enviado');
          setError(null);
        },
        (error) => {
          setResult(null);
          setError('Error');
        },
      );
    e.currentTarget.reset();
    setFormData({ name: '', email: '', message: '' });
  };

  const isMediumScreen = useMediaQuery(
    '(min-width:768px) and (max-width:1023px)',
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: '50%' }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
      >
        <h2 className={`${montserrat.className} title`}>CONTACTO</h2>

        <p className={`contact-text ${inria.className}`}>
          Si deseas hacerme cualquier pregunta, rellena este formulario y me
          pondré en contacto contigo lo antes posible:
        </p>
      </motion.div>

      <div className="contact-form-and-image">
        <Box
          onSubmit={sendEmail}
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <TextField
            id="outlined-basic"
            label="Nombre"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: isMediumScreen ? '18rem' : '21rem' }}
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: isMediumScreen ? '18rem' : '21rem' }}
          />
          <TextField
            id="outlined-basic"
            label="Asunto"
            variant="outlined"
            multiline
            minRows={8}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            style={{ width: isMediumScreen ? '18rem' : '21rem' }}
          />
          <div
            className="button-and-alert"
            style={{
              alignItems: 'center',
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              width: isMediumScreen ? '18rem' : '21rem',
            }}
          >
            <Button
              type="submit"
              variant="contained"
              style={{
                borderColor: 'darkorange',
                color: 'rgb(255,132,0)',
                backgroundColor: 'antiquewhite',
                width: '6rem',
                borderRadius: '1rem',
              }}
            >
              Enviar
            </Button>
            {result && (
              <Alert
                severity="success"
                onClose={() => {
                  setResult('');
                }}
                style={{ padding: '0.1rem 0.4rem' }}
              >
                Mensaje enviado
              </Alert>
            )}
            {error && (
              <Alert
                severity="error"
                onClose={() => {
                  setError('');
                }}
                style={{ padding: '0.1rem 0.4rem' }}
              >
                Ha habido un error
              </Alert>
            )}
          </div>
        </Box>
        <motion.div
          initial={{ opacity: 0, x: '20%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
          }}
        >
          <Image
            src="/contact.jpg"
            alt="computer and coffee"
            width={336}
            height={360}
            style={{ borderRadius: '1rem', marginTop: '0.5rem' }}
          />
        </motion.div>
      </div>
    </>
  );
}
