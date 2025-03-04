import { styled } from '../stitches.config';
import { motion } from 'framer-motion';
import {
  DiJavascript, DiReact, DiNodejs, DiHtml5, DiCss3, DiGit
} from 'react-icons/di';
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiFigma, SiVisualstudiocode, SiPostman } from 'react-icons/si';

const tools = [
  { name: 'React', icon: DiReact, color: '#61DAFB' },
  { name: 'JavaScript', icon: DiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'Node.js', icon: DiNodejs, color: '#339933' },
  { name: 'CSS3', icon: DiCss3, color: '#1572B6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'VS Code', icon: SiVisualstudiocode, color: '#007ACC' },
  { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
  { name: 'Git', icon: DiGit, color: '#F05032' },
];

export default function Toolbox() {
  return (
    <ToolboxContainer>
      <h2>My Toolbox</h2>
      <ToolGrid>
        {tools.map((tool, index) => {
          if (!tool.icon) return null;
          const IconComponent = tool.icon;
          return (
            <Tool key={index} whileHover={{ scale: 1.1 }}>
              <IconWrapper style={{ color: tool.color }}>
                <IconComponent size={40} />
              </IconWrapper>
              <ToolName>{tool.name}</ToolName>
            </Tool>
          );
        })}
      </ToolGrid>
    </ToolboxContainer>
  );
}

// Styled Components
const ToolboxContainer = styled('div', {
  marginTop: '2rem',
  marginBottom: '3rem',
});

const ToolGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
  gap: '2rem',
  marginTop: '2rem',
});

const Tool = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  borderRadius: '12px',
  background: '$hover',
  transition: 'background 0.3s ease',
  '&:hover': {
    background: '$background',
  },
});

const IconWrapper = styled('div', {
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
  transition: 'transform 0.3s ease',
  '& svg': {
    transition: 'transform 0.3s ease',
  },
  '&:hover svg': {
    transform: 'rotate(360deg)',
  },
});

const ToolName = styled('span', {
  fontSize: '0.9rem',
  color: '$secondary',
  textAlign: 'center',
});
