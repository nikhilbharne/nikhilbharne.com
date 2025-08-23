import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Oct 2022 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">DevOps Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Rotary International Pune, IN</h4>
            <p>
            DevOps & Infrastructure Deployment, Containerization & Orchestration, CI/CD Automation, DevSecOps Practices, Performance Optimization & Cost Management, Monitoring, Logging & Observability,
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jul 2019 - Oct 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">CitiusTech Navi Mumbai, IN</h4>
            <p>
            DevOps & Infrastructure Deployment, Containerization & Orchestration, CI/CD Automation, DevSecOps Practices, Performance Optimization & Cost Management, Monitoring, Logging & Observability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2019 - Jul 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Associate Consultant</h3>
            <h4 className="vertical-timeline-element-subtitle">Capgemini Mumbai, IN</h4>
            <p>
            DevOps & Infrastructure Deployment, Containerization & Orchestration, CI/CD Automation, DevSecOps Practices, Performance Optimization & Cost Management, Monitoring, Logging & Observability.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;