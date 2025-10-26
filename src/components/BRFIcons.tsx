interface IconProps {
  className?: string;
  size?: number;
}

export function BudgetIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="14" r="2" fill="currentColor"/>
    </svg>
  );
}

export function MaintenanceIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
    </svg>
  );
}

export function LegalIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="17" x2="16" y2="17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function MeetingIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <circle cx="19" cy="11" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M23 21v-1a3 3 0 0 0-3-3h-1" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function PlanningIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
      <rect x="7" y="14" width="3" height="3" fill="currentColor"/>
      <rect x="14" y="14" width="3" height="3" fill="currentColor"/>
    </svg>
  );
}

export function ReportIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" stroke="currentColor" strokeWidth="2" fill="none"/>
      <polyline points="13,2 13,9 20,9" stroke="currentColor" strokeWidth="2" fill="none"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="17" x2="12" y2="17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

export function BuildingIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
      <path d="M9 22v-4h6v4" stroke="currentColor" strokeWidth="2"/>
      <rect x="8" y="6" width="2" height="2" fill="currentColor"/>
      <rect x="14" y="6" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="14" y="10" width="2" height="2" fill="currentColor"/>
      <rect x="8" y="14" width="2" height="2" fill="currentColor"/>
      <rect x="14" y="14" width="2" height="2" fill="currentColor"/>
    </svg>
  );
}

export function ChecklistIcon({ className = "", size = 24 }: IconProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M9 11l3 3L22 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
