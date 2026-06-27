import * as Icons from 'lucide-react';

interface IconRendererProps {
  name: string;
  className?: string;
  size?: number;
}

export default function IconRenderer({ name, className = '', size = 20 }: IconRendererProps) {
  // Safe lookup for Lucide icon
  const IconComponent = (Icons as any)[name];
  
  if (!IconComponent) {
    // Return a default icon (e.g., HelpCircle) if not found
    return <Icons.HelpCircle className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
}
