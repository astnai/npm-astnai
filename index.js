#!/usr/bin/env node

const args = process.argv.slice(2);
const socialMedia = {
  web: "https://agustinarias.com",
  github: "https://github.com/astnai",
  twitter: "https://twitter.com/astnai",
  linkedin: "https://linkedin.com/in/astnai",
  email: "mailto:aa@agustinarias.com",
};

const showInfo = () => {
  console.log(`
    Name: Agustín Arias
    Email: aa@agustinarias.com
    ---
    Web: ${socialMedia.web}
    GitHub: ${socialMedia.github}
    Twitter: ${socialMedia.twitter}
    Linkedin: ${socialMedia.linkedin}
  `);
};

const openLink = async (url) => {
  const open = await import("open");
  open.default(url);
};

const sendEmail = () => {
  openLink(socialMedia.email);
};

if (args.length === 0) {
  showInfo();
} else {
  const key = args[0].toLowerCase();
  if (key === "email") {
    sendEmail();
  } else if (socialMedia[key]) {
    openLink(socialMedia[key]);
    console.log(`opening ${key}: ${socialMedia[key]}`);
  } else {
    showInfo();
  }
}
