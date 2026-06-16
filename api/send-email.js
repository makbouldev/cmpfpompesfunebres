import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { fullName, phone, ville, email, contactSubject, message } = req.body

    if (!fullName || !phone || !ville || !email || !contactSubject || !message) {
      return res.status(400).json({ success: false, error: 'Champs requis manquants' })
    }

    // SMTP configuration
    let smtpUser = process.env.SMTP_USER || 'universalpfm@gmail.com'
    let smtpPass = process.env.SMTP_PASS

    // Smart defaults for Gmail if host is not specified
    let smtpHost = process.env.SMTP_HOST
    let smtpPort = parseInt(process.env.SMTP_PORT || '0', 10)

    if (!smtpHost && smtpUser.endsWith('@gmail.com')) {
      smtpHost = 'smtp.gmail.com'
      if (!smtpPort) smtpPort = 465
    }

    if (!smtpHost) smtpHost = 'smtp.gmail.com'
    if (!smtpPort) smtpPort = 587

    const targetEmail = process.env.CONTACT_TARGET_EMAIL || 'universalpfm@gmail.com'
    const ccEmails = process.env.CONTACT_CC_EMAILS || 'universalpfm@gmail.com'

    if (!smtpPass) {
      console.error('SMTP Password (SMTP_PASS) is missing')
      return res.status(500).json({
        success: false,
        error: "Le mot de passe SMTP (SMTP_PASS) n'est pas configuré. Veuillez le définir dans vos variables d'environnement.",
      })
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    })

    const emailSubject = `Nouvelle demande depuis le site Universal PF - ${contactSubject}`

    // Construct clean email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
        <h2 style="color: #d4a373; border-bottom: 2px solid #d4a373; padding-bottom: 10px; margin-top: 0;">
          Nouveau Message de Contact
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 150px; border-bottom: 1px solid #eeeeee;">Nom complet :</td>
            <td style="padding: 8px; border-bottom: 1px solid #eeeeee;">${fullName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Téléphone :</td>
            <td style="padding: 8px; border-bottom: 1px solid #eeeeee;">
              <a href="tel:${phone}" style="color: #d4a373; text-decoration: none;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Ville :</td>
            <td style="padding: 8px; border-bottom: 1px solid #eeeeee;">${ville}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eeeeee;">E-mail :</td>
            <td style="padding: 8px; border-bottom: 1px solid #eeeeee;">
              <a href="mailto:${email}" style="color: #d4a373; text-decoration: none;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eeeeee;">Sujet :</td>
            <td style="padding: 8px; border-bottom: 1px solid #eeeeee;">${contactSubject}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #ffffff; border-left: 4px solid #d4a373; border-radius: 4px;">
          <strong style="display: block; margin-bottom: 8px; color: #333333;">Message :</strong>
          <p style="margin: 0; white-space: pre-wrap; color: #555555; line-height: 1.5;">${message}</p>
        </div>
        
        <div style="margin-top: 25px; font-size: 11px; color: #888888; text-align: center; border-top: 1px solid #e0e0e0; padding-top: 15px;">
          Cet email a été envoyé automatiquement depuis le formulaire de contact de <a href="https://www.pompesfunebresmaroc.com" style="color: #888888; text-decoration: underline;">pompesfunebresmaroc.com</a>.
        </div>
      </div>
    `

    const mailOptions = {
      from: `"${fullName} - Universal PF" <${smtpUser}>`,
      to: targetEmail,
      cc: ccEmails !== targetEmail ? ccEmails : undefined,
      replyTo: email,
      subject: emailSubject,
      html: htmlContent,
      text: `Nom complet: ${fullName}\nTéléphone: ${phone}\nVille: ${ville}\nE-mail: ${email}\nSujet: ${contactSubject}\n\nMessage:\n${message}`,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({ success: true, message: 'Email envoyé avec succès' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      success: false,
      error: `Erreur lors de l'envoi de l'e-mail: ${error.message || error}`,
    })
  }
}
