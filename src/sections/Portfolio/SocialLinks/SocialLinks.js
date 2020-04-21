import React from 'react';
import { FaTwitter, FaGithub, FaCodepen } from 'react-icons/fa';

function SocialLinks() {
  return (
    <section>
      <a href="https://www.twitter.com/inadeqt_futurs" aria-label="twitter">
        <FaTwitter size={20} style={{ marginRight: '0.75rem' }} />
      </a>
      <a href="https://github.com/inadeqtfuturs" aria-label="github">
        <FaGithub size={20} style={{ marginRight: '0.75rem' }} />
      </a>
      <a href="https://codepen.io/inadequatefutures/" aria-label="codepen">
        <FaCodepen size={20} style={{ marginRight: '0.75rem' }} />
      </a>
    </section>
  );
}

export default SocialLinks;
