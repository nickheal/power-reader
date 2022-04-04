import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  paragraph: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 1.4,
    maxWidth: 728
  }
});

export default function Paragraph(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const classes = useStyles();

  return (
    <p {...props} className={classes.paragraph} />
  );
}
