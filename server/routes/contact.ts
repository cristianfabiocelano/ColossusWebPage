import { Router } from 'express';
import { MailService } from '@sendgrid/mail';

const router = Router();

const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY || '');

router.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validar que tenemos la API key
    if (!process.env.SENDGRID_API_KEY) {
      throw new Error('SendGrid API key no configurada');
    }

    // Usar un remitente verificado por defecto
    const emailData = {
      to: 'somoscolosus@gmail.com', // Email donde se reciben los mensajes de contacto
      from: 'noreply@example.com', // Cambiar a un dominio verificado en SendGrid
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `
        Nombre: ${name}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nuevo mensaje de contacto</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${message}</p>
      `,
    };

    await mailService.send(emailData);

    res.status(200).json({ 
      message: 'Mensaje enviado con éxito' 
    });
  } catch (error) {
    console.error('Error al enviar email:', error);

    // Mejorar el mensaje de error para el usuario
    const errorMessage = error instanceof Error ? 
      (error.message === 'SendGrid API key no configurada' ? 
        'El servicio de correo no está configurado correctamente' : 
        'Error al enviar el mensaje. Por favor, intenta nuevamente.'
      ) : 
      'Error al enviar el mensaje';

    res.status(500).json({ 
      message: errorMessage
    });
  }
});

export default router;