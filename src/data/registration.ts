export const CONGRESS_REGISTRATION_URL =
  'https://ieee.surveysparrow.com/s/Jordan-2076-Congress--Application/tt-2Bzui';

export const HACKATHON_REGISTRATION_URL =
  'https://ieee.surveysparrow.com/s/jordan-2076-hackathon--registration-form---uj-petra/tt-fF3VV?utm_source=ig&utm_medium=social&utm_content=link_in_bio';

// Primary registration is now Congress Day application link
export const REGISTRATION_URL = CONGRESS_REGISTRATION_URL;

export const openCongressRegistration = () => {
  window.open(CONGRESS_REGISTRATION_URL, '_blank', 'noopener,noreferrer');
};

export const openRegistration = () => {
  window.open(REGISTRATION_URL, '_blank', 'noopener,noreferrer');
};
