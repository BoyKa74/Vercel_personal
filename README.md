# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js and Tailwind CSS. Perfect for showcasing your professional skills, projects, and experience.

## 🚀 Features

- Modern and responsive design
- Interactive UI with smooth animations
- Optimized for all devices (mobile, tablet, desktop)
- Fast page loading with Next.js
- SEO optimized
- Easy to customize and personalize
- Working contact form with EmailJS

## 📋 Sections

The portfolio includes the following sections:

1. **Hero** - An attractive introduction with Mai Vủ, avatar, and brief description
2. **About** - Detailed information about you, education, and experience
3. **Projects** - Showcase of your work with images and descriptions
4. **Skills** - Visual representation of your technical abilities
5. **Contact** - A form for visitors to reach out to you
6. **Resume** - Link to download your CV/resume

## 🛠️ Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - For type-safe code
- **Tailwind CSS** - For styling
- **React Hooks** - For state management
- **EmailJS** - For the contact form functionality
- **Responsive Design** - Looks great on all devices

## 🔧 Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/personal-website.git
cd personal-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Configure EmailJS for the contact form:

   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create a new service using your email provider (e.g., Gmail, Outlook)
   - Create an email template with the following variables:
     - `from_name` - Sender's name
     - `from_email` - Sender's email
     - `subject` - Email subject
     - `message` - Email message content
     - `to_name` - Your name
     - `reply_to` - Reply-to email address
   - Open `src/components/Contact.tsx` and update the following variables:
     - `serviceId` - Your EmailJS service ID
     - `templateId` - Your EmailJS template ID
     - `publicKey` - Your EmailJS public key

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information

Edit your personal information in the component files to customize the portfolio:

- Update name, role, and description in `Hero.tsx`
- Change about information in `About.tsx`
- Add your projects in `Projects.tsx`
- Update skills in `Skills.tsx`
- Modify contact information in `Contact.tsx`

### Styling

The design uses Tailwind CSS, making it easy to customize:

- Change the primary color scheme by updating the indigo colors
- Modify spacing, typography, and other design elements directly in the component files
- Customize animations and transitions

### Images

Replace the placeholder images in the `public` directory:

- `public/avatar.jpg` - Your profile picture
- `public/projects/` - Images for your projects
- `public/your-resume.pdf` - Your downloadable resume

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

## 🌐 Deployment

This project is ready to be deployed on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fpersonal-website)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Vercel for the deployment platform
- EmailJS for the contact form functionality
