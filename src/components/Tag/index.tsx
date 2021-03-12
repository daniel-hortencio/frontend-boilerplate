export interface TagProps {
  icon?: React.ReactNode;
  text: string;
  color?: string;
  backgroundColor?: string;
  className?: string;
}
const Tag = ({ icon, text, backgroundColor, color, className }: TagProps) => {
  function getDivClassName(): string {
    let divClassName = `text-center px-3 py-2 rounded w-min`;

    if (icon) {
      divClassName += ` flex flex-row justify-between content-center`;
    }

    return `${divClassName} ${className || ''}`;
  }

  function getComponent() {
    if (icon && text) {
      return (
        <>
          <div className="flex m-auto place-content-center mr-2">{icon}</div>
          {text}
        </>
      );
    }

    if (text) {
      return <span>{text}</span>;
    }

    if (icon) {
      return <>{icon}</>;
    }

    return '';
  }
  return (
    <div style={{ backgroundColor, color }} className={getDivClassName()}>
      {getComponent()}
    </div>
  );
};

export default Tag;
