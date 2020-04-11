import React from 'react';

import {
  InfoTableContainer,
  InfoTable,
  InfoTableHead,
  InfoTableDataCell,
  InfoTableRow,
  InfoTableHeader,
  InfoTableBody,
} from './infoTable.style';

export default () => (
  <InfoTableContainer>
    <InfoTable>
      <InfoTableHead>
        <InfoTableRow>
          <InfoTableHeader>name</InfoTableHeader>
          <InfoTableHeader>info</InfoTableHeader>
          <InfoTableHeader>death-reason</InfoTableHeader>
          <InfoTableHeader>killer</InfoTableHeader>
          <InfoTableHeader>murder weapon</InfoTableHeader>
        </InfoTableRow>
      </InfoTableHead>
      <InfoTableBody>
        {[1, 2, 3, 4, 5].map((el, idx) => (
          <InfoTableRow key={idx}>
            <InfoTableDataCell>{'Wendigo'}</InfoTableDataCell>
            <InfoTableDataCell>
              {
                'A creature that was once human A creature that was once human A creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature that was once humanA creature '
              }
            </InfoTableDataCell>
            <InfoTableDataCell>{'A creature that was once'}</InfoTableDataCell>
            <InfoTableDataCell>{el}</InfoTableDataCell>
            <InfoTableDataCell>{el}</InfoTableDataCell>
          </InfoTableRow>
        ))}
      </InfoTableBody>
    </InfoTable>
  </InfoTableContainer>
);
