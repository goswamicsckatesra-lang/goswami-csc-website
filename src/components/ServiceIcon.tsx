import React from 'react';
import {
  CreditCard,
  FileEdit,
  FileSpreadsheet,
  ShieldCheck,
  Home,
  Baby,
  FileText,
  Award,
  ShoppingBag,
  Users,
  Vote,
  FileCheck2,
  Briefcase,
  Download,
  FileBarChart,
  Plane,
  Wheat,
  HeartPulse,
  HardHat,
  Wrench,
  Receipt,
  Wallet,
  Printer,
  Palette,
  ScanLine,
  Camera,
  Layers,
  Zap,
  CheckCircle2,
  Smile,
  LucideProps
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
  className?: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, className = 'w-6 h-6', ...props }) => {
  switch (name) {
    case 'CreditCard':
      return <CreditCard className={className} {...props} />;
    case 'FileEdit':
      return <FileEdit className={className} {...props} />;
    case 'FileSpreadsheet':
      return <FileSpreadsheet className={className} {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} {...props} />;
    case 'Home':
      return <Home className={className} {...props} />;
    case 'Baby':
      return <Baby className={className} {...props} />;
    case 'FileText':
      return <FileText className={className} {...props} />;
    case 'Award':
      return <Award className={className} {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag className={className} {...props} />;
    case 'Users':
      return <Users className={className} {...props} />;
    case 'Vote':
      return <Vote className={className} {...props} />;
    case 'FileCheck2':
      return <FileCheck2 className={className} {...props} />;
    case 'Briefcase':
      return <Briefcase className={className} {...props} />;
    case 'Download':
      return <Download className={className} {...props} />;
    case 'FileBarChart':
      return <FileBarChart className={className} {...props} />;
    case 'Plane':
      return <Plane className={className} {...props} />;
    case 'Wheat':
      return <Wheat className={className} {...props} />;
    case 'HeartPulse':
      return <HeartPulse className={className} {...props} />;
    case 'HardHat':
      return <HardHat className={className} {...props} />;
    case 'Wrench':
      return <Wrench className={className} {...props} />;
    case 'Receipt':
      return <Receipt className={className} {...props} />;
    case 'Wallet':
      return <Wallet className={className} {...props} />;
    case 'Printer':
      return <Printer className={className} {...props} />;
    case 'Palette':
      return <Palette className={className} {...props} />;
    case 'ScanLine':
      return <ScanLine className={className} {...props} />;
    case 'Camera':
      return <Camera className={className} {...props} />;
    case 'Layers':
      return <Layers className={className} {...props} />;
    case 'Zap':
      return <Zap className={className} {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} {...props} />;
    case 'Smile':
      return <Smile className={className} {...props} />;
    default:
      return <FileText className={className} {...props} />;
  }
};
