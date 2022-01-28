import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import './infoBox.css';

export default function InfoBox({title, cases, active, isGreen, total, onClick}) {
  return (
      <Card onClick={onClick} className={`info-box ${active && "info-box--selected"}`}>
          <CardContent>
              <Typography className='infoBox-title' color='textSecondary'>{title}</Typography>
              <h2 className={`infoBox-cases ${isGreen && "infoBox-cases--green"}`}>{cases}</h2>

              <Typography className='infoBox-total' color='textSecondary'>{total} Total</Typography>
          </CardContent>
      </Card>
  );
}
