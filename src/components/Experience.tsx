import { Briefcase } from 'lucide-react';
import React from 'react';

/**
 * Experience entry interface
 * Defines the structure for work history/experience items
 * 
 * @property id - Unique identifier for the experience entry
 * @property role - Job title or position held
 * @property company - Organization or company name
 * @property period - Time period of employment (e.g., "2020-2022")
 * @property description - Brief overview of role responsibilities
 * @property achievements - Array of key accomplishments in this role
 */
interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

/**
 * Sample experience data
 * Replace with your actual work history before deployment
 * Format each entry with:
 * - Clear job title/role
 * - Company name
 * - Employment period
 * - Brief role description
 * - 2-4 key achievements or responsibilities
 */
const experiences: Experience[] = [
  {
    id: "experience-1-id",
    role: "JOB TITLE",
    company: "COMPANY NAME",
    period: "PERIOD",
    description: "Maecenas gravida nisi in odio tincidunt, euismod fringilla massa blandit.",
    achievements: [
      "Suspendisse vitae sapien arcu. Sed efficitur, odio ut varius pulvinar, mauris ante ornare lacus, aliquam vulputate erat lacus eu eros",
      "Mauris purus diam, venenatis in quam nec, tempor ultrices augue. In tincidunt accumsan ligula, in viverra nunc sagittis vel",
      "Etiam ipsum quam, tempus in elit at, posuere consequat sem. Integer vel tristique risus"
    ]
  },
  {
    id: "experience-2-id",
    role: "JOB TITLE",
    company: "COMPANY NAME",
    period: "PERIOD",
    description: "Curabitur nec auctor ante, in imperdiet neque. Phasellus tristique enim justo.",
    achievements: [
      "Etiam ipsum quam, tempus in elit at, posuere consequat sem. Integer vel tristique risus",
      "Suspendisse vitae sapien arcu. Sed efficitur, odio ut varius pulvinar, mauris ante ornare lacus, aliquam vulputate erat lacus eu eros",
      "Mauris purus diam, venenatis in quam nec, tempor ultrices augue. In tincidunt accumsan ligula, in viverra nunc sagittis vel"
    ]
  },
  {
    id: "experience-3-id",
    role: "JOB TITLE",
    company: "COMPANY NAME",
    period: "PERIOD",
    description: "Nam aliquet diam quis neque malesuada vulputate. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam in vulputate ligula.",
    achievements: [
      "Suspendisse vitae sapien arcu. Sed efficitur, odio ut varius pulvinar, mauris ante ornare lacus, aliquam vulputate erat lacus eu eros",
      "Mauris purus diam, venenatis in quam nec, tempor ultrices augue. In tincidunt accumsan ligula, in viverra nunc sagittis vel"
    ]
  }
];

/**
 * Experience component - Professional work history section
 * 
 * Features:
 * - Timeline-style display of work experience
 * - Detailed view of roles, companies, and time periods
 * - List of key achievements for each position
 * - Staggered animations for visual appeal
 * - Responsive design for all screen sizes
 */
export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header with icon */}
        <div className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 flex items-center justify-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
            My professional journey and key achievements
          </p>
        </div>

        {/* Experience cards with staggered animation */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Job header with role, company and period */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-4">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                </div>
                <span className="text-blue-600 dark:text-blue-400 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              
              {/* Job description */}
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              
              {/* Achievements list */}
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 