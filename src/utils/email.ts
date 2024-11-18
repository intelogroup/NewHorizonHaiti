import emailjs from '@emailjs/browser';

// Initialize EmailJS with the public key
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Validate environment variables
if (!publicKey || !serviceId || !templateId) {
  console.error('Missing required EmailJS environment variables');
}

emailjs.init(publicKey);

export const sendEmail = async (formData: { name: string; email: string; message: string }) => {
  try {
    if (!serviceId || !templateId) {
      throw new Error('EmailJS configuration is incomplete');
    }

    const templateParams = {
      from_name: formData.name || 'Anonymous',
      from_email: formData.email,
      message: formData.message,
      to_email: 'jimkalinov@gmail.com',
      reply_to: formData.email
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    if (response.status === 200) {
      return { success: true };
    } else {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send message'
    };
  }
};