import React from 'react';
import styled from 'styled-components';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Container = styled.div`
  padding: 2rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: 'Inter', sans-serif;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #111;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.5rem;
`;

const CircleCard = styled.div`
  background: #fafafa;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const CircleWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 0.5rem auto;
`;

const ScoreLabel = styled.div`
  font-size: 0.85rem;
  color: #333;
  font-weight: 500;
`;

const BottomSection = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 2rem;
  align-items: center;
`;

const OverallCard = styled.div`
  text-align: center;
  color: black;
`;

const Stars = styled.div`
  color: #ffc107;
  font-size: 1.2rem;
  margin: 0.25rem 0;
`;

const RatingsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: black;
`;

const RatingBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  background: #e0e0e0;
  border-radius: 4px;
  flex: 1;
  height: 8px;
  margin: 0 0.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: ${props => props.percent || 0}%;
    background: #00577f;
    border-radius: 4px;
    left: 0;
    top: 0;
  }
`;

const AddReviewButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: 2px solid #00577f;
  color: #00577f;
  background: white;
  border-radius: 24px;
  font-weight: 500;
  cursor: pointer;
  align-self: center;
  justify-self: end;

  &:hover {
    background: #f0f8ff;
  }
`;

const ratingsData = [
  { label: 'Value For Money', score: 4.6 },
  { label: 'Ease of Use', score: 4.7 },
  { label: 'Features', score: 4.2 },
  { label: 'Customer Support', score: 4.0 },
  { label: 'Trial User Conversion Rate', score: 4.3 },
];

const scoreCards = [
  { label: 'Feature Score', percent: 74 },
  { label: 'Social Impact Score', percent: 57.5 },
  { label: 'Brand Score', percent: 76.75 },
  { label: 'Innovation Score', percent: 72 },
  { label: 'NPS', percent: 85 },
  { label: 'Highly Recommended', percent: 85, color: '#28a745' },
];

const ScogoRating = () => {
  return (
    <Container>
      <Heading>Software Performance & Ratings</Heading>

      <Grid>
        {scoreCards.map((item, idx) => (
          <CircleCard key={idx}>
            <CircleWrapper>
              <CircularProgressbar
                value={item.percent}
                // Modified the text prop to include '%' for NPS as well
                text={`${item.percent}${item.label === 'Highly Recommended' || item.label === 'NPS' ? '%' : ''}`}
                strokeWidth={8}
                styles={buildStyles({
                  pathColor: item.color || '#00577f',
                  textColor: '#111',
                  trailColor: '#e0e0e0',
                  textSize: '24px'
                })}
              />
            </CircleWrapper>
            <ScoreLabel>{item.label}</ScoreLabel>
          </CircleCard>
        ))}
      </Grid>

      <BottomSection>
        <OverallCard>
          <div style={{ fontSize: '0.95rem' }}>Overall Score</div>
          <h2 style={{ margin: '0.25rem 0' }}>
            4.6 <span style={{ fontSize: '1rem' }}>/5</span>
          </h2>
          <Stars>★★★★☆</Stars>
          <div style={{ fontSize: '0.85rem', color: '#444' }}>
            (Based on 150+ Reviews)
          </div>
        </OverallCard>

        <RatingsList>
          {ratingsData.map((item, idx) => (
            <RatingBar key={idx}>
              <span>{item.label}</span>
              <ProgressBar percent={(item.score / 5) * 100} />
              <span>{item.score.toFixed(1)}/5</span>
            </RatingBar>
          ))}
        </RatingsList>

        <AddReviewButton>Add Review</AddReviewButton>
      </BottomSection>
    </Container>
  );
};

export default ScogoRating;