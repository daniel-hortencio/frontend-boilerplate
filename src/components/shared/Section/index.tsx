interface ISection {
  children: React.ReactNode;
  layout?: 'stretch' | 'compact';
}

const Section = ({ children, layout }: ISection) => {
  return (
    <section
      className={`border w-full p-4 ${
        layout === 'compact' && 'max-w-screen-xl mx-auto'
      }`}
    >
      <div
        className={`border w-full  px-4 mx-auto ${
          layout !== 'stretch' && 'max-w-screen-xl'
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
