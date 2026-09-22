import { useState, type FormEvent } from 'react';
import { useI18n } from '../../i18n/I18nContext';

type Errors = Partial<Record<'name' | 'email' | 'message', string>>;

export function ContactForm() {
  const { t } = useI18n();
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle');
  const [errors, setErrors] = useState<Errors>({});
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  function submit(event: FormEvent) {
    event.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = t('contact.nameError');
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = t('contact.emailError');
    if (values.message.trim().length < 10) next.message = t('contact.messageError');
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus('loading');
    try {
      const body = `${values.message}\n\n${values.name}\n${values.email}`;
      window.location.href = `mailto:?subject=${encodeURIComponent('Haimingju stay enquiry')}&body=${encodeURIComponent(body)}`;
      window.setTimeout(() => setStatus('ready'), 350);
    } catch { setStatus('error'); }
  }

  const field = (name: keyof typeof values, type: string, multiline = false) => <div className="form-field"><label htmlFor={name}>{t(`contact.${name}`)}</label>{multiline ? <textarea id={name} rows={6} value={values[name]} onChange={(event) => { setValues({ ...values, [name]: event.target.value }); setErrors({ ...errors, [name]: undefined }); }} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} /> : <input id={name} type={type} value={values[name]} onChange={(event) => { setValues({ ...values, [name]: event.target.value }); setErrors({ ...errors, [name]: undefined }); }} aria-invalid={Boolean(errors[name])} aria-describedby={errors[name] ? `${name}-error` : undefined} />}{errors[name] && <span id={`${name}-error`} className="field-error">{errors[name]}</span>}</div>;

  return <form className="contact-form" onSubmit={submit} noValidate>{field('name', 'text')}{field('email', 'email')}{field('message', 'text', true)}<button className="button button--dark" type="submit" disabled={status === 'loading'}>{status === 'loading' ? t('contact.sending') : t('contact.send')}</button>{status === 'ready' && <p className="form-status" role="status">{t('contact.ready')}</p>}{status === 'error' && <p className="form-status form-status--error" role="alert">{t('contact.fail')}</p>}</form>;
}
