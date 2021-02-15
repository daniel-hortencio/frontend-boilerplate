import Section from '../../shared/Section';
import Text from '../../shared/Text';

const SectionExample = () => {
  return (
    <Section>
      <Text element="h1" limit={2}>
        Olha só que texto
        <Text element="span" text="bacana" />
        demais da conta Sôh! Eita carambolas meu irmão doidoo!!
      </Text>
      <span>Qualquer </span>
    </Section>
  );
};

export default SectionExample;
