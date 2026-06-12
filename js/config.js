/**
 * RM PrimeTI Tecnologia — Configuração Supabase
 *
 * COMO CONFIGURAR:
 * 1. Acesse https://supabase.com e crie um projeto gratuito
 * 2. Em Settings > API, copie "Project URL" e "anon public key"
 * 3. Substitua os valores abaixo
 * 4. Execute o arquivo supabase/schema.sql no SQL Editor do Supabase
 *
 * A chave "anon" é segura para expor no front-end
 * (protegida por Row Level Security no Supabase)
 */

const SUPABASE_URL      = 'https://bqqixufdwwnxacppdeug.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxcWl4dWZkd3dueGFjcHBkZXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExODQ5MzMsImV4cCI6MjA5Njc2MDkzM30.6jPmAwgQBwwzI4U7vbEE0xHA2rfB5wVxBlE9YOhqXfU';

/**
 * EmailJS — e-mail de confirmação da newsletter
 *
 * Como configurar (5 minutos, grátis):
 * 1. Crie conta em https://www.emailjs.com
 * 2. "Email Services" → "Add New Service" → Gmail → conecte comercial@primetitec.com.br
 *    Anote o Service ID gerado (ex: service_abc123)
 * 3. "Email Templates" → "Create New Template"
 *    Preencha os campos:
 *      To Email  → {{to_email}}
 *      Subject   → Confirmação de inscrição — RM PrimeTI Tecnologia
 *      Content   → (use o HTML do arquivo emailjs_template.html deste projeto)
 *    Anote o Template ID gerado (ex: template_xyz789)
 * 4. "Account" → "General" → copie a Public Key
 * 5. Substitua os três valores abaixo e faça git push
 */
const EMAILJS_PUBLIC_KEY  = 'SUA_PUBLIC_KEY';    // Account → General → Public Key
const EMAILJS_SERVICE_ID  = 'SUA_SERVICE_ID';    // Email Services → Service ID
const EMAILJS_TEMPLATE_ID = 'SUA_TEMPLATE_ID';   // Email Templates → Template ID
