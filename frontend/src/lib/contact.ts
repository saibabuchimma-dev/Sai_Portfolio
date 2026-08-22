import { profile } from '../data/portfolio'

export const CONTACT_EMAIL = profile.email

const SUBJECT = `Hello ${profile.name.split(' ')[0]} — let's connect`

const BODY = [
  `Hi ${profile.name.split(' ')[0]},`,
  '',
  'I came across your portfolio and would love to get in touch.',
  '',
  'A little about why I am reaching out:',
  '• Who I am / my company: ',
  '• What I have in mind (role, project, or collaboration): ',
  '• Timeline or next step: ',
  '',
  'Looking forward to hearing from you.',
  '',
  'Best regards,',
  '[Your name]',
].join('\n')

export function buildGmailCompose(): string {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: CONTACT_EMAIL,
    su: SUBJECT,
    body: BODY,
  })
  return `https://mail.google.com/mail/?${params.toString()}`
}
