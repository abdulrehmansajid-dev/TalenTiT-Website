# TalenTiT Hospitality — Frontend

Scaffolded Vite + React + Tailwind project for the TalenTiT hospitality website.

Quick start:

```bash
cd f:/MERN/TalenTiT
npm install
npm run dev
```

Notes:
- The project uses Tailwind CSS. Configuration is in `tailwind.config.cjs`.
- The contact form uses `emailjs-com` — set your EmailJS `serviceId`, `templateId`, and `publicKey` in `src/components/Contact.jsx`.
- Placeholder images/logos are used; replace them in the components or add static assets under `public/`.
 - The contact form uses EmailJS. Add your EmailJS credentials as environment variables in a `.env` file at the project root:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

- For deployment: Vercel or Netlify work well. The `build` script produces a static site compatible with both.
- A `robots.txt` and a simple `sitemap.xml` are included for SEO.
