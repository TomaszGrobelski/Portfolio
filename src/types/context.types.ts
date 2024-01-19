export interface NavigationContextType {
  activeItem: string;
  handleItemClick: (section: string) => void;
}
export interface NavigationProviderProps {
  children: React.ReactNode;
}
