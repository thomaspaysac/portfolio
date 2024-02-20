import * as React from 'react';

interface EmailTemplateProps {
  nom: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  nom, message
}) => (
  <div>
    <div>Message de : {nom}</div>
    <div>{message}</div>
  </div>
);