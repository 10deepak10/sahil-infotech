import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { portfolioItems } from '../../db/portfolioData';
import { Helmet } from 'react-helmet-async';
import './PortfolioDetail.scss';

export default function PortfolioDetail() {
    const { slug } = useParams();
    const project = portfolioItems.find(item => item.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!project) {
        return (
            <div className="container text-center" style={{ padding: '100px 0' }}>
                <h3 className="heading3">Project Not Found</h3>
                <Link to="/portfolio" className="text f-18" style={{ color: '#104169' }}>Back to Portfolio</Link>
            </div>
        );
    }

    // Use a placeholder if image is missing, or a style-friendly gradient
    const bannerImage = project.img || "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301&ixlib=rb-4.0.3";

    return (
        <div className="portfolio-detail">
            <Helmet>
                 <title>{project.title} - Case Study | Sahil Infotech</title>
                 <meta name="description" content={project.description} />
                 
                 {/* Open Graph / Facebook */}
                 <meta property="og:type" content="website" />
                 <meta property="og:url" content={window.location.href} />
                 <meta property="og:title" content={`${project.title} - Case Study | Sahil Infotech`} />
                 <meta property="og:description" content={project.description} />
                  <meta property="og:image" content={bannerImage.startsWith('http') ? `${bannerImage}?v=1` : `${window.location.origin}${bannerImage}?v=1`} />
 
                  {/* Twitter */}
                  <meta property="twitter:card" content="summary_large_image" />
                  <meta property="twitter:url" content={window.location.href} />
                  <meta property="twitter:title" content={`${project.title} - Case Study | Sahil Infotech`} />
                  <meta property="twitter:description" content={project.description} />
                  <meta property="twitter:image" content={bannerImage.startsWith('http') ? `${bannerImage}?v=1` : `${window.location.origin}${bannerImage}?v=1`} />
            </Helmet>

            {/* Hero Section */}
            <div className="hero-section">
                <img 
                    src={bannerImage} 
                    alt={project.title} 
                    className="hero-bg" 
                    // @ts-ignore
                    fetchpriority="high"
                />
                <div className="hero-overlay">
                    <div className="container">
                        <div className="hero-content">
                            <Link to="/portfolio" className="back-link">
                                &larr; Back to Portfolio
                            </Link>
                            <h1>{project.title}</h1>
                            <ul className="hero-meta">
                                <li>{project.client}</li>
                                <li>{project.duration}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container content-wrapper align-start">
                {/* Main Info - Left Column */}
                <div className="main-info">
                    <section>
                         <h3>Project Overview</h3>
                         <p>{project.description}</p>
                    </section>
                    
                    <section>
                        <h3>Key Features</h3>
                        <ul className="feature-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3>Business Impact</h3>
                        <ul className="impact-list">
                            {project.impact.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar - Right Column */}
                <div className="sidebar">
                    <div className="info-group">
                        <div className="label-with-icon">
                            <img src="/media/icons/user.svg" alt="Client" width="20" height="20" />
                            <h4>Client</h4>
                        </div>
                        <p>{project.client}</p>
                    </div>

                    <div className="info-group">
                        <div className="label-with-icon">
                            <img src="/media/icons/clock.svg" alt="Timeline" width="20" height="20" />
                            <h4>Timeline</h4>
                        </div>
                        <p>{project.duration}</p>
                    </div>

                    <div className="info-group">
                        <div className="label-with-icon">
                            <img src="/media/icons/coding.svg" alt="Technologies" width="20" height="20" />
                            <h4>Technologies</h4>
                        </div>
                        <div className="tech-stack">
                            {project.techStack.map((tech, idx) => (
                                <span key={idx}>{tech}</span>
                            ))}
                        </div>
                    </div>

                    {project.link && project.link !== "#" && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="live-btn">
                            Visit Live Site 
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
