import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaStar, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import ScogoFeature from './ScogoFeature';
import ScogoRating from './ScogoRating';
import ScogoSpecification from './ScogoSpecification';
import ScogoSoftwareReviews from './ScogoSoftwareReviews';
import ScogoGetSoftwareCompanyDemo from './ScogoGetSoftwareCompanyDemo';
import ScogoDropdwon from './ScogoDropdwon';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';
import image9 from '../assets/image9.png';
import image10 from '../assets/image10.png';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// Styled Components
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 25px;
`;

const PageContainer = styled.div`
  background-color: #fff;
  padding: 30px;
  font-family: 'Outfit', sans-serif;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;
  margin-bottom: 30px;
  background-color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  width: 300px; /* Fixed width for the image section */
  margin-right: 30px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

const MainImageSlider = styled.div`
  width: 300px; /* Explicit width */
  height: 250px; /* Explicit height */
  background-color: #000; /* Background to show "letterboxing" if object-fit: contain is used */
  border-radius: 8px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Crucial to clip overflowing parts if any */
  position: relative;

  img {
    max-width: 100%; /* Ensure image doesn't exceed slider width */
    max-height: 100%; /* Ensure image doesn't exceed slider height */
    object-fit: contain; /* Scales the image down to fit within the container, preserving aspect ratio */
    /* If you want the image to fill the space and be cropped, you can use object-fit: cover; */
  }
`;

const SliderArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2); /* Added subtle shadow for depth */


  &:hover {
    background: rgba(250, 250, 250, 0.95);
    color: #026283;
  }
`;

const LeftArrow = styled(SliderArrow)`
  left: 10px; /* Adjusted to be inside the slider, with some padding */
`;

const RightArrow = styled(SliderArrow)`
  right: 10px; /* Adjusted to be inside the slider, with some padding */
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9); /* Slightly more opaque */
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%; /* Make it perfectly round */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #333;
  cursor: pointer;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3); /* More pronounced shadow for play button */

  &:hover {
    background: rgba(255, 255, 255, 1); /* Fully opaque on hover */
    color: #026283;
  }
`;

const ImageThumbnails = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 5px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }
`;

const Thumbnail = styled.div`
  width: 60px;
  height: 45px;
  background-color: ${props => props.active ? '#e0e0e0' : '#f0f0f0'};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #777;
  overflow: hidden;
  border: ${props => props.active ? '2px solid #026283' : '1px solid #ddd'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 'cover' is often good for thumbnails to fill the space */
  }
`;

const InfoSection = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;


const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TitleSection = styled.div`
  flex: 1;
`;



const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 20px;
  color: #333;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;


const Company = styled.p`
  margin-bottom: 10px;
  font-size: 14px;
  color: #777;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  color: #ffc107;
  font-size: 14px;
  font-family: 'Outfit', sans-serif;
`;

const StarIcon = styled(FaStar)`
  margin-right: 5px;
`;

const ReviewCount = styled.span`
  color: #777;
  margin-left: 5px;
`;

const WriteReview = styled.a`
  color: #026283;
  font-size: 14px;
  text-decoration: none;
  display: inline-block;
  padding: 5px 0;
  font-family: 'Outfit', sans-serif;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const PricingSection = styled.div`
  margin: 15px 0;
`;

const PricingLabel = styled.div`
  font-size: 14px;
  color: #777;
  margin-bottom: 3px;
`;

const Pricing = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 25px;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CallToAction = styled.button`
  background-color: #026283;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  width: fit-content;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Outfit', sans-serif;
  margin: 0 auto; /* Center the button horizontally */
  display: block;

  &:hover {
    background-color: #01516d;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 8px 18px;
  }
`;


const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  gap: 10px;

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

const Tab = styled.button`
  border: none;
  background: none;
  padding: 12px 18px;
  cursor: pointer;
  font-size: 15px;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#026283' : '#555'};
  border-bottom: 2px solid ${props => props.active ? '#026283' : 'transparent'};
  transition: all 0.3s ease;
  white-space: nowrap;
  font-family: 'Outfit', sans-serif;
  flex-shrink: 0;

  &:hover {
    color: #026283;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 14px;
  }
`;

const ContentSection = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

// Overview Content Component
const OverviewSection = styled.div`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const SectionTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 18px;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const SectionParagraph = styled.p`
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin-bottom: 10px;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CompanyDetailsContainer = styled.div`
  padding: 15px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;

  @media (max-width: 480px) {
    padding: 12px;
  }
`;

const CompanyDetailsTitle = styled(SectionTitle)`
  color: #333;
`;

const DetailsTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
const DetailRow = styled.tr`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const DetailLabel = styled.td`
  font-weight: 600;
  color: #555;
  padding-right: 15px;
  padding-bottom: 10px;
  width: 120px;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    width: 100px;
    font-size: 13px;
  }
`;

const DetailValue = styled.td`
  color: #555;
  padding-bottom: 10px;
  font-family: 'Outfit', sans-serif;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;



// Dynamic Overview Content Component
const OverviewContent = ({ data }) => {
  return (
    <div>
      <OverviewSection>
        <SectionTitle>Scogo.ai</SectionTitle>
        <SectionParagraph>
          {data.softwareOverview}
        </SectionParagraph>
      </OverviewSection>

      <CompanyDetailsContainer>
        <CompanyDetailsTitle>Company Details</CompanyDetailsTitle>
        <DetailsTable>
          <tbody>
            <DetailRow>
              <DetailLabel>Brand Name</DetailLabel>
              <DetailValue>{data.companyDetails.brandName}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Information</DetailLabel>
              <DetailValue>{data.companyDetails.information}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Founded</DetailLabel>
              <DetailValue>{data.companyDetails.founded}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Founder</DetailLabel>
              <DetailValue>{data.companyDetails.founder}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Company Size</DetailLabel>
              <DetailValue>{data.companyDetails.companySize}</DetailValue>
            </DetailRow>
            <DetailRow>
              <DetailLabel>Other Products</DetailLabel>
              <DetailValue>{data.companyDetails.otherProducts}</DetailValue>
            </DetailRow>
          </tbody>
        </DetailsTable>
      </CompanyDetailsContainer>
    </div>
  );
};

// Dynamic Features Content
const FeaturesContent = () => (
  <div>Features content will be here.</div>
);

// Dynamic Reviews Content
const ReviewsContent = () => (
  <div>Reviews content will be here.</div>
);

// Dynamic Pricing Content
const PricingContent = () => (
  <div>Pricing & Plans content will be here.</div>
);

// Dynamic Specifications Content
const SpecificationsContent = () => (
  <div>Specifications content will be here.</div>
);

// Dynamic Compare Content
const CompareContent = () => (
  <div>Compare content will be here.</div>
);

// Dynamic FAQ Content
const FAQContent = () => (
  <div>Frequently Asked Questions will be here.</div>
);

// Mocked data structure for dynamic content
const mockProductData = {
    id: 1,
    title: "Scogo.ai",
    company: "AI Customer Support Platform",
    rating: 4.3,
    reviewCount: 26,
    pricing: "₹ 9999",
    description: "An AI-powered automation platform that streamlines workflows, enhances decision-making, and reduces operational errors for businesses.",
    images: [
      { id: 1, url: image6, alt: "image6",thumbnail: image6  },
      { id: 2, url: image7, alt: "image7",thumbnail: image7  },
      { id: 3, url: image8, alt: "image8",thumbnail: image8  },
      { id: 4, url: image9, alt: "image9",thumbnail: image9  },
      { id: 5, url: image10, alt: "image10",thumbnail: image10  },
    ],
    overview: {
      softwareOverview: "Scogo.ai is on a mission to build and deliver AI solutions as easy and cost-effective as UPI, empowering businesses to win customers and reach new markets.",
      companyDetails: {
        brandName: "Scogo.ai",
        information: "all-in-one solution for remote access, collaboration and desktop sharing over the internet.",
        founded: "August 2024",
        founder: "Nitin Dhawal",
        companySize: "50-200 employees",
        otherProducts: "QuickSmart Insights, QuickSmart Analytics"
      }
    }
  };

// Main Component with Dynamic Content
const ScogoReview = ({ product = mockProductData }) => {
  const [activeTab, setActiveTab] = useState('Reviews');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sectionsVisible, setSectionsVisible] = useState({
    mainContent: false,
    scogoFeature: false,
    scogoRating: false,
    scogospecifications: false,
    scogosoftwareReviews: false,
    scogosoftwareDemo: false,
    scogodropdown: false
  });

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setSectionsVisible(prev => ({...prev, mainContent: true}));
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll loading effect for additional sections
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show components sequentially based on scroll position
      if (scrollPosition > 0.2 * documentHeight && !sectionsVisible.scogoFeature) {
        setSectionsVisible(prev => ({...prev, scogoFeature: true}));
      }

      if (scrollPosition > 0.3 * documentHeight && !sectionsVisible.scogoRating) {
        setSectionsVisible(prev => ({...prev, scogoRating: true}));
      }

      if (scrollPosition > 0.4 * documentHeight && !sectionsVisible.scogospecifications) {
        setSectionsVisible(prev => ({...prev, scogospecifications: true}));
      }

      if (scrollPosition > 0.5 * documentHeight && !sectionsVisible.scogosoftwareReviews) {
        setSectionsVisible(prev => ({...prev, scogosoftwareReviews: true}));
      }

      if (scrollPosition > 0.6 * documentHeight && !sectionsVisible.scogosoftwareDemo) {
        setSectionsVisible(prev => ({...prev, scogosoftwareDemo: true}));
      }

      if (scrollPosition > 0.7 * documentHeight && !sectionsVisible.scogodropdown) {
        setSectionsVisible(prev => ({...prev, scogodropdown: true}));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionsVisible]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : product.images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < product.images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  // Generate stars for rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<StarIcon key={i} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<StarIcon key={i} style={{ opacity: 0.5 }} />);
      } else {
        stars.push(<StarIcon key={i} style={{ opacity: 0.2 }} />);
      }
    }

    return stars;
  };

  // Render tab content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewContent data={product.overview} />;
      case 'Features':
        return <FeaturesContent />;
      case 'Reviews':
        return <ReviewsContent />;
      case 'Pricing & Plans':
        return <PricingContent />;
      case 'Specifications':
        return <SpecificationsContent />;
      case 'Compare':
        return <CompareContent />;
      case "FAQ's":
        return <FAQContent />;
      default:
        return <OverviewContent data={product.overview} />;
    }
  };

  return (
    <Container>

          {sectionsVisible.mainContent && (
            <PageContainer>
              <ProductCard>
                <ImageSection>
                  <MainImageSlider>
                    <LeftArrow onClick={goToPreviousImage}>
                      <FaChevronLeft />
                    </LeftArrow>
                    <img
                      src={product.images[currentImageIndex].url}
                      alt={product.images[currentImageIndex].alt}
                    />
                    {/* <PlayButton>
                      <FaPlay />
                    </PlayButton> */}
                    <RightArrow onClick={goToNextImage}>
                      <FaChevronRight />
                    </RightArrow>
                  </MainImageSlider>
                  <ImageThumbnails>
                    {product.images.map((img, index) => (
                      <Thumbnail
                        key={index}
                        active={currentImageIndex === index}
                        onClick={() => handleThumbnailClick(index)}
                      >
                        <img src={img.url} alt={`Thumbnail ${index + 1}`}/>
                      </Thumbnail>
                    ))}
                  </ImageThumbnails>
                </ImageSection>
                <InfoSection>
                  <HeaderSection>
                    <TitleSection>
                      <Title>{product.title}</Title>
                      <Company>By {product.company}</Company>
                      <Rating>
                        {renderStars(product.rating)} {product.rating} <ReviewCount>({product.reviewCount} reviews)</ReviewCount>
                      </Rating>
                      <WriteReview href="#">Write a Review</WriteReview>
                    </TitleSection>
                  </HeaderSection>

                  <PricingSection>
                    <PricingLabel>Starting At</PricingLabel>
                    <Pricing>{product.pricing}</Pricing>
                  </PricingSection>

                  <Description>{product.description}</Description>
                  <CallToAction>Get Free Demo</CallToAction>
                </InfoSection>
              </ProductCard>

              <TabsContainer>
                <Tab
                  active={activeTab === 'Overview'}
                  onClick={() => handleTabClick('Overview')}
                >
                  Overview
                </Tab>
                <Tab
                  active={activeTab === 'Features'}
                  onClick={() => handleTabClick('Features')}
                >
                  Features
                </Tab>
                <Tab
                  active={activeTab === 'Reviews'}
                  onClick={() => handleTabClick('Reviews')}
                >
                  Reviews
                </Tab>
                <Tab
                  active={activeTab === 'Pricing & Plans'}
                  onClick={() => handleTabClick('Pricing & Plans')}
                >
                  Pricing & Plans
                </Tab>
                <Tab
                  active={activeTab === 'Specifications'}
                  onClick={() => handleTabClick('Specifications')}
                >
                  Specifications
                </Tab>
                <Tab
                  active={activeTab === 'Compare'}
                  onClick={() => handleTabClick('Compare')}
                >
                  Compare
                </Tab>
                <Tab
                  active={activeTab === "FAQ's"}
                  onClick={() => handleTabClick("FAQ's")}
                >
                  FAQ's
                </Tab>
              </TabsContainer>

              <ContentSection>
                {renderTabContent()}
              </ContentSection>
            </PageContainer>
          )}

          {sectionsVisible.scogoFeature && <ScogoFeature />}
          {sectionsVisible.scogoRating && <ScogoRating />}
          {sectionsVisible.scogospecifications && <ScogoSpecification />}
          {sectionsVisible.scogosoftwareReviews && <ScogoSoftwareReviews />}
          {sectionsVisible.scogosoftwareDemo && <ScogoGetSoftwareCompanyDemo />}
          {sectionsVisible.scogodropdown && <ScogoDropdwon />}

    </Container>
  );
};

export default ScogoReview;