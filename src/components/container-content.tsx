interface ContainerRootProps {
  children: React.ReactNode;
}

export function ContainerRoot({ children, ...props }: ContainerRootProps) {
  return (
    <div {...props} className="flex flex-col border border-gray-500 rounded-md">
      {children}
    </div>
  );
}

interface HeaderContainerProps {
  children: React.ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <header className="w-full py-4 px-4 flex items-center bg-gray-600 rounded-tr-md rounded-tl-md gap-2">
      {children}
    </header>
  );
}

interface ContentProps {
  children: React.ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="py-3 px-4">{children}</div>;
}
